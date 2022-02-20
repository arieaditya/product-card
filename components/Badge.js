import React from 'react'
import styled from 'styled-components'

const Badges = styled.span`
    line-height: 1.375;
    height: 1rem;
    background-color: #d4edda;
    color: #208060;
    font-size: 11px;
    border-radius: 0.25rem;
    padding: 1px 4px;
`;

const Badge = ({ badgesDetail }) => {
    return (
        <>  
            {badgesDetail && (
                <Badges>{badgesDetail}</Badges>
            )}
        </>
    )
}

export default Badge