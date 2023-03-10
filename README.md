# git-find
Find git repositories in your local file system by the repository name or remote URL.  
Specifying no remote and no name will list all repositories by default.
## Command options
```md
usage: index.mjs [-h] [--path PATH] [--remote REMOTE] [--name NAME] [--eacces] [--eignore] [--nosub] [--subonly] [-r] [path]

positional arguments:
  path             path

optional arguments:
  -h, --help       show this help message and exit
  --path PATH      path to the target directory
  --remote REMOTE  specify remote url to match
  --name NAME      specify repository name to match
  --eacces         show file access error
  --eignore        ignore all errors
  --nosub          ignore submodules
  --subonly        list only submodules
  -r, --recursive  recursive search
```

## Install
```
cd <your_bin_dir>
git clone https://github.com/martian17/git-find.git
mv git-find git-find-dir
ln -s git-find-dir/git-find ./git-find
cd git-find-dir
pnpm install
```

## Todo
Option to list repositories with uncommited changes or detached head.






