import {Platform, StatusBar} from 'react-native'
import createStyles from '../../styles/base'
import {widthPercentagetoDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const styles = createStyles({
	container: {
		height: hp('100%')
	},
	button: {
		top: hp('10%'),

	}, 
	username: {
		fontSize: 20,
		alignItems: 'center'
	},
	image: {
		height: 40,
		width: 40
	},
	textInput: {
		marginTop: 10
	}
})

export default styles