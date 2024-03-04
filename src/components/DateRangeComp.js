import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';


export default function DateRangeComp() {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    function handleSelect(ranges) {
        console.log(ranges)
        setDateRange(ranges.selection);
    }

    return (
        <DateRangePicker
            ranges={[dateRange]}
            onChange={handleSelect}
            maxDate={new Date()}
            retainEndDateOnFirstSelection={true}
            months={1}
            direction="horizontal"
        />
    )
}