import data from './data.json';
import Chart from 'react-apexcharts';

function Home() {
    let series = [
        {
            data: data.data.Date.map((date, index)=> {
                let formattedDate = new Date(date).toISOString().split('T')[0];
                return {
                    x: formattedDate,
                    y: [Math.round(data.data.Open[index]*100)/100, Math.round(data.data.High[index]*100)/100, Math.round(data.data.Low[index]*100)/100, Math.round(data.data.Close[index]*100)/100 ]
                }
            })
        }
    ];

    let options = {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'Stock Price',
          align: 'center'
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
        <div>
            <Chart type='candlestick' width={1000} height='350' series={series} options={options} />
        </div>
    )
}

export default Home;