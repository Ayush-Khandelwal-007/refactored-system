import React from 'react';
import bell from "../images/Bell.svg";
import deadline from "../images/Deadline.svg";
import list from "../images/DefaulterList.svg";
import fee from "../images/Fee.svg";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
      background: "#FFCCBC",
      boxShadow: "0px 4px 20px #525CDD",
      borderRadius: "19px",
      width: "200px",
      height: "220px",
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


export default function DashboardOptions() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>

        <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                    src={bell}
                    alt="logo"
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
              <img
                src={deadline}
                alt="logo"
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
              <img
                src={list}
                alt="logo"
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
              <img
                src={fee}
                alt="logo"
            />
              </Paper>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
    )
}