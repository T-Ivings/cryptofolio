import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import {
  calculateDollarGrowth, 
  calculatePercentGrowth
} from '../../helpers/transactionHelper';

import { Breadcrumbs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '1em',
  },
  icon: {
    fontSize: 30,
    padding: '0 15px',
  },
  heading: {
    padding: theme.spacing(2)
  },
  breadcrumbs: {
    padding: theme.spacing(1),
    marginTop: '0.7em'
  }
}));

export default function WalletCard(props) {
  const classes = useStyles();
  const [period, setPeriod] = useState("month");
  const [dollarGrowth, setDollarGrowth] = useState(0);
  const [percentGrowth, setPercentGrowth] = useState(0);

  const { transactions, totalBalance } = props;

  useEffect(() => {
    // find monthly growth amount and percentage
    setDollarGrowth(calculateDollarGrowth(period, transactions));
    setPercentGrowth(calculatePercentGrowth(period, transactions));
  }, [transactions, period]);

  return (
    <Card>
      <Grid container className={classes.root}>
        <Grid item xs={8} >
          <Typography variant="h5" className={classes.heading}>
            Your Assets
            {/* <AccountBalanceWalletIcon className={classes.icon}/> */}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Typography onClick={() => setPeriod("year")}>
              Y
            </Typography>
            <Typography onClick={() => setPeriod("month")}>
              M
            </Typography>
            <Typography onClick={() => setPeriod("week")}>
              W
            </Typography>
            <Typography onClick={() => setPeriod("day")}>
              D
            </Typography>
          </Breadcrumbs>
        </Grid>

      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item xs={4} >
          <Paper className={classes.paper}>
            <Typography>
              Current Total ($)
            </Typography>
            {/* assuming that we know march 22nd is the last day */}
            {
              totalBalance ?
              "$" + totalBalance["2021-03-22"] :
              "unknown"
            }
          </Paper>
        </Grid>

        <Grid item xs={4} >
          <Paper className={classes.paper}>
            <Typography>
              { period === "month" ? "Monthly" 
                : period === "year" ? "Yearly"
                : period === "week" ? "Weekly"
                : "Daily"
              } Growth ($)
            </Typography>
            ${ dollarGrowth }
          </Paper>
        </Grid>

        <Grid item xs={4} >
          <Paper className={classes.paper}>              
            <Typography>
              { period === "month" ? "Monthly" 
                : period === "year" ? "Yearly"
                : period === "week" ? "Weekly"
                : "Daily"
              } Growth (%)
            </Typography>
            { percentGrowth }%
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
};