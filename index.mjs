import {ArgumentParser} from "argparse";
import {resolve} from "path";
import {promises as fs} from "fs";
import Path from "path";

const parser = new ArgumentParser;
parser.add_argument("path", {nargs:"?",help:"path"});
parser.add_argument("--path", {help:"path to the target directory"});
parser.add_argument("--remote",{help:"specify remote"});
parser.add_argument("--name",{help:"specify repository name"});
parser.add_argument("--eacces",{action:"store_true",help:"show file access error"});
parser.add_argument("--eignore",{action:"store_true",help:"ignore all errors"});
parser.add_argument("--nosub",{action:"store_true",help:"ignore submodules"});
parser.add_argument("--subonly",{action:"store_true",help:"list only submodules"});
parser.add_argument("-r","--recursive",{action:"store_true",help:"recursive search"});
const args = parser.parse_args();
//console.log(args);
const path = resolve(args.path || ".");
//console.log(path);

const checkGit = async function(basePath,path,args,isSubmodule){
    const {name:_name,remote:_remote} = args;
    const configPath = Path.join(path,"config");
    const content = "" + await fs.readFile(configPath);
    const lines = content.split(/\n/);
    let remote;
    for(let line of lines){
        if(line[0] === "["){
            if(line.startsWith("[remote")){
                remote = line.slice(9,-2);
            }else{
                remote = undefined;
            }
        }else if(remote){
            line = line.trim();
            if(line.startsWith("url = ")){
                const url = line.slice(6);
                const name = url.slice(0,-4).split("/").pop();
                //console.log(url,name);
                let isMatch = true;
                if(_name)
                    isMatch &&= _name === name;
                if(_remote)
                    isMatch &&= _remote === url;
                if(isMatch){
                    let out = "";
                    if(isSubmodule){
                        out += `\u001b[36;1m${name}\u001b[0m`;
                    }else{
                        out += `\u001b[33;1m${name}\u001b[0m`;
                    }
                    console.log(`${out} \u001b[32m${remote}\u001b[0m \u001b[35;1m${basePath}\u001b[0m : \u001b[33m${url}\u001b[0m`);
                }
            }
        }
    }
};

const checkGitFile = async function(dirent,path,args){
    const gitpath = Path.join(path,".git");
    if(dirent.isDirectory()){
        if(args.subonly)return;
        await checkGit(path,gitpath,args,false);
    }else{
        if(args.nosub)return;
        const content = (""+await fs.readFile(gitpath)).trim();
        if(!content.startsWith("gitdir: "))return;
        await checkGit(path,Path.join(path,content.slice(8)),args,true);
    }
};

const handleError = function(err,args){
    if(err.code === "EACCES"){
        if(args.eacces)
            console.log(`access denied: ${err.path}`);
    }else{
        if(args.eignore)return;
        throw err;
    }
}

const checkDir = async function(path,args,depth){
    const subdirs = await fs.readdir(path,{ withFileTypes: true });
    for(let dirent of subdirs){
        if(dirent.name === ".git"){
            try{
                await checkGitFile(dirent,path,args);
            }catch(err){
                handleError(err,args);
            }
        }else if(depth>0 && dirent.isDirectory()){
            try{
                await checkDir(Path.join(path,dirent.name),args,depth-1);
            }catch(err){
                handleError(err,args);
            }
        }
    }
};


await checkDir(path,args,args.recursive?Infinity:1);



