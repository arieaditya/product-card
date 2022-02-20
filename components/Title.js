import React from 'react'
import styled from 'styled-components'

const Subject  = styled.h1`
    font-weight: 700;
    font-size: inherit;
    line-height: 2rem;
    margin: 0;
    color: black;
    padding: 0 1rem;
`;


const Title = ({ name }) => {
    
    return (
        <>
            <Subject>{ name }</Subject>
        </>
   
    )
}

export default Title