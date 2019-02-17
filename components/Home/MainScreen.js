import React, {Component} from 'react'
import {
	View,
	Text,
	Button
} from 'react-native'
import styles from './styles'
import {Actions} from 'react-native-router-flux'

export default class MainScreen extends Component {

	navigateToLogin() {
		Actions.Login()
	}

	render() {
		return (
			<View style={styles.container}>
				<Button 
					style={styles.button}
					onPress={() => this.navigateToLogin()} 
					title="Log in" 
				/>
			</View>
		)
	}
}