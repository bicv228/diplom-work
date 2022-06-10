import React from 'react';
import {StyleSheet,ScrollView, TextInput, Text, FlatList} from "react-native-web";
import firebase from '../src/config'
import {TouchableOpacity} from "react-native";
export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true
        };
    }
    getList = () =>
    {
        firebase.database().ref('/1YQG7H2FTltWuQoEl_wXnhCHF0LCShGUrhpbtEtgF-qc/LexicalMin').on('value', snapshot =>{
            let terList = [];
            snapshot.forEach((child) =>{
                let obj ={
                    key: child.key,
                    termin: child.val().termin,
                    vocabulary: child.val().vocabulary
                }
                terList.push(obj);
            })
            this.setState({
                list: terList,
                loading : false
            })
            console.log(terList, this.state.list);
        })
    }
    componentDidMount(){
        this.getList();
    }
    changeText= (text) =>{
        if(text.length >= 3) {
            let tempList = [];
            this.state.list.forEach((item) =>{
            if(item.termin.search(text) != -1)
            {
                tempList.push((item));
            }
            })
            this.setState({
                list:tempList
            })
        }
        else{
            this.getList();
        }
    }
    render() {
        return(
            <ScrollView style = {styles.container}>
                <TextInput
                    style = {styles.search}
                    placeholder ="Search"
                    onChangeText ={(text) => this.changeText(text)}
                />
                <FlatList style= {styles.container}
                          data={this.state.list}
                          keyExtractor={(item)=>item.key}
                          renderItem={({item})=>{
                              if(item.termin == "")
                              {
                                  return(
                                      <TouchableOpacity
                                          style = {styles.container}
                                          onPress={() => {
                                              this.props.navigation.navigate('About',{name:item.termin, key: item.key});
                                          }}>
                                          <Text>Here is termin but we dont have termin name</Text>
                                      </TouchableOpacity>
                                  )
                              }
                              else return(
                                  <TouchableOpacity
                                      style = {styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('About',{name:item.termin, key: item.key});
                                      }}>
                                      <Text>{item.termin}</Text>
                                  </TouchableOpacity>
                              )
                          }}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        fontWeight:'bold',
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 1,
        width: '100%',
        padding: 10,
    },
    search: {
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 1,
        width: '100%',
        padding: 10,
    },
});
