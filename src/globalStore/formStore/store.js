import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../formSlice/formSlice';

export default configureStore({
    reducer: {
        form : formReducer,
    }
})
