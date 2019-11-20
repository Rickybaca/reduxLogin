import React from 'react';
import { Button, StyleSheet, View, AsyncStorage, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    
    render() {
        return (
            // <View style={styles.container}>
            //     <Button title="Sign in!" onPress={this._signInAsync} />
            // </View>

        <View style={styles.container}>
            <TextInput style={styles.inputBox}
            onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor = "#002f6c"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}/>

            <TextInput style={styles.inputBox}
            onChangeText={(password) => this.setState({password})} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#002f6c"
            ref={(input) => this.password = input}
            />

            <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText} onPress={this._signInAsync}>login</Text>
            </TouchableOpacity>
        </View>
        );
    }

    _signInAsync = () => {
        const {email,password} = this.state;

        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
        const pass = "ab";
        this.props.saveUserToken(pass)
            .then(() => {
                this.props.navigation.navigate('App');
            })
            .catch((error) => {
                this.setState({ error })
            })
    };
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);