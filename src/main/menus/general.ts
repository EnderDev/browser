import { Menu, MenuItem, app } from "electron";
import { appWindow } from "..";

export const getGeneralMenu = (tabId) => {
    // const { view } = appWindow.getViewFromId(tabId)

    return Menu.buildFromTemplate([
        {
            label: "Back",
            accelerator: "Alt+Left",
            click: () => {
                // view.webContents.goBack()
            }
        },
        {
            label: "Forward",
            accelerator: "Alt+Right",
            click: () => {
                // view.webContents.goForward()
            }
        },
        {
            label: "Reload",
            accelerator: "CmdOrCtrl+R",
            click: () => {
                // view.webContents.reload()
            }
        },
        {
            type: "separator"
        },
        {
            label: "Save As",
            accelerator: "CmdOrCtrl+S",
        },
        {
            label: "Print",
            accelerator: "CmdOrCtrl+P"
        },
        {
            label: "Send to device",
            accelerator: "CmdOrCtrl+I"
        },
        {
            type: "separator"
        },
        {
            label: "Zoom In",
            role: "zoomIn",
            accelerator: "CmdOrCtrl+=",
        },
        {
            label: "Zoom Out",
            role: "zoomOut",
            accelerator: "CmdOrCtrl+-",
        },
        {
            label: "Reset Zoom",
            role: "resetZoom",
            accelerator: "CmdOrCtrl+0",
            visible: true
        },
        {
            type: "separator",
        },
        {
            label: "View Page Source",
            accelerator: "CmdOrCtrl+U",
            click: () => {
                // const url = appWindow.getViewFromId(tabId).url

                // view.webContents.loadURL(`view-source:${url}`)
            }
        },
        {
            label: "Inspect",
            accelerator: "CmdOrCtrl+Shift+I",
            click: () => {
                // view.webContents.toggleDevTools()
            }
        }
    ])
}