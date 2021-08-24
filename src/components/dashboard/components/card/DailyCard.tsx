import {
    Card,
    CardContent,
    CardHeader,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
} from "@material-ui/core";
import React from "react";
import AddCircle from "@material-ui/icons/AddCircle";
import { Day } from "../../../../constants/card";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            padding: "1rem",
            margin: "2rem",
        },
    })
);

function DailyCard({ day }: { day: Day }) {
    const classess = useStyles();

    return (
        <Card className={classess.item}>
            <CardHeader
                title={`${day}요일`}
                action={
                    <IconButton size="medium">
                        <AddCircle />
                    </IconButton>
                }
            />
            <CardContent>입력한 값들을 넣을 예정이에유</CardContent>
        </Card>
    );
}

export default DailyCard;
