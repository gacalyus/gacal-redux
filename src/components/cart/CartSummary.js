import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../reduxx/actions/cartActions";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Badge,
} from "reactstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link }from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "  Sepet'en başarıyla silindi...")
  }
  renderEmpty() {
    return (
      <DropdownToggle style={{ paddingRight: "50px", color: "sandybrown" }} nav>
        <ShoppingCartIcon />
        SEPETİNİZ BOŞ
      </DropdownToggle>
    );
  }
  renderSummary() {
    return (
      <Box style={{ paddingRight: "50px" }}>
        <UncontrolledDropdown>
          <DropdownToggle style={{ color: "sandybrown" }} nav caret>
            <ShoppingCartIcon />
            SEPETİNİZ
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  style={{ marginRight: "5px" , backgroundColor: "green" }}
                  onClick={() =>
                    this.removeFromCart(cartItem.product)
                  }
                >
                  -
                </Badge>
                {cartItem.product.productName}
                <Badge style={{ marginLeft: "5px" , backgroundColor: "red" }}>
                  {cartItem.quantity}
                </Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem> <Link to={"/cart"} > Sepete git </Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Box>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
