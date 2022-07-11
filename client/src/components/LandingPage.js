import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TiredSVG } from '../assets/images/unlink-successful.svg'
import Interior from '../assets/images/interior.jpeg';
import Exterior from '../assets/images/exterior.jpg';

const DivWrap = styled.div`
    .tired-svg{
        height: 30vh;
    }
`

const TitleText = styled.h4`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
`

const SpanText = styled.p`
`

const RoundedImage = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 100%;
`

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <DivWrap>
            <div className='img-container'>
                <TitleText fontSize="3rem">Welcome to Notes</TitleText>
                <SpanText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugiat.</SpanText>
                <Button onClick={() => navigate('/signup')} variant="outline-light">Start your journey with us today.</Button>
            </div>
            <Container className="mt-5" fluid style={{padding: '7% 10%'}}>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <TiredSVG className="tired-svg"/>
                    </Col>
                    <Col className="py-5">
                        <TitleText fontSize="1.1rem">Tired of trying to find a paper to take down your notes?</TitleText>
                        <SpanText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                        </SpanText>
                    </Col>
                </Row>
            </Container>
            <TitleText className="my-5" textAlign="center">Start writing with us.</TitleText>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={4} className="d-flex justify-content-center align-items-center flex-column" style={{padding: '2% 4%'}}>
                        <RoundedImage src={Interior}></RoundedImage>
                        <TitleText className="my-3">Lorem</TitleText>
                        <SpanText>Duis ultrices sit amet sapien vitae maximus. Pellentesque neque ex, lacinia a commodo sed, fringilla sed nisi. Nulla mollis elit lorem, iaculis porttitor eros iaculis nec. Sed gravida quam a urna bibendum, sed tincidunt diam vestibulum.</SpanText>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="d-flex justify-content-center align-items-center flex-column" style={{padding: '2% 4%'}}>
                        <RoundedImage src={Exterior}></RoundedImage>
                        <TitleText className="my-3">Ipsum</TitleText>
                        <SpanText>Duis ultrices sit amet sapien vitae maximus. Pellentesque neque ex, lacinia a commodo sed, fringilla sed nisi. Nulla mollis elit lorem, iaculis porttitor eros iaculis nec. Sed gravida quam a urna bibendum, sed tincidunt diam vestibulum.</SpanText>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="d-flex justify-content-center align-items-center flex-column" style={{padding: '2% 4%'}}>
                        <RoundedImage src={Interior}></RoundedImage>
                        <TitleText className="my-3">Text</TitleText>
                        <SpanText>Duis ultrices sit amet sapien vitae maximus. Pellentesque neque ex, lacinia a commodo sed, fringilla sed nisi. Nulla mollis elit lorem, iaculis porttitor eros iaculis nec. Sed gravida quam a urna bibendum, sed tincidunt diam vestibulum.</SpanText>
                    </Col>
                </Row>
            </Container>
        </DivWrap>
    )
}

export default LandingPage
