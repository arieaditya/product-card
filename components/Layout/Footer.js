import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: white;
    border-top: 1px solid #e2e8f0;
    padding: 1rem 1.5rem;
    max-width: 600px;
    margin: 0 auto;
`;

const FooterDescription = styled.p`
    color: #9b9b9b;
    text-align: center;
    line-height: 1.5;
    font-size: 10px;
    font-weight: 400;
`;

const Footer = () => {
    return (
        <Wrapper>
             <FooterDescription>
                © 2014 - 2021 PT. Five Jack All Rights Reserved. <br/> All other trademarks belong to their respective owners.
            </FooterDescription>
        </Wrapper>
       
    )
}

export default Footer