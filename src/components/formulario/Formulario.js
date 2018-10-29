import React, {Component} from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Boton, Input, Spinner } from '../lib';
import firebase from 'firebase';

class Formulario extends Component{
    state = {
        email: '',
        password: '',
        error: '',
        cargando: false
    }
    
    enviarFormulario(){
        const { email, password } = this.state;
        this.setState({error: '', cargando: true});
        console.warn(this.state.cargando);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginExitoso.bind(this))
        .catch(error => this.loginError(error))
    }

    loginExitoso(){
        this.setState({email: '', password: '', cargando: false})
    }

    loginError(err){
        this.setState({error: `Error de autenticación ${err}`, cargando: false})
    }
    
    mostrarActividad(){
        if(this.state.cargando){
            return <Spinner size={'small'}/>
        }
        return(
            <Boton texto={'Iniciar Sesión'} 
                onPress={this.enviarFormulario.bind(this)}
            />
        )
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        texto={'Email'}
                        placeholder={'Here your email'}
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        texto={'Password'}
                        placeholder={'Here your password'}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>
                <Text style={styles.errorMsgStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.mostrarActividad()}
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    errorMsgStyle:{
        fontSize: 19,
        color: 'red',
        alignSelf: 'center'
    }
}


export default Formulario;