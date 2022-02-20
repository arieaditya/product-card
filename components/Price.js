import React from 'react'
import styled from 'styled-components'

const ProductPrice  = styled.h1`
    font-weight: 700;
    font-size: ${props => props.primary ? "20px" : "16px"};
    color: rgba(239,96,0,1);
    line-height: 1.25;
    line-height: 1.25;
    margin-right: 0.5rem;
`;


const Price = ({ price, primary }) => {
    
    return (
        <>
            <ProductPrice primary={primary}>Rp{Intl.NumberFormat("de-DE").format(price)}</ProductPrice>
        </>
   
    )
}

export default Price