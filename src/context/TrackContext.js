import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/Tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};


const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('tracks');
    dispatch({ type: "fetch_tracks", payload: response.data })

};
const createTrack = dispatch => async (name, locations) => {
    //make a request to APi
    try {
        await trackerApi.post('/tracks', { name, locations });
    } catch (err) {
        console.log(err)
    };
};


export const { Context, Provider } = CreateDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    [],

);