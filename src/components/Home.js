import ChartComp from './Chart';
import DateRangeComp from './DateRangeComp';
import data from './data.json';
import './Home.css'
function Home() {
  

    return (
        <div className='flex flex-col space-y-5 p-2'>
            <div className='text-center'>
                STOCK PRICE CANDLESTICK CHART
            </div>
            <div>
                <ChartComp data={data} />
            </div>
            <div className='' >
                <div className='flex-row'>
                <div className='basis-1'><DateRangeComp/></div>
                </div>
            </div>
        </div>
    )
}

export default Home;