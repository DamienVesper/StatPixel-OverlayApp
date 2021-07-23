import { app, BrowserWindow } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating / removing shortcuts on Windows during installation process.
if (require(`electron-squirrel-startup`)) app.quit();

/**
 * Create the main viewport for the application.
 */
const createWindow = (): void => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,

        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// Create the window on application initialization.
app.on(`ready`, createWindow);

// Quit when all windows are closed.
app.on(`window-all-closed`, () => {
    // Mac applications minimize by default.
    if (process.platform !== `darwin`) app.quit();
});

app.on(`activate`, () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
