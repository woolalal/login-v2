import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap';
import styled from 'styled-components';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileWrap = styled.div`
    max-width: 360px;
    margin: auto;
`

const TitleText = styled.h5`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
`

const Profile = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => ({
        isLoggedIn: state?.user?.value?.isLoggedIn
    }))
    const [tab, setTab] = useState('profile')
    useEffect(() => {
        if(!isLoggedIn) {
            localStorage.removeItem('token');
            navigate('/');
        }
    }, [isLoggedIn])

    const handleSelect = (key) => {
        setTab(key);
    }
    return (
        <ProfileWrap className="mt-5">
            <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-center" onSelect={handleSelect}>
                <Tab eventKey="profile" title="Profile">
                    <TitleText className="mb-5">Basic Information</TitleText>
                    <EditProfile />
                </Tab>
                <Tab eventKey="changePassword" title="Password">
                    <TitleText>Change Password</TitleText>
                    <ChangePassword tab={tab}/>
                </Tab>
                </Tabs>
            </Container>
        </ProfileWrap>
    )
}

export default Profile
