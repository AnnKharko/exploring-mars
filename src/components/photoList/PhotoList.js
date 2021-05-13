import React from "react";

import { PhotoItem } from '../photoItem';
import styles from './PhotoList.module.css';

export const PhotoList = ({items, onPhotoClick}) => {
    console.log(items, 'from PhotoList');
    return (
        <>
            <h2> Rover: {items[0].rover.name} </h2>
            <p>Sol: { items[0].sol}</p>
            <hr/>
            <div className={styles.listWrapper}>
                {items.map((item) => (
                    <div onClick={() => onPhotoClick(item)} className={styles.itemWrapper}>
                        <PhotoItem key= {item.id} {...item} />
                    </div>
                ) )}
            </div>
        </>
    )
}
