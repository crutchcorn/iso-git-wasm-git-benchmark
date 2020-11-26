const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__filename, "../demo");

(async () => {
  console.time();
  await git.clone({
    fs,
    http,
    dir,
    url: "https://github.com/vercel/next.js.git",
    singleBranch: true,
    depth: 1,
  });
  console.timeEnd();
})()
