import { app, BrowserWindow } from 'electron';

let win: BrowserWindow;

/**
 * Create a browser window.
 */
const createWindow = () => {
    win = new BrowserWindow({
        titleBarStyle: `hidden`,
        title: `StatPixel Overlay`,

        autoHideMenuBar: true
    });

    win.loadURL(`https://statpixel.net/overlay`);
    win.on(`closed`, () => {
        win = null;
    });
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
