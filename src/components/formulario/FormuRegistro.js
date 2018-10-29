import React, {Component} from 'react';
import { Card, CardSection, Boton, Input } from '../lib';

class FormuRegistro extends Component{
    state = {
        email: '',
        password: ''
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
                <CardSection>
                    <Input
                        texto={'Repeat Password'}
                        placeholder={'Confirm password'}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>
                <CardSection>
                    <Boton texto={'Registry'} />
                </CardSection>
            </Card>
        )
    }
}

export default FormuRegistro;