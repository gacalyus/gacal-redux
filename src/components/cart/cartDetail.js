import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../reduxx/actions/cartActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import alertify from "alertifyjs";
import { Badge } from "reactstrap";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

class cartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "  Sepet'en başarıyla silindi...");
  }
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell style={{ fontWeight: "bolder" }}>Ürün Adı</TableCell>
                <TableCell style={{ fontWeight: "bolder" }}>
                  Birim Fiyat
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.cart.map((cartItem) => (
                <TableRow key={cartItem.product.id}>
                  <TableCell>{cartItem.product.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {cartItem.product.productName}
                  </TableCell>
                  <TableCell>{cartItem.product.quantityPerUnit}</TableCell>
                  <TableCell>
                    <Badge
                      style={{ backgroundColor: "purple" }}
                      onClick={() => {
                        this.removeFromCart(cartItem.product);
                      }}
                    >
                      Sil
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box  >
          <Link to="/">
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </Link>
        </Box>
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
export default connect(mapStateToProps, mapDispatchToProps)(cartDetail);
