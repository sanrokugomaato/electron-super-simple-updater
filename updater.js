const { join, dirname } = require('path');
const os = require('os');
const fs = require('original-fs');

const isWin = os.platform() === 'win32';

const isFile = (p) => {
    try {
        return fs.statSync(p).isFile();
    } catch (err) {
        return false;
    }
};

const isDirectory = (p) => {
    try {
        return fs.statSync(p).isDirectory();
    } catch (err) {
        return false;
    }
};

const appAsarPath = (from) => {
    if (isWin) {
        // window
        if (isDirectory(from)) {
            return join(from, 'resources/app.asar');
        } else {
            return join(dirname(from), 'resources/app.asar');
        }
    } else {
        // mac
        return join(from, 'Contents/Resources/app.asar');
    }
};

exports.isValidElectronAppPath = (path) => {
    if (!isFile(path) && !isDirectory(path)) {
        return false;
    }
    const asar = appAsarPath(path);
    return isFile(asar);
};

exports.commit = (path) => {
    const asar = appAsarPath(path);

    try {
        fs.writeFileSync(asar, fs.readFileSync('resources/update.asar'));
        return true;
    } catch (err) {
        return false;
    }
};

exports.exit = () => process.exit(0);
