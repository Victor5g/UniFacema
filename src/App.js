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
           <Text style={styles.inputline}>______________________________________________</Text>
           <Text style={styles.textInput}>Senha</Text> 
           <TextInput style={styles.input} placeholder="Digite sua Senha" placeholderTextColor="#8DADFF" secureTextEntry={true} />
           <Text style={styles.inputline}>______________________________________________</Text>
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
    bottom:60,
},

textLogo:{
    color:"#FFFFFF",
    fontFamily: "Roboto",
    bottom:58,
    fontSize:25,
    fontWeight:"bold",
},

text:{
    color:"#CFCFCF",
    fontFamily: "Roboto",
    bottom:55,
    fontSize:15,
    marginLeft:73.6,
    marginRight:73.6,
},

textInput:{
    color:"#FFFFFF",
    right:125,
    bottom:17,
    fontSize: 15,
    
    
},

input:{
    marginTop:15,
    color:"#FFFFFF",
    fontSize:12,
    backgroundColor:"transparent",
    width:300,
    bottom:38
   
   
},

inputline:{
    color:"#FFFFFF",
    bottom:60,
    
},

textRecover:{
    color:"#FFFFFF",
    right:50,
    bottom:55,
    fontSize:11
    },
    
    link:{
        color:"#FF0000",
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

 

