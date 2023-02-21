import { Text, View } from 'react-native';
import PhoneSVG from '~assets/svg/phone.svg';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <PhoneSVG height={220} width={220} />
      <Text style={styles.title}>
        This is <Text style={styles.indigo}>QuickRN Basic</Text> template
      </Text>
      <Text style={styles.subtext}>
        Go to <Text style={styles.code}> src/screens/Home/index.js </Text> to start editing this screen.
      </Text>
    </View>
  )
}
