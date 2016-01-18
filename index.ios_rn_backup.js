
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var ScreenWidth = require('Dimensions').get('window').width;

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Dimensions,
  View,
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

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        // console.log("error " + this.props.inStockOnly);
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

var SearchBar = React.createClass({
  // handleChange: function() {
  //   this.props.onUserInput(
  //     this.refs.filterTextInput.value,
  //     this.refs.inStockOnlyInput.value
  //   );
  // },

  render: function() {
    return (
      <View >
        <TextInput style={styles.textInput}
          placeholder="Search..."
          value={this.props.filterText}
          // ref="filterTextInput"
          onChangeText={(text) => this.props.onUserInput(text, this._switchValue = this.props.inStockOnly)} />
          <View style={styles.rowContainer} >
            <Switch
               value={this.props.inStockOnly}
              //  ref="inStockOnlyInput"
               onValueChange={(switchValue) => this.props.onUserInput(this._changeText = this.props.filterText, switchValue)} />
            <Text style={styles.valueText}>Only show products in stock</Text>
          </View>
      </View>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </View>
    );
  }
});


var ProductDisplay = React.createClass ({
    render: function () {
      return (
        <View style = {styles.Container}>
          <FilterableProductTable products={PRODUCTS} />
        </View>
      );
    }
});

var styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  valueText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  headText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textInput: {
   height: 40,
   borderWidth: 1,
   marginBottom: 10,
   borderColor: '#0f0f0f',
   borderRadius: 8,
   width: ScreenWidth * 3 / 4,
   flex: 4,
   padding: 4,
   fontSize: 17,
 },
});


AppRegistry.registerComponent('ProductDisplay', () => ProductDisplay);
