import React from 'react';
import {Form} from "react-bootstrap";

function MyDropdown(previousSearch) {

    function handleClick() {
        console.log("testestest")
    }

    return(
        <div>

            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select" style={{border: "none", outline: "none", boxShadow: "none"}}>
                    {previousSearch.previousSearch["myPreviousSearch"].map(function(preSearch, index){
                        return (
                            <option
                                style={{border: "none"}}
                                onClick={handleClick}
                            >
                                {preSearch}
                            </option>
                        )
                    })}
                </Form.Control>
            </Form.Group>

        </div>
    )

}

export default MyDropdown