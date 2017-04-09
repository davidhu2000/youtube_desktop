### To pull remote branches into local repo:

run `git fetch`, and all the remote branches should be pulled into the local repo.

**If that is unsuccessful, try the following:**

1) `git checkout -b <branchName>`
Create a branch of the same name as the remote branch.

2) You will be on the local branch with the same name as the remote branch.

3) `git branch --set-upstream-to=origin/<branchName> <branchName>`

This will set your local branch to track the remote branch of the same name.

4) `git pull` to pull down the branch information.

5) `git push origin <branchName>` to push up changes.  

### When working with a out of date branchName

If the remote branch is behind on the master, instead of running `git merge master` to get all the changes from the master branch, which creates a useless commit for the merging, use `git rebase master`. This will fast forward the current branch to match the head of the master branch. 
