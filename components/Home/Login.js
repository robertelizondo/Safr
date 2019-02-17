import React, {Component} from 'react'
import {
	View,
	Text,
	Button,
	TextInput
} from 'react-native'
import styles from './styles'
import {Actions} from 'react-native-router-flux'

export default class Login extends Component {
	state = {
		username: '',
		password: ''
	}

	navigateToProfile() {
		Actions.Profile({username: this.state.username, password: this.state.password})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					autoFocus
					placeholder="Username"
					style={styles.usernameInput}
					value={this.state.username}
					returnKeyType="next"
					enablesReturnKeyAutomatically
					onChangeText={(text) => this.setState({username: text})}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					carretHidden
					style={styles.passwordInput}
					value={this.state.passwordInput}
					returnKeyType="go"
					enablesReturnKeyAutomatically
					onChangeText={(text) => this.setState({password: text})}
				/>


				<Button 
					onPress={() => this.navigateToProfile()} 
					title="Continue" 
				/>
			</View>
		)
	}
}