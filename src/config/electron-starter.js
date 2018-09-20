const electron = require('electron');

// Module to control the application file
const app = electron.app;

// Module to create native browser window
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const Menu = electron.Menu;

// Keep global reference to window object to avoid window
// being closed during JS object garbage collection
let mainWindow;

// Function which creates main window
createWindow = () => {
    // Create browser window
    mainWindow = new BrowserWindow({ width: 650, height: 350, maximizable: false, resizable: false, title: 'Time Doctor' });

    // load index.html of the app
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    // Development purposes
    mainWindow.webContents.openDevTools();

    // Callback for when window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const template = [
		{
			label: 'Time Doctor',
			submenu: [
				{
					role: 'quit'
				}
			]
		},
		{
			label: 'Widget',
			submenu: [
				{
                    label: 'Show',
                    click: function() {
                        console.log('Clicked show');
                    }
                },
				{
					label: 'Minimize',
                    click: function() {
                        console.log('Clicked minimize');
                    }
                },
                {
					type: 'separator'
				},
				{
					label: 'Exit',
                    click: function() {
                        console.log('Clicked exit');
                    }
                }
			]
        },
        {
            label: 'Lap Times',
            submenu: [
                {
                    label: 'Show',
                    click: function() {
                        console.log('Clicked show laps');
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Close',
                    click: function() {
                        console.log('Clicked close');
                    }
                }
            ]
        },
        {
            label: 'Contribute',
            click: function() {
                electron.shell.openExternal('https://github.com/DanCarl857/time-doctor-app')
            }
        }
	];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// Called after initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // Handle full closure on OS X
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', () => {
    // Handle issue where dock icon is clicked and there are no open windows
    if (mainWindow === null) {
        createWindow();
    }
});