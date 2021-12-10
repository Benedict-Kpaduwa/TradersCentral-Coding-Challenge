import  { configureStore} from "@reduxjs/toolkit";
import { BaseCurrencyApi } from "../services/BaseCurrencyApi";
import { TargetCurrencyApi } from "../services/TargetCurrencyApi";
import { AmountAndResultsApi } from "../services/AmountAndResultsApi";

export default configureStore( {
    reducer: {
        [BaseCurrencyApi.reducerPath]: BaseCurrencyApi.reducer,
        [TargetCurrencyApi.reducerPath]: TargetCurrencyApi.reducer,
        [AmountAndResultsApi.reducerPath]: AmountAndResultsApi.reducer,
    },
})