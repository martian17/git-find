# git-find
Find git repositories in your local file system by the repository name or remote URL.  
Specifying no remote and no name will list all repositories by default.

<p align="center">
  <img src="https://user-images.githubusercontent.com/19868746/224466631-3fd2e476-a5bc-4a87-9946-a2b1578ccba9.png" alt="git-find-wildcard"/>
</p>

## Command options
```markdown
usage: git find [-h] [--path PATH] [--name NAME] [--remote REMOTE] [--eacces] [--eignore] [--nosub] [--subonly] [-r] [path]

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
Alternatively, you can access the same command through `git-find` with hyphen.

## Output Format
```
<repo-name> <remote-name> <path> : <remote-url>
```
`repo-name` will be colored yellow if it is a normal repository, and cyan if it's a submodule

## How to use
### Example 1: Finding duplicates
<img src="https://user-images.githubusercontent.com/19868746/224466454-698f1d7b-b87a-4785-b772-4a7f9e919c57.png" alt="git-find-duplicate"/>

### Example 2: Finding recursively
<img src="https://user-images.githubusercontent.com/19868746/224466461-aeb8b92a-de1f-4390-8f9f-a75409960794.png" alt="git-find-duplicate"/>

### Example 3: Filter with submodule only
<img src="https://user-images.githubusercontent.com/19868746/224466470-85c76aa3-9dff-4cb7-96ab-50b5acecc65e.png" alt="git-find-duplicate"/>

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






