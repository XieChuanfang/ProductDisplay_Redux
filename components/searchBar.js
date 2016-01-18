'use strict';

var React = require('react-native');
var ScreenWidth = require('Dimensions').get('window').width;

var {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
  Dimensions
} = React;

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
          onChangeText={(text) => this.props.onTextChange(text)} />

          <View style={styles.rowContainer} >
            <Switch
               value={this.props.inStockOnly}
               onValueChange={(flag) => this.props.onSwitchChange(flag)} />
            <Text style={styles.valueText}>Only show products in stock</Text>
          </View>
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
  textInput: {
   height: 40,
   borderWidth: 1,
   marginTop: 80,
   marginBottom: 10,
   borderColor: '#0f0f0f',
   borderRadius: 8,
   width: ScreenWidth * 3 / 4,
   flex: 4,
   padding: 4,
   fontSize: 17,
 },
});

module.exports = SearchBar;
