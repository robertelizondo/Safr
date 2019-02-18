import React, {Component} from 'react'
import {
	View,
	Text,
	Alert,
	PermissionsAndroid
} from 'react-native'
import ActivityRecognition from 'react-native-activity-recognition'

import styles from './styles'

async function requestLocationPermission() {
	return true
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Location Permission',
        'message': 'This app needs access to your location',
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      return true
    } else {
      console.log("Location permission denied")
      return false
    }
  } catch (err) {
    console.warn(err)
  }
}

export default class MainScreen extends Component {
	state = {
		detectedActivity: '',
		latitude: null,
      	longitude: null,
      	error: null,
	}
	startActivityDetection() {
		// Interval (in ms) for Activity detection updates
		const detectionIntervalMillis = 10;
		ActivityRecognition.start(detectionIntervalMillis);
		 
		// Subscribe to updates
		this.unsubscribe = ActivityRecognition.subscribe(detectedActivities => {
			const mostProbableActivity = detectedActivities.sorted[0];
			// mostProbableActivity will contain user’s current activity
			this.setState({detectedActivity: mostProbableActivity.type})
			Alert.alert(mostProbableActivity.type);
		});
	}


	render() {
		return (
			<View style={styles.container}>
				<Text>Your speed: 0</Text>
				<Text>Activity: {this.state.detectedActivity}</Text>
				<Text>Latitude: {this.state.latitude}</Text>
        		<Text>Longitude: {this.state.longitude}</Text>
        		<Text>Speed: {this.state.speed}</Text>
        		{this.state.error ? <Text>Error: {this.state.error}</Text> : null}
			</View>
		)
	}
}