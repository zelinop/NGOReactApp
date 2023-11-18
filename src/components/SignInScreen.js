import React from 'react';
import { View, Text, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SignInScreen;