const git = require("isomorphic-git");
const http = require("isomorphic-git/http/node");
const fs = require("fs");
const path = require("path");

const gitdir = path.resolve(__filename, "../demo", '.git');

(async () => {
    oid = await git.GitRefManager.resolve({ fs, gitdir, ref: 'master' });
    console.log(oid);
})();
