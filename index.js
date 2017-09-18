import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Root = styled.h1`
    animation: ${rotate} 2s infinite;
    color: red;
`;

export default function FancyHeading() {
    return (
        <Root>Hello, I should be red and rotating</Root>        
    );
}
