import actionTypes from './actionTypes'

import {
  getPost,
  getCategoryList,
  getTagList,
  getTagPost,
  getAuthorPost,
  verifyStatus,
  updatePost,
  getPvtDft
} from 'services'

const startFetchPost = () => ({
  type: actionTypes.START_FETCH_POST
})

const fetchPostSuccess = data => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: { data }
})

const fetchPostFailed = () => ({
  type: actionTypes.FETCH_POST_FAILED
})

export const fetchPost = postID => dispatch => {
  dispatch(startFetchPost())
  getPost(postID)
    .then(resp => {
      if (resp.data.errCode) {
        console.log(resp.data.errMsg)
        dispatch(fetchPostFailed())
        dispatch(setErrorMsg(resp.data.errCode))
      } else if (resp.data.id) {
        dispatch(fetchPostSuccess(resp.data))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(fetchPostFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchListFailed())
      dispatch(setErrorMsg(7))
    })
}

const startFetchList = () => ({
  type: actionTypes.START_FETCH_LIST
})

const fetchListSuccess = data => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  payload: { data }
})

const fetchListFailed = () => ({
  type: actionTypes.FETCH_LIST_FAILED
})

export const fetchList = (categoryID, tagID, authorID, type) => dispatch => {
  dispatch(startFetchList())
  if (categoryID) {
    getCategoryList(categoryID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })

  } else if (tagID) {
    getTagPost(tagID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })

  } else if (authorID) {
    getAuthorPost(authorID)
      .then(resp => {
        if (resp.data.errCode) {
          console.log(resp.data.errMsg)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(resp.data.errCode))
        } else if (resp.data[0].id) {
          dispatch(fetchListSuccess(resp.data))
        } else {
          console.log('Error: ' + resp.data)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(99))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchListFailed())
        dispatch(setErrorMsg(7))
      })

  } else {
    if (localStorage.getItem('purple4pur/blog:JWT')) {
      getPvtDft(localStorage.getItem('purple4pur/blog:JWT'), type)
        .then(resp => {
          if (resp.data.errCode) {
            console.log(resp.data.errMsg)
            dispatch(fetchListFailed())
            dispatch(setErrorMsg(resp.data.errCode))
          } else if (resp.data[0].id) {
            dispatch(fetchListSuccess(resp.data))
          } else {
            console.log('Error: ' + resp.data)
            dispatch(fetchListFailed())
            dispatch(setErrorMsg(99))
          }
        })
        .catch(err => {
          console.log(err)
          dispatch(fetchListFailed())
          dispatch(setErrorMsg(7))
        })
    } else {
      dispatch(fetchListFailed())
      dispatch(verifyToken())
    }
  }
}

const startFetchTags = () => ({
  type: actionTypes.START_FETCH_TAGS
})

const fetchTagsSuccess = data => ({
  type: actionTypes.FETCH_TAGS_SUCCESS,
  payload: { data }
})

const fetchTagsFailed = () => ({
  type: actionTypes.FETCH_TAGS_FAILED
})

