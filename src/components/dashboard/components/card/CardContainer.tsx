import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { days } from "../../../../constants/card";
import DailyCard from "./DailyCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflowX: "scroll",
            flexDirection: "row",
            width: "max-content",
            padding: "8rem",
            "& .MuiSvgIcon-root": {
                fontSize: "2.5rem",
            },
        },
    })
);

function CardContainer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {days.map((item, idx) => (
                <DailyCard day={item} key={idx} />
            ))}
        </Grid>
    );
}

export default CardContainer;
