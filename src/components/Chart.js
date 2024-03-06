import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

export default function ChartComp({}) {

    const stateSelector = useSelector((state)=> state.candle);
    
    const data = stateSelector.candleData;

    let series = stateSelector.series;

    let options = {
        chart: {
            type: 'candlestick',
        },
        title: {
            text: `${data.Symbol} Stock Price`,
            align: 'left'
        },
        xaxis: {
            type: 'date'
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            labels: {
                formatter: function (val) {
                    return "$" + val.toFixed(2);
                }
            }
        }
    };

    return (
        <div className='p-2 rounded-md border-2 border-gray-500'>
            <Chart type='candlestick' width={'100%'} height='400' series={series} options={options} />
        </div>
    )

}