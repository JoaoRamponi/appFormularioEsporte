import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [esporte, setEsporte] = useState(0);
  const [duraçao, setDuraçao] = useState(0);
  const [semana, setSemana] = useState(0);
  const [peso, setPeso] = useState(0);
  const [pesoPerdido, setPesoPerdido] = useState(0);

  const esportes = [
    { esporteNome: 'Caminhada', valor: 1 },
    { esporteNome: 'Corrida', valor: 2 },
    { esporteNome: 'Ciclismo', valor: 3 },
    { esporteNome: 'Natação', valor: 4 }
  ];

  const semanas = [
    { semanaNome: 'Segunda-feira', valor: 1 },
    { semanaNome: 'Terça-feira', valor: 2 },
    { semanaNome: 'Quarta-feira', valor: 3 },
    { semanaNome: 'Quinta-feira', valor: 4 },
    { semanaNome: 'Sexta-feira', valor: 5 },
    { semanaNome: 'Sábado', valor: 6 },
    { semanaNome: 'Domingo', valor: 7 }
  ];

  const esportesItem = esportes.map((v, k) => (
    <Picker.Item key={k} value={k} label={v.esporteNome} />
  ));

  const semanasItem = semanas.map((v, k) => (
    <Picker.Item key={k} value={k} label={v.semanaNome} />
  ));

  function enviarDados() {
    if (nome.trim() === '') {
      alert('Preencha o nome');
      return;
    }

    const calorias = (3.5 * peso / 200) * duraçao;
    setPesoPerdido(calorias);

    alert(`
      Nome: ${nome}
      Esporte: ${esportes[esporte]?.esporteNome}
      Duração: ${duraçao} min
      Dia: ${semanas[semana]?.semanaNome}
      Peso: ${peso} kg
      Calorias Gastas: ${calorias.toFixed(2)} Kcal
    `);
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>Registro de Exercício</Text>

        <View style={styles.areaformulario}>
          <Text style={styles.textNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            onChangeText={setNome}
          />

          <Text style={styles.textNome}>Esporte:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={esporte}
            onValueChange={(itemValue) => setEsporte(itemValue)}
          >
            {esportesItem}
          </Picker>

          <Text style={styles.textNome}>Dia da Semana:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={semana}
            onValueChange={(itemValue) => setSemana(itemValue)}
          >
            {semanasItem}
          </Picker>

          <Text style={styles.textNome}> Duração (minutos): </Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={setDuraçao}
          />

          <Text style={styles.textNome}> Peso (kg): </Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={setPeso}
          />

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Mostrar Dados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9c9a3',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080', 
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  textNome: {
    fontSize: 16,
    color: '#800080', 
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#800080',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    color: '#333',
  },

  pickerModelo: {
    backgroundColor: '#fff',
    borderColor: '#800080',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    color: '#800080',
  },

  botao: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
