import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated } from 'react-native'
import { useRef, useState } from 'react'

const { width } = Dimensions.get('window')

const onboardingData = [
  {
    id: 1,
    title: 'Unify Your Campus Life',
    description: 'Connect with student clubs, organizations, and communities that share your passions.',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Discover Your Next Move',
    description: 'View upcoming events, plan your week, and explore what your campus has to offer.',
    icon: '🗓️',
  },
  {
    id: 3,
    title: 'Grow From Every Experience',
    description: 'Attend events, develop skills, and discover new interests that shape your college journey.',
    icon: '🌱',
  },
]

const OnboardingScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index)
    }
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Animated.FlatList
          data={onboardingData}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.dotsContainer}>
                  {onboardingData.map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.dot,
                        i === onboardingData.findIndex(d => d.id === item.id)
                          ? styles.dotActive
                          : styles.dotInactive,
                      ]}
                    />
                  ))}
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                {onboardingData.findIndex(d => d.id === item.id) === onboardingData.length - 1 && (
                  <TouchableOpacity style={styles.button} onPress={onComplete}>
                    <Text style={styles.buttonText}>Get Started</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e7c4',
  },
  carouselContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#e8d4b0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    fontSize: 60,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#8b5e3c',
    width: 24,
  },
  dotInactive: {
    backgroundColor: '#d4b896',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#8b5e3c',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    marginTop: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})