import ChartComp from './Chart';
import data from './data.json';
import './Home.css'
import ModalComp from './Modal';
function Home() {

    return (
        <div className='flex flex-col space-y-5 p-2'>
            <div className='text-center font-bold'>
                STOCK PRICE CANDLESTICK CHART
            </div>
            <div>
                <ChartComp data={data} />
            </div>
            <div>
                <ModalComp />
            </div>
        </div>
    )
}

export default Home;