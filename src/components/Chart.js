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
            align: 'left',
            style: {
                color: "#3B82F6",
                fontFamily: "Courier",
                fontSize: '26px'
            }
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