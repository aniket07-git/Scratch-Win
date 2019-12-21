import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Dimensions } from 'react-native';
import {Button, Thumbnail} from 'native-base';
import {FontAwesome} from "@expo/vector-icons";

var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber: ""
    }
  }

  componentDidMount () {
     this.setState({ramndomNumber: this.generateRandomNumber()});
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()*25);
    this.setState({randomNumber: randomNumber, isScratched: true});
    return randomNumber;
  };

  scratchItem = itemNumber => {
    if(this.state.randomNumber === itemNumber){
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = itemNumber => {
      if(itemArray[itemNumber]==='lucky'){
        return 'dollar';
      } else if(itemArray[itemNumber]==='unlucky'){
        return 'frown-o';
      }
      return 'circle';
  };
  
  scratchItemColor = () => {
    if(itemArray[itemNumber]==='lucky'){
      return 'green';
    } else if(itemArray[itemNumber]==='unlucky'){
      return 'red';
    }
    return 'black';
  }

  showAllItem = () => {
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";
    this.forceUpdate();
  }

  resetGame = () => {
    this.setState({randomNumber: this.generateRandomNumber()},() => {
      itemArray.fill('empty');
      this.forceUpdate();
    })
  }

  
  render(){
  return (
    <View style={styles.container}>
      <Text>Scratch And Win </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
