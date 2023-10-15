import { TbikeRentInfo, TrentState } from "@js/types/state/rentStateTypes";
import { createSlice, current } from "@reduxjs/toolkit";

import { getRentInfo } from "./async/getRentInfo";
import setLocalBikeInfoFn from "./redusers/setLocalBikeInfo";
import setActiveBikeFn from "./redusers/setActiveBike";
import setActiveBikeSizeFn from "./redusers/setActiveBikeSize";
import setActiveBikeBrandFn from "./redusers/setActiveBikeBrand";
import setBikeRentParamInfoFn from "./redusers/setBikeRentParamInfoFn";

const constInintState: TrentState = {
    bikeRentInfo: [],
    activeBike: ['alum', 'carbon', 'mountain', 'city'],
    activeBikeSize: 'Все',
    activeBikeBrand: 'Все',
    localBikeInfo: [],
    bikeRentParamInfo: []
}

export const rentRouter = createSlice({
    name: 'rentRouter',
    initialState: constInintState,
    reducers: {
        setActiveBike: setActiveBikeFn,
        setLocalBikeInfo: setLocalBikeInfoFn,
        setActiveBikeSize: setActiveBikeSizeFn,
        setActiveBikeBrand: setActiveBikeBrandFn,
        setBikeRentParamInfo: setBikeRentParamInfoFn
    },
    extraReducers: (builder)=>{
        builder.addCase(getRentInfo.fulfilled, (state: TrentState, action: {payload: TbikeRentInfo})=>{
            state.bikeRentInfo = action.payload
        })
    }
})

export const {
    setActiveBike, 
    setLocalBikeInfo, 
    setActiveBikeBrand, 
    setActiveBikeSize,
    setBikeRentParamInfo
} = rentRouter.actions