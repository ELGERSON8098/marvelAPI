import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
 
export default function App() {
//codigo Js
  const [numero1, setNumero1]=useState(0);
  const [numero2, setNumero2]=useState(0);
  const [resultado, setResultado]=useState(0);
 
  const sumar=()=>{
    let suma=parseFloat(numero1)+parseFloat(numero2)
    setResultado(suma)
  }

  const dividir=()=>{
    let div=parseFloat(numero1)/ parseFloat(numero2)
    setResultado(div)
  }

  const restar=()=>{
    let rest=parseFloat(numero1) - parseFloat(numero2)
    setResultado(rest)
  }

 
  const clean = ()=>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }
 
 
//termina codigo js
return (
  <View style={styles.container}>
    <Text style={styles.title}>Operaciones matemáticas</Text>
    
    <Text style={styles.label}>Número 1:</Text>
    <TextInput
      style={styles.input}
      placeholder='Ingrese el número 1'
      value={numero1}
      onChangeText={setNumero1}
      keyboardType='numeric'
    />

    <Text style={styles.label}>Número 2:</Text>
    <TextInput
      style={styles.input}
      placeholder='Ingrese el número 2'
      value={numero2}
      onChangeText={setNumero2}
      keyboardType='numeric'
    />

<View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.roundedButton}
          onPress={sumar}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundedButton}
          onPress={restar}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundedButton}
          onPress={dividir}
        >
          <Ionicons name="md-divide" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>El valor del número 1: {numero1}</Text>
      <Text style={styles.resultText}>El valor del número 2: {numero2}</Text>
      <Text style={styles.resultText}>Resultado: {resultado}</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={clean}
      >
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  roundedButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  resultText: {
    color: 'red',
    fontSize: 18,
    marginTop: 10,
  },
});


