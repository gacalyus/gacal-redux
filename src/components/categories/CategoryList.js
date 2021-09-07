import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../reduxx/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
  };

  render() {
    return (
      <div style={{ paddingLeft: "50px" }}>
        <h2>CategoryList</h2>
        <List component="nav" aria-label="contacts">
          {this.props.categories.map((category) => (
            <ListItem
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              <StarIcon />

              <Button disabled={category.id !== this.props.currentCategory.id}>
                <ListItemText>{category.categoryName}</ListItemText>
              </Button>
            </ListItem>
          ))}
        </List>
        Seçili Kategori 
        <Button style={{marginLeft:10}} variant="outlined" color="primary">
          {this.props.currentCategory.categoryName}
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
