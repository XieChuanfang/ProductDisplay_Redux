'use strict';

var React = require('react-native');

var ProductCategoryRow = require('../components/productCategoryRow');
var ProductRow = require('../components/productRow');

var {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
} = React;

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));

    return (
      <View >
          <View style={styles.rowContainer}>
            <Text style={styles.headText}>Name</Text>
            <Text style={styles.headText}>Price</Text>
          </View>
        <View>{rows}</View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

module.exports = ProductTable;
