import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import Home from '../screens/Home'

export type MainStackParamList = {
  Home: object | undefined
}

export type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>

const { Screen, Navigator } = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen component={Home} name="Home" />
  </Navigator>
)

export default MainStack
