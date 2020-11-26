const http = require('isomorphic-git/http/node');

(async () => {
    // singleBranch: true
    // depth: 1
    const body = new Uint8Array([48,48,56,52,119,97,110,116,32,57,100,100,53,102,102,50,98,97,97,55,49,54,97,54,98,49,50,102,54,56,49,102,102,48,57,53,53,57,97,51,99,56,100,100,55,98,53,99,100,32,109,117,108,116,105,95,97,99,107,95,100,101,116,97,105,108,101,100,32,110,111,45,100,111,110,101,32,115,105,100,101,45,98,97,110,100,45,54,52,107,32,111,102,115,45,100,101,108,116,97,32,97,103,101,110,116,61,103,105,116,47,105,115,111,109,111,114,112,104,105,99,45,103,105,116,64,49,46,56,46,48,10,48,48,48,100,100,101,101,112,101,110,32,49,10,48,48,48,48,48,48,48,57,100,111,110,101,10])

    console.time();
    await http.request({
        method: 'GET',
        url: "https://github.com/vercel/next.js.git/info/refs?service=git-upload-pack",
        headers: {
        }
    })
    console.timeEnd();

    console.time()

    const raw = await http.request({
        method: 'POST',
        url: `https://github.com/vercel/next.js.git/git-upload-pack`,
        body: [body],
        headers: {
            ['content-type']: `application/x-git-upload-pack-result`,
            accept: 'application/x-git-upload-pack-result',
        },
    })

    for await (const variable of raw.body) {
    }

    console.timeEnd()
})()
