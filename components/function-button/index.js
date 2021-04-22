import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FunctionButton = (props) => {
  return (
    <TouchableOpacity style={{...styles.container, width: props.ButtonWidth}} onPress={() => props.ButtonAction(props.ThisFunction)}>
      {props.ThisFunction === 'delete' ? <Icon name="backspace" size={24} color="#FFFFFF" style={{position: 'absolute'}} /> : <Text style={styles.text}>{props.ThisFunction}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#202020',
    borderWidth: 1,
    borderColor: "#000000",
    paddingTop: '25%',
    position: 'relative',
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
    position: 'absolute',
    textTransform: 'uppercase',
  },
});

export default FunctionButton;
