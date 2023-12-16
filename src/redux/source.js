import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils";

const source = createSlice({
    name: 'source',
    initialState: {
        account: null
    },
    reducers: {
        setAccount: (state, action) =>{
            state.account = action?.payload || getLocalStorage('account')
        }
    }
})
export const { setAccount } = source.actions
export default source.reducer