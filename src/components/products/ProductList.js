import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../reduxx/actions/productActions";
import * as cartActions from "../../reduxx/actions/cartActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + "Sepet'e başarıyla eklendi...")
  };
  render() {
    return (
      <div>
        <h2>
          ProductList
          <Button
            style={{ marginLeft: 10 }}
            variant="outlined"
            color="secondary"
          >
            {this.props.currentCategory.categoryName}
          </Button>
        </h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell style={{ fontWeight: "bolder" }}>Ürün Adı</TableCell>
                <TableCell style={{ fontWeight: "bolder" }}>
                  Birim Fiyat
                </TableCell>
                <TableCell  align="center" style={{ fontWeight: "bolder" }}>
                  Birim Başına Fiyat
                </TableCell>
                <TableCell  align="center" style={{ fontWeight: "bolder" }}>
                  Stoktaki Ürün
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {product.productName}
                  </TableCell>
                  <TableCell>{product.quantityPerUnit}</TableCell>
                  <TableCell align="center">{product.unitPrice}</TableCell>
                  <TableCell  align="center">{product.unitsInStock}</TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      size="small"
                      onClick={() => {
                        this.addToCart(product);
                      }}
                    >
                      Ekle
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
