// src/components/ProjectsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProjectsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Projects Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
        <Button
        title="How to Help"
        onPress={() => navigation.navigate('HowToHelp')}
      />
    </View>
  );
};

export default ProjectsScreen;
