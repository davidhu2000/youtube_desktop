currently in development...

To pull remote branches into local repo:

1) `git checkout -b <branchName>`
Create a branch of the same name as the remote branch.

2) You will be on the local branch with the same name as the remote branch.

3) `git branch --set-upstream-to=origin/<branchName> <branchName>`

This will set your local branch to track the remote branch of the same name.

4) `git pull` to pull down the branch information.

5) `git push origin <branchName>` to push up changes.  
