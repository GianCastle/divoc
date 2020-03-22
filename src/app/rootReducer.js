import { combineReducers } from '@reduxjs/toolkit'

import statsReducers from '../features/stats/statsSlice'

const rootReducer = combineReducers({
  stats: statsReducers
})

export default rootReducer
