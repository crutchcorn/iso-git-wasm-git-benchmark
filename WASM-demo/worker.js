var Module = {
    locateFile: function(s) {
      return 'https://unpkg.com/wasm-git@0.0.4/' + s;
    }
};

importScripts('https://unpkg.com/wasm-git@0.0.4/lg2.js');

Module.onRuntimeInitialized = () => {
    const lg = Module;

    FS.mkdir('/working');
    FS.mount(MEMFS, { }, '/working');
    FS.chdir('/working');    

    FS.writeFile('/home/web_user/.gitconfig', '[user]\n' +
                'name = Test User\n' +
                'email = test@example.com');

    const start = performance.now()
    lg.callMain([
      "clone",
      `http://localhost:5000/gothinkster/react-redux-realworld-example-app.git`,
      "testrepo",
    ]);
    const end = performance.now()

    console.error(end - start);
  }
