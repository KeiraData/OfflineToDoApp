import { 
    FETCH_TODOS,
    FETCH_TODOS_COMMIT,
    FETCH_TODOS_ROLLBACK,
    ADD_TODO,
    ADD_TODO_COMMIT,
    ADD_TODO_ROLLBACK,
    UPDATE_TODO,
    UPDATE_TODO_COMMIT,
    UPDATE_TODO_ROLLBACK
 } from './ActionTypes';

import axios from 'axios';


 const API_BASEURL = `https://466e-191-98-96-252.ngrok.io/api/`;

const fetchTodos = () => {
    return (dispatch) => {
        axios.get(`${API_BASEURL}todos`)
            .then((res) => {
                //console.log('Fetching data...');
                //console.log(res.data.todos);
                res = res.data.todos;
                return (
                    dispatch({
                        type: FETCH_TODOS,
                        payload: {res},
                        meta: {
                            /*offline: {
                                effect: { url: `${API_BASEURL}todos`, method: 'GET' },
                                commit: { type: FETCH_TODOS_COMMIT, meta: {json} },
                                rollback: { type: FETCH_TODOS_ROLLBACK, meta: {json} }
                            }*/
                        }
                    })
                );
            })
            .catch(() => {
                return(dispatch({
                    type: FETCH_TODOS,
                    payload: ["Failed"]
                }));
            })
    };
};

const addTodo = todo => ({
    type: ADD_TODO,
    payload: { todo },
    meta: {
        offline: {
            effect: { url: `${API_BASEURL}todos`, method: 'POST', json: { todo } },
            commit: { type: ADD_TODO_COMMIT, meta: { todo } },
            rollback: { type: ADD_TODO_ROLLBACK, meta: { todo } }
        }
    }
});

const updateTodo = todo => ({
    type: UPDATE_TODO,
    payload: { todo },
    meta: {
        offline: {
            effect: { url: `${API_BASEURL}todos/${todo.id}`, method: 'POST', json: { todo } },
            commit: { type: UPDATE_TODO_COMMIT, meta: { todo } },
            rollback: { type: UPDATE_TODO_ROLLBACK, meta: { todo } }
        }
    }
});


export { fetchTodos, addTodo, updateTodo };