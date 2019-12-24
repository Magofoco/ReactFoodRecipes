import React from 'react';
import MyCard from "./MyCard";
import {Row, Col, Container} from "react-bootstrap";

function MyResults(results) {
    if (results["results"][0] === "emptyinitialresults") {
        return null
    } else if (results["results"].length > 0) {
        return (
            <div style={{marginTop: "40px"}}>
                <Container>
                    <Row>
                        {(results["results"]).map(function(result, index){
                            return (
                                <Col md={6}>
                                    <MyCard key={index} result={result} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div style={{marginTop: "40px"}}>
                There are no results for your search
            </div>
        )
    }
}

export default MyResults