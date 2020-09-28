
import {UserActionTypes} from './user.types'
// They are functions that create object:


export const setCurrentUser = user => ({   // user = userAuth basically
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})