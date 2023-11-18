// src/components/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Projects"
        onPress={() => navigation.navigate('Projects')}
      />
      <Button
        title="How to Help"
        onPress={() => navigation.navigate('HowToHelp')}
      />
    </View>
  );
};

export default HomeScreen;
