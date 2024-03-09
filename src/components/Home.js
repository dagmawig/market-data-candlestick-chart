import ChartComp from './Chart';
import data from './data.json';
import './Home.css'
import ModalComp from './Modal';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCandleData, setSeries } from './dataSlice';
import calcSeries from './calcSeries';

function Home() {

    const dispatch = useDispatch();

    async function loadStock(ticker, d1, d2) {
        let dateTo = new Date();
        let dateFrom = new Date(dateTo - (2.628 * Math.pow(10, 9)));
        let to = dateTo.toISOString().split('T')[0];
        let from = dateFrom.toISOString().split('T')[0];

        const API1 = process.env.REACT_APP_API;
        let url = `${API1}?from=${from}&to=${to}&format=json&human=true&dateformat=timestamp`;

        let res = await axios.get(url);
        return res;
    }

    loadStock().then(resp => {
        if (resp.status===200) {
            resp.data.Symbol = 'AAPL';
            dispatch(setCandleData(resp.data));
            dispatch(setSeries(calcSeries(resp.data)));
        }
        else alert("error fetching sample stock data");
    })

    return (
        <div className='flex flex-col space-y-5 p-2'>
            <div className='text-center font-bold'>
                STOCK PRICE CANDLESTICK CHART
            </div>
            <div>
                <ChartComp data={data.data} />
            </div>
            <div>
                <ModalComp />
            </div>
        </div>
    )
}

export default Home;