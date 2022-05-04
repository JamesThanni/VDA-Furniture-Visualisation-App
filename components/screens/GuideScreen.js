import * as React from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import AppStack from '../AppStack'
import AppText from '../info/AppText'
import AppButton from '../input/AppButton'

// The Welcoming App Guide Page
const GuidePage = ({ onPress }) => (
  <View style={styles.guideContainer}>
    {/* Welcome page graphic */}
    <Image style={styles.img} source={require('../../assets/images/guide-image.jpg')} />
    
     {/* Description section */}
    <View style={styles.instructions}>
      <AppText type="h1" text={'Visualise your Room'} />
      <Text style={styles.guideText}>
        Pick from a wide range of decor items that fit your space. Add a product to your cart and
        press the layers icon to generate a visualisation of the chosen furniture in your room!
      </Text>
      <AppButton text="Get Started" onPress={onPress} />
    </View>
  </View>
)

/**
 * GuidePage export that renders either the GuidePage or the Main 
 * component depending on the value of the currentView state variable
 * @returns A view with a background color of black and a flex of 1.
 */
export default function Guide({ navigation, route }) {
  const VISUALISE_SCREEN = 'Place Furniture'
  const BROWSE_SCREEN = 'Select Furniture'
  const OPTIONS_SCREEN = 'Settings'

  const [currentView, setCurrentView] = React.useState('GuidePage')

  return (
    <View style={{ backgroundColor: '#121212', flex: 1 }}>
      {currentView === 'GuidePage' ? (
        <GuidePage onPress={(page) => setCurrentView(page)} />
      ) : (
        <AppStack />
      )}
    </View>
  )
}
// moves page to home page when the get started button is selected

const styles = StyleSheet.create({
  guideContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#121212',
    flex: 1,
  },
  guideText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#ffffff',
    width: '95%',
    fontWeight: '200',
  },
  img: {
    width: '100%',
    height: '65%',
  },
  instructions: {
    padding: 20,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#976A35',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
