import axios from 'axios'
import {LOADING_PROFIL, CLEAR_CURRENT_PROFIL} from './types'

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: LOADING_PROFIL,
        payload: err.response.data,
      })
    )
}

export const getProfil = () => dispatch => {
  axios
    .get('http://192.168.1.26:5000/api/profils')
    .then(res => {
       let value = {
        isCreated: true,
        Informations: res.data.Informations,
        Permissions: res.data.Permissions,
        Statistiques: res.data.Statistiques,
      }
      dispatch(LoadProfil(value))

    })
}


export const LoadProfil = profil => {
  return {
    type: LOADING_PROFIL,
    payload: profil
  }
}


export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFIL,
  }
}
