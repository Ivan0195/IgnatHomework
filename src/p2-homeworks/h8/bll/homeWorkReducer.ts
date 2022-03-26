import {UsersType} from "../HW8";


export type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}
export type CheckAT = {
    type: 'check'
    payload: 18
}

export const homeWorkReducer = (state: UsersType, action: SortAT | CheckAT): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = state.map(u => ({...u}))
            newState.sort((a,b) => a.age-b.age)
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return  state.filter(u => u.age >= 18 ? u : null)
        }
        default: return state
    }
}