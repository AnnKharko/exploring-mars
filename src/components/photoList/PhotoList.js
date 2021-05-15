import React from "react";

import { PhotoItem } from '../photoItem';
import styles from './PhotoList.module.css';
import {Card, Container, Grid, Typography} from "@material-ui/core";

export const PhotoList = ({items, onPhotoClick}) => {
    console.log(items, 'from PhotoList');
    return (
        <div>
            <Container>
                <Typography variant={"h2"} gutterBottom>
                    {items[0].rover.name}
                </Typography>
                <Grid container spacing={6}>
                    {items.map((item) => (
                        <div onClick={() => onPhotoClick(item)}>
                            <Grid item xs={12} sm={6} md={4} >
                                <Card className={styles.card}>
                                    <PhotoItem key={item.id} {...item}/>
                                </Card>

                            </Grid>
                        </div>
                    ))}
                    <Grid></Grid>
                </Grid>
            </Container>
            {/*<h2> {items[0].rover.name} </h2>*/}
            {/*<p>Sol: { items[0].sol}</p>*/}
            {/*<hr/>*/}
            {/*<div className={styles.listWrapper}>*/}
            {/*    {items.map((item, index) => (*/}
            {/*        <div onClick={() => onPhotoClick(item)} className={styles.itemWrapper}>*/}
            {/*            <PhotoItem key={item.id} {...item}/>*/}
            {/*        </div>*/}
            {/*    ) )}*/}
            {/*</div>*/}
        </div>
    )
}
