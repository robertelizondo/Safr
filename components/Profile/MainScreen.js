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
import UserAvatar from 'react-native-user-avatar'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

const database = {
	'Juliom72': {
		name: 'Julio',
		age: 21,
		vehicle: 'car',
		points: '1931',
		tier: 'Gold'
	},
	'Robert5': {
		name: 'Robert',
		age: 20,
		vehicle: 'motorcycle',
		points: '1235',
		tier: 'Gold'
	}
}

export default class Login extends Component {
	state = {

	}

	navigateToCamera(vehicle) {
		Actions.Camera({vehicle})
	}

	render() {
		let user = database[this.props.username]

		return (
			<View style={styles.container}>
				<Text style={styles.username}>Hi, {user.name} </Text>
				{
					user.name == "Julio" ?
					<UserAvatar size="50" name="Julio Maldonado" src="https://media.licdn.com/dms/image/C4E03AQHi48SOAseNZw/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=Ss_kjn-ZdJEcTbqCyWdO1CkNDSaPEj4pJ_p_GmHa2x0" />
					:
					<UserAvatar size="50" name="Robert Elizondo" src="https://lh3.googleusercontent.com/-jhRjb1COxQA/AAAAAAAAAAI/AAAAAAAABJU/Smyha92tyoc/s120-p-rw-no-il/photo.jpg" />
				}
				<Text style={styles.points}>Points: {user.points}</Text>
				<Text style={styles.points}>Tier: {user.tier}</Text>
				<Image style={styles.image} source={require('./SFRLOGO.png')} />
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
		height: (dimensions.fullHeight / 2 - 80),
		width: (dimensions.fullWidth - 100),
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
		marginTop: 15,
		fontSize: 14,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	button: {
		marginTop: 20
	}
})