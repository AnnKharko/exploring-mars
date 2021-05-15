import React from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import Button from '@material-ui/core/Button';

export const PaginationWrapper = ({children, currentPage, totalPages, onPrevClick, onNextClick}) => {

    const handleNextClick = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick() && onNextClick(currentPage + 1)
        }
    };

    const handlePrevClick = () => {
        if (currentPage - 1 > 0) {
            onPrevClick() && onPrevClick(currentPage - 1)
        }
    };

    return (
        <div >
            <Container style={{position: "fixed",  bottom: "60px", left: 0 }}>
                <Grid container spacing={5} justify={"center"}>
                    <Grid item>
                        <Button variant={"contained"} onClick={handlePrevClick} >Prev page</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h6"}> {currentPage} of { totalPages}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} onClick={handlePrevClick}>Load more...</Button>
                    </Grid>
                </Grid>
            </Container>
            {/*<div style={{position: "fixed", bottom: "60px", left: "350px"}}>*/}
            {/*    <button onClick={handlePrevClick}>prev page</button>*/}
            {/*    <span>{currentPage} of { totalPages}</span>*/}
            {/*    <button onClick={handleNextClick}>Load moore...</button>*/}
            {/*</div>*/}
            {children}
        </div>
    )
};
