import React from 'react';
import {Text, View, Image, TextInput, ScrollView, TouchableOpacity, StatusBar}  from 'react-native';
import {useNavigation} from '@react-navigation/native';


import styles from './styles';


export default function Home(){
    const navigation = useNavigation();


    return(
       <View style={styles.container}>
            <StatusBar backgroundColor= "#001AFF"/>
           <View  style={styles.HeadeContainer}>
               <Image style={styles.perfil} source={require('../../Assets/perfil.jpg')}/>
               <Text style={styles.TextP1}>Olá Victor</Text>
               <Text style={styles.TextP2}>O que vamos fazer hoje?</Text>   
               <TextInput style={styles.inputP} placeholder= "Digite aqui o que você esta procurando" placeholderTextColor="#FFFFFF"/>
           </View>
           <View style={styles.Container_Carrosel}>
               <Text style={styles.TextCarrosel}>Opções</Text>

               <ScrollView  horizontal={true}
               snapToAlignment="center"
               decelerationRate="fast"
               showsVerticalScrollIndicator={false}
               > 
                <TouchableOpacity style={styles.CardCarrosel}> 
                <Text style={styles.CardCarroselText}>Exercicos</Text>
                <Image style={styles.IconCarrosel} source={require('../../Assets/exercicios.png')}/> 
                </TouchableOpacity  >  

                <TouchableOpacity style={styles.CardCarrosel}>  
                <Text style={styles.CardCarroselText}>Disciplinas</Text>
                <Image style={styles.IconCarroselDisciplina} source={require('../../Assets/disciplina.png')}/> 
                </TouchableOpacity >  

                  
                <TouchableOpacity style={styles.CardCarrosel} onPress={()=>navigation.navigate('Login')}>  
                <Text style={styles.CardCarroselText}>Calendario</Text>
                <Image style={styles.IconCarrosel} source={require('../../Assets/calendario.png')}/> 
                </TouchableOpacity>  
            </ScrollView>  
           </View>
       </View>
        
    );
}
