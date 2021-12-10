import React, {useState} from 'react';

//Api calls
import Axios from 'axios';

//Styles
import {Button, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const AmountAndResults = ( {baseCurrency, targetCurrency}) => {

    const [handleInput, setHandleInput] = useState();
    const [handleResult, setHandleResult] = useState();

    const fetchARCurrency =() =>{
        return Axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${baseCurrency}&vs_currencies=${targetCurrency}`)
        .then(res =>{
            //handle success
            const exchangeRate =res.data[baseCurrency][targetCurrency]
            setHandleResult(exchangeRate * handleInput?? 0);// if no value is here it is automatically zero
        })
        .catch(err =>{
            //handle error
        })
    }

   
    //console.log(handleResult)

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Amount and Results</Card.Title>
                    <Card.Text>Amount and Results</Card.Text>
                    <input type="number" value={handleInput} onChange={(e)=> setHandleInput(e.target.value)}/> <br /><br />
                    <Button style={{position: "center"}} variant="secondary" onClick={()=> {fetchARCurrency()}}>Convert</Button>
                    {handleResult && <h1>{handleResult} {targetCurrency}</h1>}
                </Card.Body>
            </Card>
        </>
    )
}

export default AmountAndResults;

