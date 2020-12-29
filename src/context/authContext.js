import CreateDataContext from "./CreateDataContext";
import TrackerApi from '../api/Tracker';
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };

        case 'signin':
            return { errorMessage: '', token: action.payload };

        case 'clear_error_message': return { ...state, errorMessage: '' };
        case 'logout': return { token: null, errorMessage: '' };

        default:
            return state;
    };

};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('SignUp');
    }

}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
}

const signup = dispatch => async ({ email, password, navigation }) => {
    // this type of return is known as implicit.
    try {
        const response = await TrackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'something Went wrong with Sign Up' });
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await TrackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');


    } catch (err) {
        dispatch({
            type: 'add_error', payload: 'Invalid User Name or Password !'
        });
    }
};


const signout = dispatch => async () => {

    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout' });
    navigate('loginFlow')
}



export const { Context, Provider } = CreateDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' })