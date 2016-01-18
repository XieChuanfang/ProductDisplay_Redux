/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import { productReducer} from './reducers/reducers'; //导入根reducer，根reducer必须返回完整的数据状态
import { Provider } from 'react-redux';
import { createStore } from 'redux';
var React = require('react-native');
var productAppView = require('./containers/products');

var {
  AppRegistry,
  StyleSheet,
  View,
  NavigatorIOS,
} = React;

//创建整个应用的数据源
let storeValue = createStore(productReducer);//todoApp是根组件reducer

var ProductDisplay = React.createClass({
  render: function() {
    return (
      <Provider store={storeValue}>
        <NavigatorIOS style={{flex:1}}
          initialRoute={{title:'redux_demo', component:productAppView}}>
        </NavigatorIOS>
      </Provider>
    );
  }
});


AppRegistry.registerComponent('ProductDisplay', () => ProductDisplay);
