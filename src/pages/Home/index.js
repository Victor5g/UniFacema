import React from 'react';
import {Text, View, Image, TextInput,placeholderTextColor} from 'react-native';

import styles from './styles';

export default function Home(){
    return(
       <View style={styles.container}>
           <View  style={styles.HeadeContainer}>
               <Image style={styles.perfil} source={require('../../Assets/perfil.jpg')}/>
               <Text style={styles.TextP1}>Olá Victor</Text>
               <Text style={styles.TextP2}>O que vamos fazer hoje?</Text>   
               <TextInput style={styles.inputP} placeholder= "            Digite aqui o que você esta procurando" placeholderTextColor="#FFFFFF"/>
           </View>
           <View style={styles.Carrosel}>
               <Text style={styles.TextCarrosel}>Opções</Text>

           </View>
       </View>
        
    );
}
