import React, { useEffect, useState } from 'react';
import { PhotoList } from '../../components';
import { photosService } from '../../services';
import styles from './Home.module.css';
import {useHistory} from "react-router-dom";

const PaginationWrapper = ({children, currentPage, totalPages, onPrevClick, onNextClick}) => {

    const handleNextClick = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick() && onNextClick(currentPage + 1)
        }
    };

    const handlePrevClick = () => {
        if (currentPage - 1 >= 0) {
            onPrevClick() && onPrevClick(currentPage - 1)
        }
    };

    return (
        <div>
            <div>
                <button onClick={handlePrevClick}>prev page</button>
                <span>{currentPage} of { totalPages}</span>
                <button onClick={handleNextClick}>Load moore...</button>
            </div>
            {children}
        </div>
    )
}

export const Home = () => {
    const history = useHistory();
    const [photosList, setPhotosList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [photoData, setPhotoData] = useState(null);

    const fetchPhotos = async (photoParams) => {
        try {
            setIsLoading(true);
            const {photos} = await photosService.getCuriosityPhotos(photoParams);
            const totalResult = photos.length;
            const page = 1; // todo
            const totalPages = Math.ceil(totalResult/25); // if 25 photo per page
            setPhotoData({page, totalResult, totalPages})
            setPhotosList(photos);
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
        history.push(`/photo/${photo.id}`)
    };

    const handlePageChange = async (page) => {
        await fetchPhotos({page})
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
