import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap';
import styled from 'styled-components';
import EditProfile from './EditProfile';

const ProfileWrap = styled.div`
    max-width: 360px;
    margin: auto;
`

const TitleText = styled.h5`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
`

const Profile = () => {
    return (
        <ProfileWrap className="mt-5">
            <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-center">
                <Tab eventKey="profile" title="Profile">
                    <TitleText className="mb-5">Basic Information</TitleText>
                    <EditProfile />
                </Tab>
                <Tab eventKey="changePassword" title="Password">
                    <TitleText>Change Password</TitleText>
                </Tab>
                </Tabs>
            </Container>
        </ProfileWrap>
    )
}

export default Profile
