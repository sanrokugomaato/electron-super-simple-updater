# electron-super-simple-updater

A super simple local updater for Electron, just with replacing app.asar

## What's this?

This is an updater for Electron apps, working just by replacing `app.asar`
locally. It doesn't require specific version scheme or remote server or any OS
specific packager such as `.dmg` or whatever. Just place a JSON file for update
information and `update.dat` which is basically renamed `app.asar`, in
`resources`. Aaaaand that's it.

If your app is something very serious, it is recommended
using [`autoUpdater`](https://github.com/electron/electron/blob/master/docs/api/auto-updater.md) though.

## Screenshot

![demo](https://user-images.githubusercontent.com/1013641/29039085-d6139e6a-7be4-11e7-9372-c6139b045cec.png)

You can customise the texts in [`./resources/update.json`](resources/update.json).

## How to use

1. Fork and clone this repository
2. Install deps: `npm install`
3. Replace files in [`./resources`](resources)
4. Run `npm run pkg`
5. Updater binaries will be placed in `appdist`
6. There's no step 6!

## License

[MIT](LICENSE) © [サンロクゴマート](https://sanrokugomaato.github.io)
