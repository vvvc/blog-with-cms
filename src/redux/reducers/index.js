import { combineReducers } from 'redux'

import postList from './postList'
import tagList from './tagList'
import adminStatus from './adminStatus'
import errorMsg from './errorMsg'

export default combineReducers({
  postList,
  tagList,
  adminStatus,
  errorMsg
})
