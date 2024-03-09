import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRange } from './dataSlice';

export default function DateRangeComp() {
   
    const stateSelector = useSelector(state=>state.candle);
    const dispatch = useDispatch();

    const dateRange = stateSelector.dateRange;
    

    function handleSelect(ranges) {
        console.log(ranges);
        dispatch(setRange(ranges.selection));
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