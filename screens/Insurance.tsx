import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput, Button, RadioButton, Dialog, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '@react-native-community/datetimepicker';
import { DatePickerModal } from 'react-native-paper-dates';
import { es, registerTranslation } from 'react-native-paper-dates'
registerTranslation('es', es)
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
const Insurance = () => {
  const navigation = useNavigation();
  const [hasInsurance, setHasInsurance] = useState(false);
  const [insuranceType, setInsuranceType] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [policyStartDate, setPolicyStartDate] = useState(new Date());
  const [policyEndDate, setPolicyEndDate] = useState(new Date());
  const [insuredValue, setInsuredValue] = useState('');
  const [coverage, setCoverage] = useState('');

  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

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
          
           {/* Selector de fechas */}

           <DatePickerInput
            label="Fecha apertura"
            locale="es" // o tu locale preferido
            value={policyStartDate}
            onChange={(date) => setPolicyStartDate(new Date())}
            inputMode="start"
            style={styles.datePickerInput}
            mode="outlined"
          />

          <DatePickerInput
            label="Fecha vencimiento"
            locale="es"
            value={policyEndDate}
            onChange={(date) => setPolicyEndDate(new Date())}
            inputMode="end"
            style={styles.datePickerInput}
            mode="outlined"
          />

          <TextInput
            label="Valor asegurado"
            value={insuredValue}
            onChangeText={setInsuredValue}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Cobertura"
            value={coverage}
            onChangeText={setCoverage}
            mode="outlined"
            style={styles.input}
          />

          <Button onPress={() => {}} mode="contained" style={styles.button}>
            Registrar Seguro
          </Button>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal :10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 15,
  },
  formContainer: {
    marginTop: 15,
  },
  input: {
    marginBottom: 15,
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
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4a90e2', // Color de tu tema
    marginBottom:20
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
    textAlign: 'left',
  },
  datePickerInput:
  {
    justifyContent: 'center',textAlign:'center',
    marginVertical :10
  }
});

export default Insurance;