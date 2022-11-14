import axios from 'axios';
import { ActionType } from'../action-types/index'
import { Action } from'../actions/index'
import { Dispatch } from 'redux'

export const searchRepository = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search?',
            { params: {
                text: term
            }
        })

        const names = data.objects.map((result: any) => {
            return result.package.name
        })

        dispatch({ 
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
        })

        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}

export function searchRepositories(term: string): any {
  throw new Error('Function not implemented.');
}

