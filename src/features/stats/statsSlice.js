import { createSlice } from '@reduxjs/toolkit'
import { fetchCovid } from '../../api/coronaApi'

const initialStatsState = {
  gloablStats: {},
  locations: [],
  isLoading: false,
  error: null
}

export function startLoading(state) {
  state.isLoading = true
}

export function loadingFailed(state, action) {
  state.isLoading = false
  state.error = action.payload
}

export const stats = createSlice({
  name: 'stats',
  initialState: initialStatsState,
  reducers: {
    getStatsLoading: startLoading,
    getLocationsSuccess: (state, { payload }) => {
      state.locations = payload
      state.isLoading = false
      state.error = false
    },
    getStatsFailure: loadingFailed
  }
})

export const {
  getStatsLoading,
  getLocationsSuccess,
  getStatsFailure
} = stats.actions

export const getLocations = () => async dispatch => {
  try {
    dispatch(getStatsLoading())
    const stats = await fetchCovid()
    dispatch(getLocationsSuccess(stats))
  } catch (err) {
    dispatch(getStatsFailure(err.toString()))
  }
}

export default stats.reducer
