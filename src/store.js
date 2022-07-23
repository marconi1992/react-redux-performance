import { configureStore } from '@reduxjs/toolkit';
import reducer from "./pages/redux/slice";

export default configureStore({
    reducer,
});