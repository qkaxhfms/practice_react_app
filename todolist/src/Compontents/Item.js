import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';

const Remove = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color:#ab193b;
    font-size:24px;
    cursor:pointer;
    &:hover{
        color:#ff6b6b;
    }
`;

const CheckCircle = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    background:#ab183b;
    font-size:24px;
    dieplay:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
`;

const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#dcdcdc;
`;

const ItemBox = styled.li`
    display:flex;
    align-items:center;
    padding:0;
    height:48px;

`;


function Item(){
    return(
        <ItemBox>
            <CheckCircle />
            <Text />
            <Remove>
                <MdDelete />
            </Remove>
        </ItemBox>
    )
}

export default Item;