import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {loginUser} from '../apiCalls/Requests';
import {retrieveUserSession} from '../utils';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToList = async () => {
    const token = await retrieveUserSession();
    if (token !== undefined) {
      navigation.navigate('List');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subTitle}>Log into you account</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        autoCapitalize="none"
        required={true}
        style={styles.input}
        onChangeText={newText => setEmail(newText)}
        placeholder="Enter your email here"
        value={email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        autoCapitalize="none"
        required={true}
        onChangeText={newText => setPassword(newText)}
        value={password}
        placeholder="Enter your password here"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          try {
            let response = await loginUser({
              email: email,
              password: password,
            });
            await EncryptedStorage.setItem(
              'user_session',
              response.accessToken,
            );
            navigateToList();
          } catch (error) {
            alert(error.message);
          }
        }}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Button
        title="return to register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: '#5649DD',
    paddingTop: 100,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    color: 'grey',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 17,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 50,
    height: 50,
    backgroundColor: '#5649DD',
    borderRadius: 15,
  },
  buttonText: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
});
