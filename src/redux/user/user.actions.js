

// They are functions that create object:


export const setCurrentUser = user => ({   // user = userAuth basically
    type: 'SET_CURRENT_USER',
    payload: user
})