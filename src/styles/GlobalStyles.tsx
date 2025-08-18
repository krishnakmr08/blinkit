import { StyleSheet } from 'react-native';

export const hocStyles = StyleSheet.create({
  cartContainer: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    height: '12%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
