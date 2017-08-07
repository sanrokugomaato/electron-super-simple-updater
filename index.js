const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const { format } = require('url');
const { readFileSync } = require('fs');

let update;

try {
    update = JSON.parse(readFileSync(join(__dirname, 'resources/update.json')));
} catch (err) {
    throw new Error('invalid update.json');
}

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 600,
        height: 400,
        useContentSize: true,
        resizable: true,
        title: update.title,
    })

    const url = format({
        pathname: join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
        search: JSON.stringify(update),
    });

    win.loadURL(url);

    win.on('closed', () => {
        win = null;
    })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit()
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
