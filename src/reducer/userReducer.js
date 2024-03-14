import {
    FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS,
    CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS
} from '../action/types';


const INITIAL_STATE = {

    listUsers: [],
    isLoading: false,
    isError: false,
    isCreateing: false
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST", action);

            return {

                ...state,
                isLoading: true,
                isError: false

            };

        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS", action);

            return {

                ...state,
                listUsers: action.payload,
                isLoading: false,
                isError: false

            };
        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR", action);

            return {

                ...state,
                isLoading: false,
                isError: true

            };

        case CREATE_USER_REQUEST:
            console.log("CREATE_USER_REQUEST", action);

            return {

                ...state,
                isCreateing: true

            };

        case CREATE_USER_SUCCESS:
            console.log("CREATE_USER_SUCCESS", action);

            return {

                ...state,
                isCreateing: false

            };
        case CREATE_USER_ERROR:
            console.log("CREATE_USER_ERROR", action);

            return {

                ...state,
                isCreateing: false
            };

        default: return state;

    }

};

export default reducer;