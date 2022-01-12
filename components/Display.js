import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.apiResponse();
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
              <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                color={item.CLOSE >= item.OPEN? "green": "red"}
                title={item.SYMBOL}
            />
          )}
          keyExtractor={(x,i) => i}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
};