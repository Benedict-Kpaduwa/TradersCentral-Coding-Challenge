import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//Styles
import {Col} from 'antd';
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


const TargetCurrency = ({targetCurrency, setTargetCurrency}) => {

    const [options, setOptions] = useState([]);

    const fetchTCurrency =() =>{
        return Axios.get("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
        .then(res =>{
            //handle success
            setOptions(res.data);
        })
        .catch(err =>{
            //handle error
            setOptions([])
        })
    }

    useEffect(()=>{
        fetchTCurrency();
    },[])


    return (
        <> 
            <div>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Target Currency</Card.Title>
                        <Card.Text>Target Currency</Card.Text>
                        <Col span={24}>
                            <select value={targetCurrency} onChange={(event)=> setTargetCurrency(event.target.value)}>
                                <option value="" disabled selected hidden>Select a Target currency</option>
                                {options?.map(option => (
                                    <option value={option} key={option}>{option}</option>
                                ))}
                            
                            </select>
                        </Col>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}



export default TargetCurrency;