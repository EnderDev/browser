import styled from "styled-components";
import { NAVIGATION_HEIGHT } from "../../../constants/window";

export const WebView = styled('webview')`
    height: calc(100% - ${NAVIGATION_HEIGHT}px)
`