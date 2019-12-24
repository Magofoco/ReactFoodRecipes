import React from 'react';
import {Container, InputGroup, FormControl, DropdownButton, Dropdown, Col, Row} from 'react-bootstrap'
import MyLoader from "./MyLoader";
import MyResults from "./MyResults";
import axios from 'axios';
import MyCard from "./MyCard";
import MyDropdown from "./MyDropdown";

function MySearchBar() {

    const [search, setSearch] = React.useState([]);
    const [previousSearch, setPreviousSearch ] = React.useState({myPreviousSearch: []});
    const [results, setResults] = React.useState(["emptyinitialresults"]);
    const [loading, setLoading] = React.useState(false);

    function handleChange(e) {
        setSearch(e.target.value)
    }


    function rememberSearch() {
        if (previousSearch["myPreviousSearch"].length < 6) {
            setPreviousSearch(prevState => ({
                myPreviousSearch: [...prevState.myPreviousSearch, search]
            }))
        } else {
            let deleteOldest = previousSearch["myPreviousSearch"].shift
            setPreviousSearch(prevState => ({
                myPreviousSearch: [...prevState.myPreviousSearch, search]
            }))
        }
    }

    function cleanSearch(query){
        return query
    }

    function handleSubmit(e) {
        e.preventDefault()
        rememberSearch()
        let cleanedQuery = cleanSearch(search)

        setLoading(true)
        let myUrl = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + cleanedQuery
        console.log(myUrl)
        axios.get(myUrl)
            .then(function (response) {
                setResults(response.data.results);
                setLoading(false)
            })
    }

    return(
        <div>
            <Container style={{marginTop: "40px"}}>
                {previousSearch["myPreviousSearch"].length === 0 ? (
                    <form onSubmit={handleSubmit}>
                        <InputGroup size="lg">
                            <FormControl
                                required
                                role="form"
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                onChange={handleChange}
                                placeholder="Type here your search!"
                            />
                        </InputGroup>
                    </form>
                    ) : (
                    <form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                // variant="outline-secondary"
                                title="Previous searches"
                                id="input-group-dropdown-1"
                                style={{marginBottom: "0px"}}
                            >
                                <MyDropdown previousSearch={previousSearch}/>
                            </DropdownButton>
                            <FormControl
                                aria-describedby="basic-addon1"
                                onChange={handleChange}
                                placeholder="Type here your search or check previous searches!"
                            />
                        </InputGroup>
                    </form>
                    )
                }
                <MyLoader loading={loading} />
                <MyResults results={results} />
            </Container>
        </div>
    )

}

export default MySearchBar