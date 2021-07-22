import Electron, { app, BrowserWindow } from 'electron';

let win: BrowserWindow;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: `hidden`,
        title: `Krew.io`,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile(`index.html`);
    win.on(`closed`, () => win = null);
};

app.on(`ready`, () => {
    createWindow();
});

app.on(`window-all-closed`, () => {
    if (process.platform !== `darwin`) app.quit();
    console.log(`Sucessfully shut down application.`);
});

app.on(`activate`, () => {
    if (win == null) createWindow();
});
