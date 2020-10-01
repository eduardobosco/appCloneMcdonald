import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    display: 'flex',
    resizeMode: 'center',
  },
  input: {
    display: "flex",
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 10,
  },
  inputText: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 8,
    margin: 10,
    width: 300,
    marginTop: 5,
  },
  senhaText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    padding: 20,
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default styles
