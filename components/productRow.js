'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
} = React;

var ProductRow = React.createClass({
  render: function() {
    var colorValue = this.props.product.stocked ?  "blue": "red";
    return (
      <View style={styles.rowContainer}>
        <Text style={[styles.valueText, {color: colorValue}]}>{this.props.product.name}</Text>
        <Text style={styles.valueText}>{this.props.product.price}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  valueText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});


module.exports = ProductRow;
