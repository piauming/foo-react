import initialState from './InitialState';
import { addToHistory } from './reducers';

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addToHistory':
            return addToHistory(state, action.payload);
        default:
            return;
    }

}

export default reducer;