import React from 'react';
import {Text, View, Image, TextInput,TouchableOpacity,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import styles from './styles';

export default function Login(){
    const navigation = useNavigation();





    

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor= "#001AFF"/>
            <Image source={require('../../Assets/logo.png')} style={styles.logo}/> 
           <Text style={styles.textLogo}>UniFacema</Text> 
           <Text style={styles.text}>Centro Universitario de Ciências e  Tecnologia do Maranhão </Text> 
            
           <Text style={styles.textInput}>  Usuario</Text> 
           <TextInput style={styles.input} placeholder="Digite sua Matricula" placeholderTextColor="#8DADFF"/>
           <Text style={styles.inputline}>______________________________________________</Text>
           <Text style={styles.textInput}>Senha</Text> 
           <TextInput style={styles.input} placeholder="Digite sua Senha" placeholderTextColor="#8DADFF" secureTextEntry={true} />
           <Text style={styles.inputline}>______________________________________________</Text>
           <Text style={styles.textRecover}>Esqueceu Usuario ou Senha Clique <Text style={styles.link}>Aqui</Text></Text> 

           <TouchableOpacity style={styles.buttom} onPress={()=>navigation.navigate('Home')}>
               <Text style={styles.Textbottom}>Entrar</Text>           
            </TouchableOpacity>
        </View> 
    );
}
