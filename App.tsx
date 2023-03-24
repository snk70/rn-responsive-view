import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RN_Responsive } from 'rn-responsive-view';
const rn_responsive = new RN_Responsive();
const rsp = rn_responsive.GetRF;

export default function App() {
  console.log(`Window width: ${rn_responsive.windowWidth}`);
  console.log(`Window height: ${rn_responsive.windowHeight}`);
  console.log(`Window Avg size: ${rn_responsive.GetRelativeAvgSize()}`);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: rsp(25), width: rn_responsive.GetRelativeWidth(398), height: rn_responsive.GetRelativeHeight(100) }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
