import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>ProductList
        <Button style={{marginLeft:10}} variant="outlined" color="secondary">
        {this.props.currentCategory.categoryName}
      </Button>
      </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}


export default connect(mapStateToProps)(ProductList);
