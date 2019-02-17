import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera-tflite';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/AntDesign'
import {Actions} from 'react-native-router-flux'

let _currentInstant = 0;

export default class MainScreen extends Component {
  state = {
    time: 0,
    output: "",
    correct: 0,
    check: false,
  }

  processCar = ({data}) => {
    const isSeatBeltProb = data[786];
    const isSeatBelt = isSeatBeltProb > 0.5 ? "Seat Belt" : "";
    const output = `${isSeatBelt}\n`;
    this.setState({output: output});
    let count = this.state.correct + 1
    if (isSeatBelt == "Seat Belt") {
      this.setState({correct: count})
    }
    if (count == 1) {
      this.setState({check: true, correct: 0})
      setTimeout(() => { Actions.Driving() },2000)
    }
  }

  processMotorcycle({data}) {
    const isHelmetProb = data[519];
    const isHelmet = isHelmetProb > 0.05 ? "Helmet" : "";
    const output = `${isHelmet}\n`;
    this.setState({output: output});
    let count = this.state.correct + 1
    if (isHelmet == "Helmet") {
      this.setState({correct: count})
    }
    if (count == 5) {
      this.setState({check: true, correct: 0})
      setTimeout(() => { Actions.Driving() },2000)
    }
  }
  
  render() {
    const modelParams = {
      file: "mobilenet_v1_1.0_224_quant.tflite",
      inputDimX: 224,
      inputDimY: 224,
      outputDim: 1001,
      freqms: 0
    };
    const vehicle = this.props.vehicle 
    let check = this.state.check
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onModelProcessed={data => (vehicle == 'car') ? this.processCar(data) : this.processMotorcycle(data) }
            modelParams={modelParams}
        >
        {(vehicle == 'car') ? 
          ((!(this.state.check)) && <Text style={styles.cameraText}>Show us your seatbelt!</Text>)
          : 
          ((!(this.state.check)) &&  <Text style={styles.cameraText}>Show us your helmet!</Text>)
        }
        {check && <Icon name="check" size={40} color="green"/>}
          
        </RNCamera>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    bottom:270
  },
  icon: {
    marginTop: 200,
    position: 'absolute'
  }
});