import { View, Image} from 'react-native' 

import { styles } from './styles';

export function Home(){
  return (
    <View style={styles.container}>
      <Image source={require('@/assets')} style={styles.logo}/>
    </View>
  )
}
