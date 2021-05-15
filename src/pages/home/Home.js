import React, { useEffect, useState } from 'react';
import { PaginationWrapper, PhotoList } from '../../components';
import { photosService } from '../../services';
import styles from './Home.module.css';
import { useHistory } from 'react-router-dom';

export const Home = () => {
    const history = useHistory();
    const [photosList, setPhotosList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [photoData, setPhotoData] = useState(null);

    const fetchPhotos = async (photoParams) => {
        try {
            setIsLoading(true);
            const {photos} = await photosService.getPhotos('curiosity', photoParams);
            const totalResult = photos.length;
            // const page = 1;
            const totalPages = Math.ceil(totalResult/25); // if 25 photo per page
            setPhotoData({page: 2, totalResult, totalPages})
            setPhotosList(photos);
            console.log(photoData);

            return photos;
        } catch(e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos()
    },[]);

    const renderLoadingIndicator = () => (
        <div className={styles.loading}> Loading...</div>
    );

    const onPhotoClick = (photo) => {
        history.push(`/photos/${photo.id}`)
    };

    const handlePageChange = async (page) => {
        // setPhotoData({...photoData, page})
        await fetchPhotos({page});

    };

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() :  (
                <PaginationWrapper
                currentPage={photoData.page}
                totalPages={photoData.totalPages}
                onPrevClick={handlePageChange}
                onNextClick={handlePageChange}
                >
                    <PhotoList items={photosList} onPhotoClick={onPhotoClick} />
                </PaginationWrapper>
            ) }
        </div>
    )
};
