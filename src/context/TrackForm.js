import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from './LocationContext';
import Spacer from '../Components/Spacer';
import useSaveTrack from '../Hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording, stopRecording, changeName } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return <>
        <Input value={name}
            onChangeText={changeName}
            placeholder="Enter Name"
        />

        {
            recording ? <Button title='Stop recording'
                onPress={stopRecording}
            />
                :
                <Button title='Start recording'
                    onPress={startRecording}
                />
        }
        <Spacer>
            {recording && locations.length ?
                <Button title='Save Recording'
                    onPress={saveTrack}
                /> : null}
        </Spacer>



    </>
};

export default TrackForm;