# git-find
Find git repositories in your local file system by the repository name or remote URL.  
Specifying no remote and no name will list all repositories by default.

<p align="center">
  <img src="https://user-images.githubusercontent.com/19868746/224391462-ad805d10-cfe7-4fb6-ada4-8799710d9871.png" alt="git-find-wildcard"/>
</p>

## Command options
```markdown
usage: index.mjs [-h] [--path PATH] [--name NAME] [--remote REMOTE] [--eacces] [--eignore] [--nosub] [--subonly] [-r] [path]

positional arguments:
  path             path

optional arguments:
  -h, --help       show this help message and exit
  (--path) PATH    path to the target directory
  --name NAME      specify repository name to match
  --remote REMOTE  specify remote url to match
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







