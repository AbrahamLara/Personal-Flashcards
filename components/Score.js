import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { clearLocalNotification, setLocalNotifiation } from '../utils/helpers';

class Score extends Component {
  componentDidMount () {
    clearLocalNotification().then(() => setLocalNotifiation(1));
  }

  render () {
    const { score, total } = this.props;

    return (
      <Text style={[styles.resultsText, { fontWeight: 'bold', marginBottom: 20 }]}>
        { (100 * score / total).toFixed(0) }% correct!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  resultsText: {
    fontSize: 35,
    textAlign: 'center'
  }
});

export default Score;