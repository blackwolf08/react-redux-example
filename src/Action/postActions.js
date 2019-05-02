import { NEW_POST, FETCH_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return res.json()
    })
    .then(data => {
        dispatch({
            type: FETCH_POST,
            payload: data
        })
    })
}