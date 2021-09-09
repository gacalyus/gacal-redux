import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

export default class DashBoard extends Component {
  render() {
    return (
      <div  >
        <Box mt={4}>
        <Grid container>
          <Grid item xs={3}>
            <CategoryList />
          </Grid>
          <Grid item xs={9}>
            <ProductList />
          </Grid>
          </Grid>
          </Box>
      </div>
    );
  }
}
