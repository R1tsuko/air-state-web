import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { getAirData } from '../api'

export interface AirConditionState {
    co2ppm: number
    temperature: number
}

const initialState: AirConditionState = {
    co2ppm: 0,
    temperature: 0,
}

export const airConditionSlice = createSlice({
    name: 'airCondition',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAirCondition.fulfilled, (state, action) => {
            state.co2ppm = +action.payload.co2
            state.temperature = +action.payload.temp
        })
    },
})

export const getAirCondition = createAsyncThunk(
    'airCondition/getAirCondition',
    async () => {
        const response = await getAirData()
        return response.data
    },
)

const selectCo2Ppm = (state: RootState) => state.airConditionReducer.co2ppm
const selectTemperature = (state: RootState) => state.airConditionReducer.temperature
const selectIsCo2Good = (state: RootState) => state.airConditionReducer.co2ppm <= 800
const selectIsTemperatureGood = (state: RootState) => state.airConditionReducer.temperature <= 27

export interface AirStatusData {
    isCo2Good: boolean
    isTemperatureGood: boolean
}

export interface AirMeasurmentsData {
    co2ppm: number
    temperature: number
}

export const selectAirMeasurments = createSelector([selectCo2Ppm, selectTemperature], (co2ppm, temperature): AirMeasurmentsData => ({ co2ppm, temperature }))
export const selectAirStatus = createSelector([selectIsCo2Good, selectIsTemperatureGood], (isCo2Good, isTemperatureGood): AirStatusData => ({ isCo2Good, isTemperatureGood }))

export default airConditionSlice.reducer