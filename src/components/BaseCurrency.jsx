import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//Styles
import {Col} from 'antd';
import {Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const BaseCurrency = ({baseCurrency, setBaseCurrency}) => {

    const [options, setOptions] = useState([]);

    const fetchBCurrency =() =>{
        return Axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
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
        fetchBCurrency();
    },[])

    return (
        <> 
            <div>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title variant="secondary">Base Currency</Card.Title>
                        <Card.Text>Base Currency</Card.Text>
                        <Col span={20}>
                            <select value={baseCurrency} onChange={(event)=> setBaseCurrency(event.target.value)}>
                                <option value="" disabled selected hidden>Select a base currency</option>
                                {options?.map(option => (
                                    <option value={option.id} key={option.id}>{option.name}</option>
                                ))}
                            
                            </select>
                        </Col>
                    </Card.Body>
                </Card>
                  
            </div>
        </>
    )
}



export default BaseCurrency
