export type StateType = {
    isLoading: boolean
}

export type SetLoadingAT = {
    type: 'SET-LOADING'
    isLoading: boolean
}
export type ActionsType = SetLoadingAT

const initState = {
isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean):SetLoadingAT => ({type: 'SET-LOADING', isLoading}) // fix any