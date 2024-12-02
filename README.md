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

#how to list tags
-> git tag

#to delete tag locally and remotely:
locally -> git tag -d v1.7
remotely -> git push origin --delete v1.7

![dogPicture](./images/dog.avif)