import { createSlice } from '@reduxjs/toolkit';

//defining initial state
const initialState = {
    loading: false,
    candleData: {
        Date: [],
        Open: [],
        High:[],
        Low: [],
        Close: [],
        Volume: [],
        Symbol: "'Ticker Symbol'"
    },
    series: [{
        date:[]
    }],
}

//defining reducers
export const dataSlice = createSlice({
    name: 'candle',
    initialState,
    reducers: {
        setCandleData: (state, action) => {
            state.candleData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSeries: (state, action) => {
            state.series = action.payload;
        }

    }
});

//action creators generated for each case reducer function
export const {setCandleData, setLoading, setSeries} = dataSlice.actions;

export default dataSlice.reducer;