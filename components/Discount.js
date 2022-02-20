import React from 'react'
import styled from 'styled-components'

const PriceDiscount  = styled.p`
    font-weight: normal;
    font-size: ${props => props.primary ? "12px" : "11px"};
    line-height: 1.375;
    margin: 0;
    background-color: rgba(243,48,48,1);
    color: white;
    padding: 0px 4px;
    border-radius: 3px;
    display: inline;
`;

const Discount = ({ number, primary }) => {
    
    return (
        <>
            <PriceDiscount primary={primary}>
                {number}%
            </PriceDiscount>
        </>
   
    )
}

export default Discount