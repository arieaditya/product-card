import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 10px 15px;
    max-width: 600px;
    margin: 0 auto;
`;

const Header = () => {
    return (
        <>
            <Wrapper>
                <Image src='/itemku-logo.svg' alt='logo' width={111} height={56}/>
            </Wrapper>
        </>
    )
}

export default Header