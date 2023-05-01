import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {registerUser} from '../apiCalls/Requests';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [educationStartDate, setEducationStartDate] = useState(new Date());
  const [educationEndDate, setEducationEndDate] = useState(new Date());
  const [password, setPassword] = useState('');
  const [confirmationPass, setConfirmationPass] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register </Text>
      <Text style={styles.subTitle}>Create an account </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={newText => setName(newText)}
        placeholder="Name"
        value={name}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={newText => setEmail(newText)}
        placeholder="Email"
        value={email}
      />
      <Text style={styles.label}>Education Start Date</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={newText => setEducationStartDate(newText)}
        placeholder="Education Start Date"
        value={educationStartDate}
      />
      <Text style={styles.label}>Education End Date</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={newText => setEducationEndDate(newText)}
        placeholder="Education End Date"
        value={educationEndDate}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={newText => setPassword(newText)}
        value={password}
        placeholder="Password"
        style={styles.input}
      />
      <Text style={styles.label}>Confirmation Password</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={newText => setConfirmationPass(newText)}
        value={confirmationPass}
        placeholder="Confirmation Password"
        style={styles.input}
      />
      <View style={{flex: 1, flexDirection: 'row', paddingTop: 20}}>
        <CheckBox
          style={styles.checkBox}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          registerUser({
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmationPass,
            education_start_date: educationStartDate,
            education_end_date: educationEndDate,
            terms: toggleCheckBox,
          });
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <Button
        title="return to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#5649DD',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 10,
    color: 'grey',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
  },
  input: {
    height: 40,
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
  checkBox: {
    borderRadius: 0,
  },
});
