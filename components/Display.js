import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, Modal, StyleSheet, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      modalVisible: false,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.apiResponse();
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  apiResponse = () => {
    const url = `https://api.jsonbin.io/b/61cd9e96c912fe67c50b7287`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.SYMBOL.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => ( 
              <>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.setModalVisible(!this.state.modalVisible)}
                        
                    >
                        <Text style={styles.textStyle}>Hide info</Text>
                    </Pressable>
                    </View>
                </View>
                </Modal>

                <Pressable
                    style={[styles.button, styles.buttonOpen,{backgroundColor: item.CLOSE >= item.OPEN? "green": "red"}]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>{item.SYMBOL}</Text>
                </Pressable>
            </>
          )}
          keyExtractor={(x,i) => i}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={
            () => <View style={{height:5}} />
        }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  