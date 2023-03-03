# <img src="./docs/images/bullet.svg" width="19" /> Usage

First, install the dependencies by running on the terminal:

```
yarn
```

That done, just run the project with the following command:

```
yarn dev
```

Now, look at the **package.json** file in the root directory, you should update some of that settings with your project branding.

# <img src="./docs/images/bullet.svg" width="14" /> Distribution

### For all platforms

> **Note**: Check [Electron Builder docs](https://www.electron.build/cli) for more knowledge

```
yarn build
```

### For a specific one

```bash
yarn build --mac
# OR
yarn build --win
# OR
yarn build --linux
```

The builded apps will be available on the `dist` folder.

# <img src="./docs/images/bullet.svg" width="14" /> Releasing
> **Note**: to be able to perform `auto-updates` you will need a `code signed app`, for this purpose you will need to configure it by yourself, so check the [electron-builder](https://www.electron.build/code-signing) and [action-electron-builder](https://github.com/samuelmeuli/action-electron-builder#code-signing) docs please to get know how to do this.

To release your app on a GitHub release with `Windows`, `Mac` and `Linux` binaries, you can perform the following commands:

```bash
git pull
yarn make:release
```

Then, enter the new version of your app, so it will produce the following binaries in a draft release from the action:
  - `Windows` &#8594; `zip (portable)`, `.exe`
  - `Mac` &#8594; `.zip (app)`, `.dmg`
  - `Linux` &#8594; `AppImage`, `freebsd`, `pacman`, `rpm`, `deb`

In this process, the action will be triggered and the previous command will open the `releases` and `actions` page in your browser. When the action is finished, you can click in the `releases` page and refresh it to see the draft release with the binaries, so you can edit it and release it for your users.

https://user-images.githubusercontent.com/1149845/156939675-5ea0c510-ddd3-4de7-b293-87d3697bd1a8.mp4

# <img src="./docs/images/bullet.svg" width="14" /> Source Code Protection
> This process is done via [v8 bytecode compilation](https://nodejs.org/api/vm.html#vm_script_createcacheddata), to get more knowledge about it, please, [check the Electron Vite docs](https://evite.netlify.app/guide/source-code-protection.html).

Use the `bytecodePlugin` from `electron-vite` to enable it in the **electron.vite.config.ts**:

```ts
import { defineConfig, bytecodePlugin } from 'electron-vite'

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, bytecodePlugin()]
  },

  preload: {
    // Note: you will get the following warning using bytecodePlugin in the preload script in production build: "The vm module of Node.js is deprecated in the renderer process and will be removed", is up to you to keep bytecodePlugin here. Also, keep following the Electron Vite docs for more updates about this plugin!
    plugins: [tsconfigPaths, bytecodePlugin()]
  },

  renderer: {
    // ...
  }
})
```
Also, `sandbox` should be `false` in `webPreferences` for the windows you are using a preload script like:
```ts
const window = createWindow({
  id: 'main',

  webPreferences: {
    preload: join(__dirname, '../preload/index.js'),
    sandbox: false,
  },
})
```