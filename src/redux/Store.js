import { configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice'

const cart = configureStore({
    reducer: {
        cart:CartSlice
    }
})

export default cart