import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartSummary from "../cart/CartSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 1,
  },
}));

function Navi() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
          Material UI
          </Typography>

          <CartSummary></CartSummary>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navi;
