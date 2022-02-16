import { Button, Card, Form, FormControl, FormFloating } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { projectAPI } from "../../services/ProjectService";
import { IProject } from "../../models/IProject";


const SearchBar = () => {

    const [filterData, setFilterData] = useState([] as any);
    const [wordEntered, setWordEntered] = useState("");
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(15);
    // , {skip: wordEntered === ""}

    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);

        if (!searchWord ) {
            setFilterData([]);
        } else {
            const newFilter = projects && projects.filter(project => {
                return project.title.toLowerCase().includes(searchWord.toLowerCase())
            });
            setFilterData(newFilter);
        }
    };

    const clearSearchState = () => {
        setFilterData([]);
        setWordEntered("");
    };

    return (
        <div >
            {isLoading && <h1>Loading search...</h1>}
            {error && <h1>Error searching...</h1>}
            <Form className="d-flex m-auto align-items-center" 
            style={{
                paddingLeft: "10px",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid #00008B",
            }}>
                <input
                    type="text"
                    className=" w-100 p-0  border-0 btn-outline-none  background-none "
                    style={{ outline: "none" }}
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <Button variant="secondary"
                    style={{
                        backgroundColor: "white",
                        color: "#00008B",
                        textTransform: "uppercase",
                        borderStyle: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        outline: "none",
                    }}
                    type="button"
                    onClick={clearSearchState}>
                    {wordEntered.length === 0 ? <i className="bi bi-search"></i> : <i className="bi bi-x-lg" ></i>}
                </Button>
            </Form>
            {filterData.length != 0 && (
                <Card className="results" style={{
                    width: "12.1em",
                    overflow: "auto",
                    position: "absolute",
                }}>
                    {filterData.map((project) => <Link to={`/card/${project.id}`} onClick={clearSearchState} style={{ textDecoration: "none" }}>{project.title}</Link>)}
                </Card>
            )
            }
        </div>
    )
}

export default SearchBar
