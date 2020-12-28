import React from 'react';
import { StyleSheet,  KeyboardAvoidingView,} from 'react-native';

import {Header} from 'react-native-elements';



export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        
    }

   
       
        

    render(){
        return(
                <Header 
                    backgroundColor = {'blue'}
                     centerComponent = {{
                        text : 'Buzz App',
                        style : { color: 'yellow', fontSize: 50}
                    }}
                  
                />         
                
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEC24',
  },
  
  author: {
      height: 100,
     
      margin: 50,
      
  },
  
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});











