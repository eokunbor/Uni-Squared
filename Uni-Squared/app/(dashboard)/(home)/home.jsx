import { StyleSheet, ScrollView, Image, View, TouchableOpacity, Text } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Logo from '../../../assets/logos/logo1.png'
import ThemedView from '../../../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image source={Logo} style={styles.logoSmall} />
          <Text style={styles.headerTitle}>Uni²</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>
            Continue your reading journey
          </Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Books Read</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>28</Text>
            <Text style={styles.statLabel}>Want to Read</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>📚</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>My Reading List</Text>
              <Text style={styles.actionSubtitle}>View all your books</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>➕</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Add New Book</Text>
              <Text style={styles.actionSubtitle}>Expand your collection</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>🎯</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Reading Goals</Text>
              <Text style={styles.actionSubtitle}>Track your progress</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer Links */}
        <View style={styles.footer}>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>About</Text>
            </TouchableOpacity>
          </Link>
          <View style={styles.footerDivider} />
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Contact</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e7c4',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoSmall: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeSection: {
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8b5e3c',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#f5e7c4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  footerLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footerLinkText: {
    fontSize: 14,
    color: '#8b5e3c',
    fontWeight: '600',
  },
  footerDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#ccc',
  },
})