//whatever data pushed from our app is stored in this store
import userReducer from './slice';
//config file for our store
const {configureStore} = require('@reduxjs/toolkit');
export const Store = configureStore({ 
    //kind of a func which stores the reducers in form of slices inside this obj.
    reducer: userReducer //using the userReducer
});

