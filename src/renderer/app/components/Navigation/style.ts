import styled from "styled-components";
import { TOOLBAR_HEIGHT } from "../../../constants/window";

export const StyledNavigation = styled.div`
    display: flex;
    width: 100%;
    height: ${TOOLBAR_HEIGHT - 2}px;
    background-color: #ffffff;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
`;