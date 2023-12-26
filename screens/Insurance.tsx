import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput, Button, RadioButton, Dialog, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const Insurance = () => {
  const [hasInsurance, setHasInsurance] = useState(false);
  const [insuranceType, setInsuranceType] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [policyStartDate, setPolicyStartDate] = useState(new Date());
  const [policyEndDate, setPolicyEndDate] = useState(new Date());
  const [insuredValue, setInsuredValue] = useState('');
  const [coverage, setCoverage] = useState('');


  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.title}>Información del Seguro</Text>

      <RadioButton.Group onValueChange={newValue => setHasInsurance(newValue === 'yes')} value={hasInsurance ? 'yes' : 'no'}>
        <View style={styles.radioContainer}>
          <Text>Tiene seguro:</Text>
          <View style={styles.radioItem}>
            <RadioButton value="yes" />
            <Text style={styles.radioLabel}>Sí</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="no" />
            <Text style={styles.radioLabel}>No</Text>
          </View>
        </View>
      </RadioButton.Group>

      {hasInsurance && (
        <View>
          <TextInput
            label="Tipo de seguro"
            value={insuranceType}
            onChangeText={setInsuranceType}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Compañía de seguros"
            value={insuranceCompany}
            onChangeText={setInsuranceCompany}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Número de póliza"
            value={policyNumber}
            onChangeText={setPolicyNumber}
            mode="outlined"
            style={styles.input}
          />
          {/* Use DateTimePicker for policy start and end dates */}
          {/* ... otros campos del seguro */}
        </View>
      )}

      {/* Botón para enviar el formulario */}
      <Button onPress={() => {}} mode="contained" style={styles.button}>
        Registrar Seguro
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioLabel: {
    marginHorizontal: 8,
  },
  button: {
    marginVertical: 10,
  },
  // ... otros estilos que necesites
});

export default Insurance;
