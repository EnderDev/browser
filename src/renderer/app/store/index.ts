import React from "react";

import { TabsStore } from "./tabs";
import { AddressbarStore } from "./addressbar";
import { EventsStore } from "./events";

import { observable } from 'mobx';
import { ConnectivityStore } from "./connectivity";

class Dot {
    public tabs = new TabsStore(this);
    public addressbar = new AddressbarStore(this);
    public connectivity = new ConnectivityStore(this);
    public events = new EventsStore(this);

    @observable
    public isMaximised: boolean = false;

    @observable
    public debugMode: boolean = false;

    @observable
    public isOnline: boolean = true;

    @observable
    public searchRef = React.createRef<HTMLInputElement>()

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            this.tabs.add({ url: "https://web.tabliss.io/", active: true })

            this.connectivity.checkForConnection().then((r: any) => {
                if(r.connected == -1 || r.connected == 1) this.isOnline = true;
                if(r.connected == 0) this.isOnline = false;
            })
            ipcRenderer.send('suggestionbox-width', `${this.searchRef.current.getBoundingClientRect().width}`);
            ipcRenderer.send('suggestionbox-left', `${this.searchRef.current.getBoundingClientRect().left}`);
        })
    }
}

export default new Dot();