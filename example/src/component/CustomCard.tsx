import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomBackground } from 'react-native-custom-backgrounds';

interface CustomCardProps {
  title: string;
  content: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <View style={styles.cardContainer}>
      <CustomBackground
        patternType="circle"
        backgroundColor="#f1f1f1"
        foregroundColor="#e0e0e0"
        opacity={0.5}
        spacing={15}
        style={styles.cardBackground}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardText}>{content}</Text>
        </View>
      </CustomBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardBackground: {
    padding: 16,
  },
  cardContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CustomCard;
