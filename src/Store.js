import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './redux/slicefile/TodoSlice'
export default configureStore({
    reducer: {
        todos: todoReducer,
      },
})
