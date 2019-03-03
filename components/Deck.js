import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Deck extends Component {
  render() {
    const { title, amount } = this.props;
    return (
      <View key={id}>
        <Text>{title}</Text>
        {amount === 1
          ? <Text>{amount} card</Text>
          : <Text>{amount} cards</Text>
        }
      </View>
    );
  }
}

export default connect()(Deck);