const electron = require('electron');

// Module to control the application file
const app = electron.app;

// Module to create native browser window
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const Menu = electron.Menu;
const ipc = electron.ipcMain;

// Keep global reference to window object to avoid window
// being closed during JS object garbage collection
let mainWindow;
let widgetWindow;
let showWidget = true;

// Function which creates main window
createWindow = () => {
    // utility variables
    const m_screen = electron.screen;
    const a_size = m_screen.getPrimaryDisplay().workAreaSize;

    // Create browser window
    mainWindow = new BrowserWindow({ width: 650, height: 350, maximizable: false, resizable: false, title: 'Time Doctor' });
    
    // load index.html of the app
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    });
    mainWindow.loadURL(startUrl);
    widgetWindow = new BrowserWindow({ 
        width: 200, 
        height: 48, 
        maximizable: false, 
        resizable: false, 
        frame: false,
        alwaysOnTop: true,
        x: a_size.width - 50,
        y: a_size.height - 50,
        closable: false,
        backgroundColor: '#6B849E',
    });
    widgetWindow.setAlwaysOnTop(true);
    widgetWindow.setSkipTaskbar(true);
    // Hack: Configuration for multipe windows using view managers keeps failing in react
    // TODO: Fix this when I have the time using view managers
    // widgetWindow.loadURL('file://' + __dirname + '/widget/widget.html');

    const widgetUrl = url.format({
        pathname: path.join(__dirname, '/widget/widget.html'),
        protocol: 'file',
        slashes: true
    });

    mainWindow.webContents.on('did-finish-load', () => {
        widgetWindow.loadURL(widgetUrl);
    });


    // For Development purposes only
    // mainWindow.webContents.openDevTools();

    // Callback for when window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
        // destroy the widget when you close main window
        widgetWindow.destroy();
    });

    widgetWindow.on('closed', () => {
        widgetWindow  = null;
    })

    const template = [
		{
			label: 'Time Doctor',
			submenu: [
                {
                    label: `Show/Hide Widget`,
                    click: () => {
                      showWidget = !showWidget;
                      if(showWidget){
                        widgetWindow.show();
                      }else{
                        widgetWindow.hide();
                      }
                      
                    },
                    role: 'widget'
                },
				{
                    label: 'Quit',
                    click: () => {
                        app.quit();
                        widgetWindow.destroy(); // destroy widget when you quit main window
                    },
                    accelerator: 'Cmd+Q' // a shortcut will be nice
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
            click: () => {
                electron.shell.openExternal('https://github.com/DanCarl857/time-doctor-app')
            }
        }
	];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    ipc.on('start', (event, arg) => {
        console.log('start');
    });
    ipc.on('timer', (event, args) => {
        widgetWindow.webContents.send("timer-start", args.start);
    });
    ipc.on('hide', (event) => {
        showWidget = !showWidget;
        widgetWindow.hide();
    });
    ipc.on('timer-state-change', (event, args) => {
        mainWindow.webContents.send("timer-state-change", args);
    });

    let widgetWebContent;

    widgetWindow.webContents.on('did-finish-load', () => {
        widgetWebContent = widgetWindow.webContents;
    });
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