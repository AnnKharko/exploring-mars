import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { photosService } from '../../services';

export const PhotoDetails = () => {
    const [photoDetails, setPhotoDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {id} = useParams();
    // console.log('+++++++++++++++++++=');
    // console.log(params);
    // console.log('+++++++++++++++++++=');

    // const getPhotoDetails = async (id) => {
    //    try{
    //     setIsLoading(true);
    //     const data = await
    //     setPhotoDetails(data);
    //     } catch(e) {
    //     console.error(e);
    //     } finally {
    //     setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     getPhotoDetails();
    // });
    if(isLoading || !photoDetails || isLoading === null) {
        return (<div>Loading...</div>)
    }

    return(
        <div>
            <h1>Hello from PhotoDetails </h1>

        </div>
    )
};
