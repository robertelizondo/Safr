import React from 'react'
import Home  from './components/Home'
import Login  from './components/Home/Login'
import Camera from './components/Camera'
import Driving  from './components/Driving'
import Profile from './components/Profile'
import {Router, Scene, Stack} from 'react-native-router-flux'
import {StyleSheet} from 'react-native'

const App = () => (
  <Router>
    <Stack key="root">
      <Scene 
        key="Home" 
        component={Home} 
        title="Safr"
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
        
      />
      <Scene 
        key="Login" 
        component={Login} 
        title="Log in"
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}

      />
      <Scene 
        key="Camera" 
        component={Camera} 
        title="Camera"
        hideNavBar
        
      />
      <Scene 
        key="Driving" 
        component={Driving} 
        title="Driving"
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
      />
      <Scene 
        key="Profile" 
        component={Profile} 
        title="Profile"
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
        renderBackButton={() => null}
        left={() => null}
        initial
      />
    </Stack>
  </Router>
);

export default App

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2B547E'
  },
  navTitle: {
    color: '#FFF'
  }
})