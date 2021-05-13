import React, { useEffect, useState } from 'react';
import { PaginationWrapper, PhotoList } from '../../components';
import { photosService } from '../../services';
import styles from './Opportunity.module.css';
import { useHistory } from 'react-router-dom';

export const Opportunity = () => {
    const history = useHistory();
    const [photosList, setPhotosList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [photoData, setPhotoData] = useState(null);

    const fetchOpPhotos = async (photoParams) => {
        try {
            setIsLoading(true);
            const {photos} = await photosService.getOpportunityPhotos(photoParams);
            const totalResult = photos.length;
            const totalPages = Math.ceil(totalResult/25); // if 25 photo per page

            console.log('|||||||||||||||||||||');
            console.log(totalResult);
            console.log(totalPages);
            console.log('|||||||||||||||||||||');

            setPhotoData({totalResult, totalPages})
            setPhotosList(photos);
            return photos;
        } catch(e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
         fetchOpPhotos()
    },[]);

    const renderLoadingIndicator = () => (
        <div className={styles.loading}> Loading...</div>
    );

    const onPhotoClick = (photo) => {
        history.push(`/photo/${photo.id}`)
    };

    const handlePageChange = async () => {
        await fetchOpPhotos()
    };

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() :  (
                <PaginationWrapper
                    currentPage={1}
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
