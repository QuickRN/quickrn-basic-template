import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

const { Screen, Navigator } = createNativeStackNavigator()

const NavigationStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen component={Home} name="Home" />
  </Navigator>
)

export default NavigationStack
