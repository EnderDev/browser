import { AppWindow } from "./app";
import { app, ipcMain, protocol } from "electron";
import { autoUpdater } from 'electron-updater';
import { startProtocolService } from "./tools/protocol";

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

autoUpdater.checkForUpdatesAndNotify();

if(process.env.ENV == "development") process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true.toString();

app.name = "Dot Browser"

protocol.registerSchemesAsPrivileged([
    { 
        scheme: 'dot', 
        privileges: {       
            bypassCSP: true,
            secure: true,
            standard: true,
            supportFetchAPI: true,
            allowServiceWorkers: true,
            corsEnabled: false
        } 
    }
])

app.on('ready', () => {
    setTimeout(() => {appWindow = new AppWindow();}, 500)

    startProtocolService()
})