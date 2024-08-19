import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CustomBackground } from 'react-native-custom-backgrounds';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <CustomBackground
        patternType="dot"
        backgroundColor="#3498db"
        foregroundColor="#2980b9"
        opacity={0.7}
        spacing={10}
        style={styles.buttonBackground}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </CustomBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonBackground: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;