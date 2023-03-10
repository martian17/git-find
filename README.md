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

## Output Format
```
<repo-name> <remote-name> <path> : <remote-url>
```
`repo-name` will be colored yellow if it is a normal repository, and cyan if it's a submodule

## Examples
### Example 1: Finding duplicates
<img src="https://user-images.githubusercontent.com/19868746/224398067-51852b05-ff46-42bf-a2e9-d90e147f8225.png" alt="git-find-duplicate"/>

### Example 2: Finding recursively
<img src="https://user-images.githubusercontent.com/19868746/224397456-b56604f5-be94-4a83-93b5-7fe5696e72a5.png" alt="git-find-duplicate"/>

### Example 3: Filter with submodule only
<img src="https://user-images.githubusercontent.com/19868746/224397493-07a6d3e2-9d80-4581-b53c-b288facb2e7e.png" alt="git-find-duplicate"/>

### Example 4: Wildcard with no submodule filter recursive
<img src="https://user-images.githubusercontent.com/19868746/224399868-5c2ad0d5-cbd4-4300-9f7e-991a763add8e.png" alt="git-find-duplicate"/>

### Example 5: Count repository instances
<img src="https://user-images.githubusercontent.com/19868746/224400289-0a2b4847-a197-4a8a-89b2-d28e504c3899.png" alt="git-find-duplicate"/>

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
Improve install process






