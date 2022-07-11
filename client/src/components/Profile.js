import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    Test
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tests
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Testing
                </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Profile
