import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import bgBlur from './src/assets/bg-blur.png'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-5xl font-bold text-gray-50">NLW Spacetime</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
