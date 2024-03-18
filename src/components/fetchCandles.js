import axios from "axios";

async function fetchCandles(ticker, d1, d2) {
    let url = "https://api.marketdata.app/v1/stocks/candles/D/" + ticker;
    let res = axios.get(url, {
        params: {
            format: process.env.REACT_APP_FORMAT,
            dateformat: process.env.REACT_APP_DATE_FORMAT,
            symbol_lookup: process.env.REACT_APP_SYMBOL_LOOKUP,
            human: process.env.REACT_APP_HUMAN,
            from: d1,
            to: d2,
            token: process.env.REACT_APP_MARKET_DATA_TOKEN
        }
    }).then(resp => {
        console.log(resp.data);
        if(resp.data) return resp.data;
        else return "";
    }).catch(err=> {
        console.log(err.message);
        return "";
    });

    return res;
};

export default fetchCandles;