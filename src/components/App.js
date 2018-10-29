import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Encabezado, Boton, Spinner } from './lib';
import firebase from 'firebase';
import Formulario from './formulario/Formulario';
import FormuRegistro from './formulario/FormuRegistro';

 class App extends Component{
     state = {
         sessionIniciada: null
     }
    componentWillMount(){
        let config ={
            apiKey: "AIzaSyC1XAyZhF0XkYgV2OlhfjODOyQG0N2dK0M",
            authDomain: "loginreactnative-41c69.firebaseapp.com",
            databaseURL: "https://loginreactnative-41c69.firebaseio.com",
            projectId: "loginreactnative-41c69",
            storageBucket: "loginreactnative-41c69.appspot.com",
            messagingSenderId: "536024863584"
        }
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({sessionIniciada: true})
            }else{
                this.setState({sessionIniciada: false})
            }
        })
    }
    contenidoSessionIniciada(){
        switch(this.state.sessionIniciada){
            case true:
                return(
                    <View style={{height:35}}>
                        <Boton 
                            texto={'Cerrar sessión'}
                            onPress={()=>{firebase.auth().signOut()}}
                        />
                    </View>
                )

            case false:
                return(
                    <Formulario />
                )

            default:
            <Spinner size={'large'}/>
        }
    }
     render(){
         return(
            <View>
                <Encabezado tituloEncabezado={"Login App"}></Encabezado>
                {this.contenidoSessionIniciada()}
            </View>
         )
     }
 }

 export default App;