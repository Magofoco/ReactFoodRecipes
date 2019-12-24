import React from 'react';
import { Navbar } from 'react-bootstrap';

function MyNavbar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="http://localhost:3000/">

                    <img
                        alt="RecipeLogo"
                        src={require("../logos/logo.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Recipes '}

                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;