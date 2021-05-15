import React from "react";
import styles from './PhotoItem.module.css';
import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";

// camera: {id: 23, name: "CHEMCAM", rover_id: 5, full_name: "Chemistry and Camera Complex"}
// earth_date: "2012-08-16"
// id: 3132
// img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/soas/rdr/ccam/CR0_398380645PRCLF0030000CCAM04010L1.PNG"
// rover: {id: 5, name: "Curiosity", landing_date: "2012-08-06", launch_date: "2011-11-26", status: "active"}
// sol: 10

export const PhotoItem = (props) => {

    const {id, img_src, earth_date, camera: {name, full_name}} = props;

    return (
        <div>

                        <Card className={styles.card}>
                            <CardMedia className={styles.cardMedia} image={`${img_src}`}  />
                            <CardContent style={{height: "70px", backgroundColor: "lightgray", color: "white"}}>
                                <Typography variant={"h5"} component={"h2"} > {id}</Typography>
                                <Typography variant={"p"} > {full_name}</Typography>
                            </CardContent>
                        </Card>
        </div>
        // <div className={styles.photoItem}>
        //     <div className={styles.img} style={{ backgroundImage: `url(${img_src})`}}> </div>
        //     <div>
        //         <h2>{id}</h2>
        //         <h2>{full_name}  </h2>
        //         <span>{earth_date}</span>
        //     </div>
        // </div>
            // {/*<h2>Rover: {name}  sol: {sol} </h2>*/}



    )
}
