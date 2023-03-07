import initialState from './InitialState';
import { setScrollTo } from './reducers';

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'setScrollTo':
            return setScrollTo(state, action.payload);
        default:
            return;
    }

}

export default reducer;