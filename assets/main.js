const data = JSON.parse(decodeURIComponent(location.search.slice(1)));

const $ = document.querySelector.bind(document);

$('h1').textContent = data.title;
$('#description').textContent = data.description;
$('pre').textContent = data.changelog;
$('#extra').textContent = data.extraText;
$('#path').textContent = data.placeholder;
$('#find').textContent = data.buttons.find;
$('#patch').textContent = data.buttons.patch;

const { dialog } = require('electron').remote;
const rr = require('electron').remote.require;

const updater = rr('./updater');

$('#find').addEventListener('click', () => {
    dialog.showOpenDialog({
    }, ([path]) => {
        if (!updater.isValidElectronAppPath(path)) {
            alert(`${data.messages.invalidPath}: ${path}`);
            return;
        }

        $('#path').textContent = path;
    });
});

$('#patch').addEventListener('click', () => {
    const path = $('#path').textContent.trim();

    if (!path || path === data.placeholder) {
        alert(data.messages.noPath);
        return;
    }

    if (!updater.isValidElectronAppPath(path)) {
        alert(`${data.messages.invalidPath}: ${path}`);
        return;
    }

    const success = updater.commit(path);

    if (success) {
        alert(data.messages.success);
        updater.exit();
    } else {
        alert(data.messages.patchFail);
    }
});
