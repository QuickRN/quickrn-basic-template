import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import MainStack from './src/navigation/MainStack'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
