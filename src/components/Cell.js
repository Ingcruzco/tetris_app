import React from 'react';
import { PIECES } from '../pieces';
import { CellStyle } from './styles/StyleCell';


const Cell=({type})=>{
    return (
        <CellStyle color={PIECES[type].color} type={type}>
        </CellStyle>
    );
}

export default React.memo(Cell);