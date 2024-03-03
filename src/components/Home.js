import data from './data.json';
import Chart from 'react-apexcharts';

function Home() {
    let series = [
        {
            data: data.data.Date.map((date, index)=> {
                //console.log(new Date(date).toDateString())
                //let formattedDate = new Date(date).toISOString().split('T')[0];
                return {
                    x: new Date(date).toDateString(),
                    y: [Math.round(data.data.Open[index]*100)/100, Math.round(data.data.High[index]*100)/100, Math.round(data.data.Low[index]*100)/100, Math.round(data.data.Close[index]*100)/100 ]
                }
            })
        }
    ];

    let options = {
        chart: {
          type: 'candlestick',
        },
        title: {
          text: 'Stock Price',
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
            formatter: function(val) {
                return "$" + val.toFixed(2);
            }
          }
        }
      };

    return (
        <div className='flex flex-col space-y-5 p-2'>
            <div className='text-center'>
                STOCK PRICE CANDLESTICK CHART
            </div>
            <div>
            <Chart type='candlestick' width={'100%'} height='400' series={series} options={options} />
            </div>
            <div className='font-bold font-serif' >
                fdgdfgfdg
            </div>
        </div>
    )
}

export default Home;