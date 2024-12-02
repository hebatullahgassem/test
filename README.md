#to remove branches locally and remotely:
locally -> git branch -d dev, git branch -d test
remotely -> git push origin --delete dev, git push origin --delete test

#to checkout another branch without commit changes:
*Save Your Changes Temporarily
-> git stash
-> git checkout branchName
*If You Don't Need Them
-> git reset --hard
-> git checkout branchName
