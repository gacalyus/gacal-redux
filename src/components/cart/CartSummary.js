import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <DropdownToggle style={{ paddingRight: "50px", color: "sandybrown" }} nav>
        SEPETİNİZ BOŞ
      </DropdownToggle>
    );
  }
  renderSummary() {
    return (
      <Box style={{ paddingRight: "50px" }}>
        <UncontrolledDropdown>
          <DropdownToggle style={{ color: "sandybrown" }} nav caret>
            SEPETİNİZ
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
                <Badge style={{ backgroundColor: "red" }}>
                  {cartItem.quantity}
                </Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>Sepete git</DropdownItem>
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
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(CartSummary);
