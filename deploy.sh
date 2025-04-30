#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd dist

git init
git add -A
git commit -m '🎉 local build for deploy'

git push -f git@github.com:nicejade/fine.niceshare.site.git main:gh-pages
cd -