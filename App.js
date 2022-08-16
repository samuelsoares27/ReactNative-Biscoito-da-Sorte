import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'teste',
      img: require('./src/assets/biscoito.png')
    };

    this.frases = [
      'frase 1',
      'frase 2',
      'frase 3',
      'frase 4',
      'frase 5',
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito() {
    var numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/assets/biscoitoAberto.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.text}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.button} onPress={this.quebraBiscoito}>
          <View style={styles.viewButtonText}>
            <Text style={styles.buttonText}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  viewButtonText: {
    flex: 1,
    flexdirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }


});