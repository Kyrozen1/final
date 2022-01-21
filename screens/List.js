import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:"",
      displayText:"",
    }
  }
  render(){
    var text = this.state.text
    return(
      <View style={styles.container}>
        <SafeAreaView/>
        <View style={{marginTop:-300}}>
          <Text style={styles.titleText}>Agenda</Text>
        </View>
        <View style={{marginTop:20}}>
          <TextInput
            onChangeText={text=>{
              this.setState({ text: text });
            }}  
            multiline={true}
            numberOfLines={5}
            placeholder={"English                                                                          Chinese                                                                          Science"}
            value={this.state.text}
            style = {styles.textinput}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    fontSize:35,
    fontWeight:'bold',
    color:'purple',
  },
  textinput:{
    marginTop:50,
    width:300,
    borderColor:"black",
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  }
})