import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DonationScreen } from "./DonationScreen";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <View style={styles.tasksWrapper}>
          <Text style={[styles.sectionTitle, styles.darkerPinkText]}>
            La Pauvreté et la Faim dans le Monde
          </Text>
          <View style={styles.sectionContent}>
            <Text>
              La pauvreté est un problème mondial qui touche des millions de personnes. En tant qu'êtres humains, il est de notre devoir de nous entraider et de lutter contre la pauvreté. Actuellement, environ 690 millions de personnes souffrent de la faim dans le monde. Il est crucial de prendre des mesures pour réduire ce nombre et assurer un avenir meilleur pour tous.
            </Text>
          </View>
          <Text style={[styles.imageTitle, styles.darkerPinkText]}>
            Ensemble, nous pouvons faire la différence
          </Text>
          <Image 
             source={{ uri: 'https://sauverdesvies.org/wp-content/uploads/2018/05/13_D16277.png' }} 
             style={styles.image}
           />
          <View style={styles.imageCaption}>
            <Text>
              Un enfant affamé portant un panneau indiquant "J'ai faim". C'est un rappel poignant de la réalité de la pauvreté et de la faim qui sévit encore dans notre monde aujourd'hui. Aidons-nous les uns les autres pour construire un avenir meilleur.
            </Text>
          </View>  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DonationScreen')}
          >
            <Text style={styles.buttonText}>donations</Text>
          </TouchableOpacity>
          <View style={styles.additionalContent}>
            <Text>
              La solidarité humaine est essentielle pour combattre ces fléaux. Nous devons unir nos forces pour fournir de la nourriture, des ressources et de l'éducation à ceux qui en ont besoin. Chaque petit geste compte et peut faire une énorme différence dans la vie de quelqu'un. Agissons ensemble pour un monde sans faim et sans pauvreté.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>©</Text>
      </View>
    </View>
  );
}

function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, styles.darkerPinkText]}>Page de don</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="donations" component={DonationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  darkerPinkText: {
    color: '#FF69B4',
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  imageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
  imageCaption: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  additionalContent: {
    fontSize: 16,
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
