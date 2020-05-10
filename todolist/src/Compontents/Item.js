import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';

const ItemBox = styled.li`
    display:flex;
    align-item:center;
    padding:0;
    height:48px;

`;


function Item(){
    return(
        <ItemBox></ItemBox>
    )
}

export default Item;