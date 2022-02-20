import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const Calculator = () => {
    const [number2, onChangeNumber2] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [operator, onChangeOperator] = React.useState('+');
    switch(operator) {
      case '+':
       wynik = parseInt(number) + parseInt(number2);
       break;
      case '-':
        wynik = parseInt(number) - parseInt(number2);
        break;
      case '*':
        wynik = parseInt(number) * parseInt(number2);
        break;
      case '/': 
        wynik = parseInt(number) / parseInt(number2);
        break;
    }
  return (
    <SafeAreaView>
     <TextInput
        style={styles.input}
        onChangeText={onChangeOperator}
        value={operator}
        placeholder="Operator:"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Number 1:"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Number 2:"
        keyboardType="numeric"
      />
      <Text style={styles.number}>Result: {wynik.toFixed(2)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  number: {
   margin: 24,
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center'
 },
});

export default Calculator;
