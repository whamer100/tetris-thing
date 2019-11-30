'use strict';
const electron = require('electron');

const app = electron.app;

// prevent window being garbage collected
let mainWindow;

const onClosed = () => {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

const createMainWindow = () => {
	const win = new electron.BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
    fullscreenable:false,
    fullscreen: false,
		maximizable: false,
		minimizable: false,
		resizable: false,
		useContentSize: true,
		title: "",
    webPreferences: {
      nodeIntegration: true
		}
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.setMenu(null);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});

app.on('browser-window-created', (e, window) => {
	window.setMenu(null);
});