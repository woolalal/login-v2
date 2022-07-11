import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FacebookIcon, TwitterIcon, GithubIcon } from '../icons/FontAwesomeIcons';

const FooterDiv = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 10%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IconsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextSpan = styled.span`
    font-size: 15px;
    margin: 10px 0;
`
const Footer = () => {
    return (
        <FooterDiv>
            <IconsWrap>
                <FacebookIcon size='2x' style={{cursor: 'pointer'}}/>
                <TwitterIcon size='2x' style={{margin: '0 10px', cursor: 'pointer'}}/>
                <GithubIcon size='2x' style={{cursor: 'pointer'}}/>
            </IconsWrap>
            <TextSpan>Practice Project.</TextSpan>
        </FooterDiv>
    )
}

export default Footer
