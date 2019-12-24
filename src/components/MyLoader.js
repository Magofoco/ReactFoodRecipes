import React, {Component} from 'react';
import { Spinner } from 'react-bootstrap';

function MyLoader({loading}) {
    if (loading) {
        return (
            <div style={{marginTop: "40px"}}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    } else {
        return null

    }
}


export default MyLoader;