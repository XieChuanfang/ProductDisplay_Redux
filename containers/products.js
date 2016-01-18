/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import {connect} from 'react-redux';
import {PRODUCTS} from '../constants/productData';
import {textUpdate, switchUpdate} from '../actions/actions';
var ProductTable = require('../components/productTable');
var SearchBar = require('../components/searchBar');
var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

var Product = React.createClass({

  render: function() {
    // 通过调用 connect() 注入:
    const { dispatch, filterText, inStockOnly } = this.props;
    return (
      <View style={styles.container}>
        <SearchBar
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
          onTextChange={(text)=>{
            console.log('text:' + text);
            dispatch(textUpdate(text))}}
          onSwitchChange={(flag)=>{
            console.log('flag: ' + flag);
            dispatch(switchUpdate(flag))}} />

        <ProductTable
          products={PRODUCTS}
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
        />
      </View>
    );
  }

});


  //从redux store中读取到state，哪些是我们想注入的props？
function select (state) {
  return {
      filterText: state.filterText,
      inStockOnly: state.inStockOnly
    };
  }

var styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(Product) 中；
module.exports = connect(select)(Product);
