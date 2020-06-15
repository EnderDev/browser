import React from "react";
import { observer } from 'mobx-react';

import { WebviewTag } from "electron";

import { v4 } from 'uuid';
import { WebView } from "./style";

interface ViewProps {
    url: string;
    id?: string;
}

@observer
export class View extends React.Component<ViewProps> {
    public id: string;
    public url: string;
    public favicon: string;
    public view: React.RefObject<WebviewTag>;

    constructor(props: any) {
        super(props)

        if(!props.id) props.id == v4();

        this.id = props.id;
        this.url = props.url;
        this.view = React.createRef<WebviewTag>();
    }

    render() {
        return (
            <WebView src={this.url} ref={this.view} />
        )
    }
}