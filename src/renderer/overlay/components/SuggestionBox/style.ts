import styled, { css } from 'styled-components';
import { NAVIGATION_HEIGHT } from '../../../constants/window';
import dot from '../../store';
import { observer } from 'mobx-react';

export const StyledSuggestionBox = styled.div`
  margin-top: ${NAVIGATION_HEIGHT - 6}px;
  margin-left: 25%;
  margin-right: auto;
  max-width: calc(1200px + 24px + 2 * 6px);
  background-color: white;
  border-radius: 0 0 3px 3px;
  border-left: 1px solid #1499ff !important;
  border-right: 1px solid #1499ff !important;
  border-bottom: 1px solid #1499ff !important;
  position: relative;

  ${({ visible, width, left }: { visible: boolean; width: number; left: number }) => css`
    display: ${visible ? 'block' : 'none'};
    width: ${width}px;
    margin-left: ${left}px;
  `};
`