import React, {Component} from 'react'
import {
	View,
	Text,
} from 'react-native'
import styles from './styles'

export default class MainScreen extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Your speed: 0</Text>
			</View>
		)
	}
}