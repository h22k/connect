#!/usr/bin/env sh

set -e

yarn build
cd dist
git init
git add -A

git commit -m "Deploying."

git push -f git@github.com:h22k/connect.git master:gh-pages

cd -