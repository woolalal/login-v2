import React, { useState } from 'react'
import styled from 'styled-components';
import { ArrowUp } from '../icons/FontAwesomeIcons';

const ButtonWrap = styled.button`
    position: fixed;
    z-index: 100;
    right: 15px;
    bottom: 50px;
    height: 30px;
    width: 30px;
    padding: 0;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    &:hover{
        background: #000;
        transition: 0.5s ease;
    }
`

const ScrollToTop = () => {
    const [hover, setHover] = useState(false);

    const backToTop = () => {
        window.scroll({top: 0, behavior: "smooth"})
    }

    return (
        <>
            <ButtonWrap onClick={backToTop} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
                <ArrowUp style={{color: hover ? '#fff' : '#000'}}></ArrowUp>
            </ButtonWrap>
        </>
    )
}

export default ScrollToTop
