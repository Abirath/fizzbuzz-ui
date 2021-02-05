import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import axios from 'axios'
import './FizzBuzz.css'

function FizzBuzz() {

    const [fizzbuzzList, setFizzbuzzList] = useState([])

    useEffect(() => {
        const fizzbuzzUrl = "https://localhost:44358/api/FizzBuzz";
        axios.get(fizzbuzzUrl).then(res=> {
            setFizzbuzzList(res.data);
        })       
    }, [])

    const renderTableHeader = () => {
        let headerValues = ['Number', 'Value']
        return headerValues.map((key, val) => {
            return <TableCell key={val}>{key}</TableCell>
        })
    }

    const renderTableRows = () => {

        return fizzbuzzList && fizzbuzzList.map((data) => {

            const {fizzBuzzStoreID, fizzBuzzValue} = data

            return (
                <TableRow key={fizzBuzzStoreID}>
                    <TableCell>{fizzBuzzStoreID}</TableCell>
                    <TableCell>{fizzBuzzValue}</TableCell>
                </TableRow>

            )

        })
    }

    return (
        <div>
            <TableContainer component={Paper}>
            <Table id='FizzBuzzView'>
            <TableHead>
                    <TableRow>
                        {renderTableHeader()}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows()}
                    </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default FizzBuzz
