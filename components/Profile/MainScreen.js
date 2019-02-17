import React, {Component} from 'react'
import {
	View,
	Text,
	Button,
	TextInput,
	Image,
	StyleSheet, 
	Dimensions
} from 'react-native'
//import styles from './styles'
import {Actions} from 'react-native-router-flux'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

const database = {
	'Juliom72': {
		name: 'Julio',
		age: 21,
		vehicle: 'car',
		points: '1931'
	},
	'Robert5': {
		name: 'Robert',
		age: 20,
		vehicle: 'motorcycle',
		points: '1200'
	}
}

export default class Login extends Component {
	state = {

	}

	navigateToCamera(vehicle) {
		Actions.Camera({vehicle})
	}

	render() {
		let user = database['Robert5']

		return (
			<View style={styles.container}>
				<Text style={styles.username}>Hi, {user.name}</Text>
				<Text style={styles.points}>Points: {user.points}</Text>
				<Image style={styles.image} source={require('./IMG_0030.png')} />
				<View style={styles.button}>
					<Button
						onPress={() => this.navigateToCamera(user.vehicle)} 
						title="Start Driving" 
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: (dimensions.fullHeight),
		width: (dimensions.fullWidth)
	},
	image: {
		height: (dimensions.fullHeight / 2),
		width: (dimensions.fullWidth),
		marginTop: 20
	},
	username: {
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginTop: 20
	},
	points: {
		fontSize: 14,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	button: {
		marginTop: 20
	}
})