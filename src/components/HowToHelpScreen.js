// src/components/HowToHelpScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HowToHelpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>How to Help Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Projects"
        onPress={() => navigation.navigate('Projects')}
      />
    </View>
  );
};

export default HowToHelpScreen;
