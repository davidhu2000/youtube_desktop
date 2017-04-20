# Git instructions

## To pull remote branches into local repo

### Method 1

1. `git fetch origin`
2. `git checkout -b branchName origin/branchName`

### Method 2

1. `git checkout -b <branchName>` Create a branch of the same name as the remote branch.
2. You will be on the local branch with the same name as the remote branch
3. `git branch --set-upstream-to=origin/<branchName> <branchName>`. This will set your local branch to track the remote branch of the same name.
4. `git pull` to pull down the branch information.
5. `git push origin <branchName>` to push up changes.

## When working with a out of date branch

If the remote branch is behind on the master, instead of running `git merge master` to get all the changes from the master branch, which creates a useless commit for the merging, use `git rebase master`. This will fast forward the current branch to match the head of the master branch.

## To stash and un-stash uncommitted changes

If you want to hide the current changes without committing them, run `git stash`. To get back the changes, run `git stash apply`.

You can also stash the changes, switch branch then apply those changes to the new branch.
