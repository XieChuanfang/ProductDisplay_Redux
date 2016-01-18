'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
} = React;

var ProductCategoryRow = React.createClass({
  render: function() {
    return (
      <Text style={styles.headText}>
        {this.props.category}
      </Text>
    );
  }
});

var styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    fontWeight: 'bold',
  },
});

module.exports = ProductCategoryRow;
