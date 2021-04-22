/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CalculatorDisplay from './components/calculator-display';
import NumberButton from './components/number-button';
import OperationButton from './components/operation-button';
import FunctionButton from './components/function-button';

const App: () => React$Node = () => {
  
  const [numberDisplay, setNumberDisplay] = useState("");
  //step 1
  const [numPressed, setNumPressed] = useState(0);
  
  const [previousTotal, setPreviousTotal] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");

  const updateDisplay = digit => {
    setNumberDisplay(`${numberDisplay}${digit}`);
    //step 2
    if(digit === 7 || digit === 8 || digit === 9){
    setNumPressed(numPressed + 1);}
  };

  const changeDisplay = action => {
    if (action === 'clear') {
      setNumberDisplay("");
      setPreviousTotal("");
      setCurrentOperation("");
      //step 3
      setNumPressed(0);
    } else if (action === 'delete') {
      if (typeof numberDisplay === 'string') {
        setNumberDisplay(numberDisplay.slice(0, -1));
      }
    }
  };

  const updateCalculations = op => {
    let newTotal = previousTotal;
    console.log(`testpt: ${previousTotal}`);
    console.log(`testnt: ${newTotal}`);
    let enteredNumber = numberDisplay * 1;
    console.log(`testnd: ${numberDisplay}`);
    let thisOp = "";

    if (currentOperation === "") {
      thisOp = op;
    } else {
      thisOp = currentOperation
    }

    if (previousTotal === "") {
      newTotal = enteredNumber;
    } else {
      if (thisOp === "/") {
        newTotal = previousTotal / enteredNumber;
      } else if (thisOp === "x") {
        newTotal = previousTotal * enteredNumber;
      } else if (thisOp === "-") {
        newTotal = previousTotal - enteredNumber;
      } else if (thisOp === "+") {
        newTotal = previousTotal + enteredNumber;
      }
    }

    if (op !== "=") {
      setNumberDisplay("");
      setPreviousTotal(newTotal);
      setCurrentOperation(op);
    } else {
      setNumberDisplay(newTotal);
      setPreviousTotal("");
      setCurrentOperation("");
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.savContainer}>
        <View style={styles.calculatorContainer}>
          <View style={{...styles.buttonRow, flexGrow: 1}}>
            <CalculatorDisplay Numbers={numberDisplay} />
          </View>
          <View style={styles.buttonRow}>
            <FunctionButton ThisFunction="clear" ButtonWidth="50%" ButtonAction={changeDisplay} />
            <FunctionButton ThisFunction="delete" ButtonWidth="25%" ButtonAction={changeDisplay} />
            <OperationButton Operation="/" UpdateCalculations={updateCalculations} />
          </View>
          {/*step 4 */}
          {numPressed < 3 ? (
          <View style={styles.buttonRow}>
            <NumberButton Number={7} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={8} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={9} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <OperationButton Operation="x" UpdateCalculations={updateCalculations} />
          </View>
          ) : null}
          <View style={styles.buttonRow}>
            <NumberButton Number={4} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={5} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={6} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <OperationButton Operation="-" UpdateCalculations={updateCalculations} />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={1} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={2} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <NumberButton Number={3} ButtonWidth="25%" ButtonAction={updateDisplay} />
            <OperationButton Operation="+" UpdateCalculations={updateCalculations} />
          </View>
          <View style={styles.buttonRow}>
            <NumberButton Number={0} ButtonWidth="50%" ButtonAction={updateDisplay} />
            <NumberButton Number="." ButtonWidth="25%" ButtonAction={updateDisplay} />
            <OperationButton Operation="=" UpdateCalculations={updateCalculations} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  savContainer: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
});

export default App;
