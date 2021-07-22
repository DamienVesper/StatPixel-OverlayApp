import Electron, { app, BrowserWindow } from 'electron';

let win: BrowserWindow;

/**
 * Create a browser window.
 */
const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: `hidden`,
        title: `StatPixel Overlay`
    });

    win.loadURL(`https://statpixel.net/overlay`);
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
    if (!win) createWindow();
});