export const fetchTags = () => dispatch => {
  dispatch(startFetchTags())
  getTagList()
    .then(resp => {
      if (resp.data[0].id) {
        dispatch(fetchTagsSuccess(resp.data))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(fetchTagsFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchTagsFailed())
      dispatch(setErrorMsg(7))
    })
}

const startVerifyToken = () => ({
  type: actionTypes.START_VERIFY_TOKEN
})

const verifyTokenSuccess = (user, id) => ({
  type: actionTypes.VERIFY_TOKEN_SUCCESS,
  payload: { user, id }
})

const verifyTokenFailed = () => ({
  type: actionTypes.VERIFY_TOKEN_FAILED
})

export const verifyToken = () => dispatch => {
  dispatch(startVerifyToken())
  if (localStorage.getItem('purple4pur/blog:JWT')) {
    verifyStatus(undefined, undefined, localStorage.getItem('purple4pur/blog:JWT'))
      .then(resp => {
        if (resp.data.activeUser) {
          dispatch(verifyTokenSuccess(resp.data.activeUser, resp.data.activeUserID))
        } else {
          dispatch(verifyTokenFailed())
          dispatch(removeToken())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(verifyTokenFailed())
        dispatch(setErrorMsg(7))
      })
  } else {
    dispatch(verifyTokenFailed())
  }
}

const startVerifyLogin = () => ({
  type: actionTypes.START_VERIFY_LOGIN
})

const verifyLoginSuccess = () => ({
  type: actionTypes.VERIFY_LOGIN_SUCCESS
})

const verifyLoginFailed = () => ({
  type: actionTypes.VERIFY_LOGIN_FAILED
})

export const verifyLogin = (user, pwd) => dispatch => {
  dispatch(startVerifyLogin())
  verifyStatus(user, pwd, undefined)
    .then(resp => {
      if (resp.data === '') {
        localStorage.setItem('purple4pur/blog:JWT', resp.headers.authorization)
        dispatch(verifyLoginSuccess())
        dispatch(verifyToken())
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg)
        dispatch(verifyLoginFailed())
        dispatch(setErrorMsg(resp.data.errCode))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(verifyLoginFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(verifyLoginFailed())
      dispatch(setErrorMsg(7))
    })
}

const startRemoveToken = () => ({
  type: actionTypes.START_REMOVE_TOKEN
})

const removeTokenSuccess = () => ({
  type: actionTypes.REMOVE_TOKEN_SUCCESS
})

export const removeToken = () => dispatch => {
  dispatch(startRemoveToken())
  localStorage.removeItem('purple4pur/blog:JWT')
  dispatch(removeTokenSuccess())
  dispatch(verifyToken())
}

const setErrorMsg = code => ({
  type: actionTypes.SET_ERROR_MSG,
  payload: { code }
})

export const resetErrorMsg = () => ({
  type: actionTypes.RESET_ERROR_MSG
})

const startAdd = () => ({
  type: actionTypes.START_ADD
})

const addPostSuccess = () => ({
  type: actionTypes.ADD_POST_SUCCESS
})

const addPostFailed = () => ({
  type: actionTypes.ADD_POST_FAILED
})

const resetAddMsg = () => ({
  type: actionTypes.RESET_ADD_MSG
})

export const addPost = (title, content, categoryID) => dispatch => {
  dispatch(startAdd())
  updatePost(localStorage.getItem('purple4pur/blog:JWT'), 'post', title, content, categoryID)
    .then(resp => {
      if (resp.data.status) {
        dispatch(addPostSuccess())
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg)
        dispatch(addPostFailed())
        dispatch(setErrorMsg(resp.data.errCode))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(addPostFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(addPostFailed())
      dispatch(setErrorMsg(7))
    })
    .finally(() => {
      setTimeout(() => { dispatch(resetAddMsg()) }, 5000)
    })
}

const addDraftSuccess = () => ({
  type: actionTypes.ADD_DRAFT_SUCCESS
})

const addDraftFailed = () => ({
  type: actionTypes.ADD_DRAFT_FAILED
})

export const addDraft = (title, content) => dispatch => {
  dispatch(startAdd())
  updatePost(localStorage.getItem('purple4pur/blog:JWT'), 'draft', title, content)
    .then(resp => {
      if (resp.data.status) {
        dispatch(addDraftSuccess())
      } else if (resp.data.errCode) {
        console.log(resp.data.errMsg)
        dispatch(addDraftFailed())
        dispatch(setErrorMsg(resp.data.errCode))
      } else {
        console.log('Error: ' + resp.data)
        dispatch(addDraftFailed())
        dispatch(setErrorMsg(99))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(addDraftFailed())
      dispatch(setErrorMsg(7))
    })
    .finally(() => {
      setTimeout(() => { dispatch(resetAddMsg()) }, 5000)
    })
}
