import React, { useState } from 'react';
import { View, Text, SafeAreaView,ScrollView, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import styles from './Login.style'
import { Button } from '../components';
// impoorter librairie formik et Yup pour gerer les formulaires 
import { Formik } from 'formik';
import * as Yup from 'yup'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { COLORS } from '../constants';
// Definiition du schéma de validation des données ce schema est tiré du site de formik
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be 8 characters or more')
    .required('Obligatoire'),
  email: Yup.string().email('adresse mail incorrect').required('Obligatoire'),
});

const LoginPage = ({navigation}) =>{
  // creer un state pour la gestion du chargement de notre API rest
  const [loader,setLoader] = useState(false);
  // creer un state pour recuperer les informations recu de notre API rest
  const [responseData,setresponseData] = useState(null);
  //creer un state pour gerer l'affichage ou masquer le mot de passe pendant la saisie
  const [obscureText,setObscureText] = useState(false)
  // creer un state ppour gerer la saisi d'information de connexion 
  
  const formulaireInvalide=()=>{
    Alert.alert(
      "Saisie incorrect","Vérifiez votre saisie?",
      [
        {
          text:"Retour", onPress:()=>{}
        },
        {
          text:"Continuer", onPress:()=>{}
        }
        
      ]
    )
  }
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.profile}
          />
          <Formik
          initialValues={{email:'',password:''}}
          // schema pour verifier la validité du mot de passe et de l'e-mail
          validationSchema={validationSchema}
          onSubmit={(values)=>console.log(values)}
          >
          {({ handleChange, handleBlur, touched,handleSubmit,
           values,errors,isValid,setFieldTouched }) => (
            <View style={{marginTop:20}}>
              <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputWrapper(touched.email ?COLORS.black:COLORS.white)}>
                      <MaterialCommunityIcons
                        name='email-outline'
                        size={18}
                        style={{marginRight:10}}
                      />
                      <TextInput 
                        placeholder='Entrez votre email'
                        // modification de la couleur  du champs email si celui ci est selectionné
                        onFocus={()=>{setFieldTouched('email')}}
                        onBlur={()=>{setFieldTouched('email','')}}
                        value={values.email} 
                        onChangeText={handleChange('email')}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={{flex:1}}
                      />
                  </View>
                  {touched.email&&errors.email&&(
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}

              </View>

              <View style={styles.wrapper}>
                  <Text style={styles.label}>mot de passe</Text>
                  <View style={styles.inputWrapper(touched.password ?COLORS.black:COLORS.white)}>
                      <MaterialCommunityIcons
                        name='lock-outline'
                        size={18}
                        style={{marginRight:10}}
                      />
                      <TextInput 
                      secureTextEntry={obscureText}
                        placeholder='password'
                        // modification de la couleur  du champs email si celui ci est selectionné
                        onFocus={()=>{setFieldTouched('password')}}
                        onBlur={()=>{setFieldTouched('password','')}}
                        value={values.password} 
                        onChangeText={handleChange('password')}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={{flex:1}}
                      />
                      
                      <TouchableOpacity onPress={()=>{setObscureText(!obscureText)}}>
                          <MaterialCommunityIcons
                            name={obscureText?"eye-outline":"eye-off-outline"}
                            size={18}
                          />
                      </TouchableOpacity>
                  </View>
                  {touched.password&&errors.password&&(
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}

              </View>
              
              <Button title={"Se Connecter"} onPress={isValid?handleSubmit:formulaireInvalide} isValid={isValid}/>
              <Text style={styles.inscription} onPress={()=>{}}>Pas de compte? s'inscrire </Text>
            </View>
          )}

          </Formik>
        </View>
     </SafeAreaView>
    </ScrollView>
    
  );
}
export default LoginPage;