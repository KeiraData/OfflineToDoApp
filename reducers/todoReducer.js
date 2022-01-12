import { 
    FETCH_TODOS,
    ADD_TODO,
    UPDATE_TODO
 } from '../actions/ActionTypes';

const INITIAL_STATE = { todos: [] };
 
const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            //console.log('Action received');
            //console.log(action);
            return { 
                ...state,
                todos: action.payload.res
             };

        case ADD_TODO:
            return { todos: state.todos.concat(action.payload) };

        case UPDATE_TODO:
            return state;
    
        default:
            return state;
    }
};


export default todoReducer;