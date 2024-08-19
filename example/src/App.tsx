import { View, SafeAreaView, StyleSheet } from 'react-native';
import CustomButton from './component/CustomButton';
import CustomCard from './component/CustomCard';
import { CustomBackground } from 'react-native-custom-backgrounds';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomBackground
        patternType="triangle"
        backgroundColor="#f9f9f9"
        foregroundColor="#e0e0e0"
        opacity={0.3}
        spacing={30}
        style={styles.backgroundPattern}
      >
        <View style={styles.content}>
          <CustomButton
            title="Press Me!"
            onPress={() => console.log('Button pressed')}
          />
          <CustomCard
            title="Custom Card"
            content="This is a custom card with a patterned background."
          />
        </View>
      </CustomBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundPattern: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
});

export default App;
