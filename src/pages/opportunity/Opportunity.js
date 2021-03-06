import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {photosService} from "../../services";
import styles from "../home/Home.module.css";
import {PaginationWrapper, PhotoList} from "../../components";

export const Opportunity = () => {
    const history = useHistory();
    const [photosList, setPhotosList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [photoData, setPhotoData] = useState(null);

    const fetchPhotos = async (photoParams) => {
        try {
            setIsLoading(true);
            const {photos} = await photosService.getPhotos('opportunity', photoParams);
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

    const renderLoading = () => (
        <div className={styles.loading}> Loading...</div>
    );

    const onPhotoClick = (photo) => {
        history.push(`/photo/${photo.id}`)
    };

    const handlePageChange = async (page) => {
        console.log(page);
        await fetchPhotos({page})
    };
    return (
        <div>
            {isLoading || isLoading === null ? renderLoading() :  (
                <PaginationWrapper
                    currentPage={photoData.page}
                    totalPages={photoData.totalPages}
                    onPrevClick={handlePageChange}
                    onNextClick={handlePageChange}
                >
                    <PhotoList  items={photosList} onPhotoClick={onPhotoClick} />
                </PaginationWrapper>
            ) }
        </div>
    )
};
