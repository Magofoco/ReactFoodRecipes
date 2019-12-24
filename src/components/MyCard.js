import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import {brown} from "@material-ui/core/colors";

function MyCard(result) {
    const resultImage = result.result.thumbnail

    function containDiary(ingredients) {
        if (ingredients.includes("cheese", "milk")) {
            return true
        } else {
            return false
        }

    }

    return(
            <div>
                <Card style={{marginBottom: "20px"}} >
                    <Card.Body>
                        <div style={{position: "relative", dispaly: "block"}}>
                            {resultImage !== "" ? (
                                <Card.Img variant="top" src={result.result.thumbnail}
                                          style={{marginBottom: "20px",
                                                  width: "50%"}}/>
                                ) : (
                                <Card.Img variant="top" src={require("../logos/notprovided.jpg")}
                                          style={{marginBottom: "20px",
                                                  width: "50%"}}/>
                            )
                            }

                            {containDiary(result.result.ingredients) ? (
                                <img src={require("../logos/violetdairy.png")}
                                     style={{
                                             width: "10%",
                                             transform: "rotate(45deg)",
                                             position: "absolute",
                                             top: "15%",
                                             right: "25%"
                                           }}
                                />
                            ) : null
                            }
                        </div>

                        <Card.Text>
                            <h5>
                                <a href={result.result.href} target="_blank">
                                    {result.result.title}
                                </a>
                            </h5>
                        </Card.Text>
                        <Card.Text>
                            <p> <b>Ingredients:</b> {result.result.ingredients}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
    )

}

export default MyCard