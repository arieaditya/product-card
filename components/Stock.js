import React from 'react'
import styled from 'styled-components'

const LimitedStock  = styled.p`
    font-weight: normal;
    font-size: 11px;
    line-height: 1.375;
    margin: 0;
    padding: 0px 5px;
    border-radius: 5px;
    background-color: white;
    color: orange;
    border: 1px solid orange;
    display: inline-block;
`;

const AvailableStock = styled.p`
    font-weight: normal;
    font-size: 11px;
    line-height: 1.375;
    margin: 0;
    padding: 0px 5px;
    border-radius: 5px;
    background-color: white;
    color: green;
    border: 1px solid green;
    display: inline-block;
`;

const Stock = ({ amount }) => {
    
    return (
        <>
            {amount > 999 ? (
                <AvailableStock>
                    Stok 999+
                </AvailableStock>
            ) : (
                <LimitedStock>
                    Stok {amount}
                </LimitedStock>
            )}
            
        </>
   
    )
}

export default Stock