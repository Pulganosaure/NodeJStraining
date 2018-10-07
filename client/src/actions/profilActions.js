import axios from 'axios'
import {FETCH_PROFIL, CLEAR_CURRENT_PROFIL} from './types'

export const createProfile = (profileData) => async dispatch => {
  axios.post('api/profil/register', profileData)
  const profil = await axios.get('api/profils')
  getProfil(profil)

}

export const getProfil = () => async dispatch => {
  const profil = await axios.get('api/profils')
  let value = {
    isCreated: true,
    Informations: profil.data.Informations,
    Permissions: profil.data.Permissions,
    Statistiques: profil.data.Statistiques,
  }
  dispatch(LoadProfil(value))
}


export const LoadProfil = profil => {
  return {
    type: FETCH_PROFIL,
    payload: profil
  }
}


export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFIL,
  }
}
