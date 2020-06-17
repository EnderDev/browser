import React from "react";
import { observer } from 'mobx-react';

import { WebviewTag } from "electron";

import { v4 } from 'uuid';
import { WebView } from "./style";

interface ViewProps {
    url: string;
}

@observer
export class View extends React.Component<ViewProps> {
    public id: string;
    public url: string;
    public favicon: string;

    public ready: boolean = false;
    public ua: string = "";
    public view: WebviewTag;

    constructor(props: any) {
        super(props)

        this.url = props.url;
    }

    public init() {
        if(this.ready == true) return;

        this.view = (document.getElementById(`tab-${this.id}`) as WebviewTag)

        this.view.addEventListener('dom-ready', () => {
            this.ready = true;
        })
    }

    private updateUA() {
        if(!this.view) return;
        
        const ua = navigator.userAgent.replace(/ DotBrowser\\?.([^\s]+)/g, '').replace(/ Electron\\?.([^\s]+)/g, '') + " Edg/83.0.478.50"

        this.view.setAttribute("useragent", ua)
        return ua;
    }

    public componentDidMount() {
        this.init()

        this.ua = this.updateUA();
    }

    render() {
        this.id = v4();
        
        return (
            <WebView src={this.url} id={`tab-${this.id}`} useragent={this.ua} />
        )
    }
}