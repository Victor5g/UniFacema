import React,{Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput,TouchableOpacity,StatusBar} from 'react-native';

export default class App extends Component{
render(){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor= "#001AFF"/>
           <Image source={require('./Assets/logo.png')} style={styles.logo}/> 
           <Text style={styles.textLogo}>UniFacema</Text> 
           <Text style={styles.text}>Centro Universitario de Ciências e  Tecnologia do Maranhão </Text> 
            
           <Text style={styles.textInput}>  Usuario</Text> 
           <TextInput style={styles.input} placeholder="Digite sua Matricula" placeholderTextColor="#8DADFF"/>
           <Text style={styles.inputline}>________________________________________________</Text>
           <Text style={styles.textInput}>Senha</Text> 
           <TextInput style={styles.input} placeholder="Digite sua Senha" placeholderTextColor="#8DADFF" secureTextEntry={true} />
           <Text style={styles.inputline}>________________________________________________</Text>
           <Text style={styles.textRecover}>Esqueceu Usuario ou Senha Clique <Text style={styles.link}>Aqui</Text></Text> 

           <TouchableOpacity style={styles.buttom}>
               <Text style={styles.Textbottom}>Entrar</Text>           
            </TouchableOpacity>
        </View> 

    )
}
} 

const styles = StyleSheet.create({
container:{
    backgroundColor:"#001AFF",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},

logo:{
    width: 359,
    height: 150,
    left: 10,
    bottom:80,
},

textLogo:{
    color:"#FFFFFF",
    fontFamily: "Roboto",
    bottom:80,
    fontSize:34,
    fontWeight:"bold",
},

text:{
    color:"#CFCFCF",
    fontFamily: "Roboto",
    bottom:80,
    fontSize:20,
    marginLeft:46,
    marginRight:46,
},

textInput:{
    color:"#FFFFFF",
    right:125,
    bottom:17,
    fontSize: 18,
    fontFamily:"Roboto",
    
},

input:{
    marginTop:15,
    color:"#FFFFFF",
    fontSize:18,
    backgroundColor:"transparent",
    width:300,
    bottom:38
   
   
},

inputline:{
    color:"#FFFFFF",
    fontWeight:"bold",
    bottom:60,
    fontSize:14
},

textRecover:{
    color:"#FFFFFF",
    right:23,
    bottom:55,
    },
    
    link:{
        color:"#FF0000",
        fontWeight:"bold",
},

buttom:{
    width:300,
    height:50,
    backgroundColor:"#000000",
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center",
},

Textbottom:{
    color:"#FFFFFF",
    fontSize:15
},


});

 

