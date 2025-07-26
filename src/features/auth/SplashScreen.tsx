import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '@utils/Constants';
import Logo from '@assets/images/splash.png';
import { screenHeight, screenWidth } from '@utils/Scaling';
import { navigate } from '@utils/NavigationUtils';

const SplashScreen = () => {
  useEffect(() => {
    const navigateUser = () => {
      navigate('CustomerLogin');
    };

    const timeoutId = setTimeout(navigateUser, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});
