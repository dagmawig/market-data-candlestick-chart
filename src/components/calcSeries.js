export default function calcSeries(data) {
   return [{
        data: data.Date.map((date, index) => {
            let formattedDate = date.split("-").join("/");
            return {
                x: new Date(formattedDate).toDateString(),
                y: [Math.round(data.Open[index] * 100) / 100, Math.round(data.High[index] * 100) / 100, Math.round(data.Low[index] * 100) / 100, Math.round(data.Close[index] * 100) / 100]
            }
        })
    }];
}