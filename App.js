import React, { useState } from 'react';
    import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

    const App = () => {
      const [number, setNumber] = useState('');
      const [guess, setGuess] = useState('');
      const [message, setMessage] = useState('');
      const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

      const handleGuess = () => {
        const userGuess = parseInt(guess, 10);
        if (isNaN(userGuess)) {
          Alert.alert('Invalid input', 'Please enter a valid number');
          return;
        }

        if (userGuess > randomNumber) {
          setMessage('Too high! Try again.');
        } else if (userGuess < randomNumber) {
          setMessage('Too low! Try again.');
        } else {
          setMessage('Congratulations! You guessed the number.');
        }
      };

      const resetGame = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setMessage('');
      };

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Guess the Number Game</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={guess}
            onChangeText={setGuess}
            placeholder='Enter your guess'
          />
          <Button title='Guess' onPress={handleGuess} />
          {message ? <Text style={styles.message}>{message}</Text> : null}
          <Button title='Reset Game' onPress={resetGame} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
      },
      message: {
        fontSize: 18,
        marginVertical: 20,
      },
    });

    export default App;