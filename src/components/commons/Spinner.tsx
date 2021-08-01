import { createStyles, makeStyles, Theme } from "@material-ui/core";
import SpinnerPng from "../../assets/images/spinner.png";
import { useRequestState } from "../../providers/request";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spinnerWrapper: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
        spinnerContainer: {
            display: "block",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
        },
    })
);

export default function Spinner() {
    const requestState = useRequestState();
    const classes = useStyles();

    const renderSpinnder = () => {
        if (requestState.state !== "start") {
            return null;
        }
        return (
            <div className={classes.spinnerWrapper}>
                <div className={classes.spinnerContainer}>
                    <img src={SpinnerPng} alt="" />
                </div>
            </div>
        );
    };
    return renderSpinnder();
}
