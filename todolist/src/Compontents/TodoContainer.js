import React from 'react';
import styled from 'styled-components';

const TodoContainerBox = styled.div`
    background:#243226;
    width:512px;
    height:976px;
    margin:0 auto;
`;

function TodoContainer({children}){
    return(
        <>
            <TodoContainerBox>{children}</TodoContainerBox>
        </>
    )
}

export default TodoContainer;