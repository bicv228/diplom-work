import React from 'react';
import {ScrollView, TextInput, Text, StyleSheet} from "react-native-web";
import firebase from '../src/config';
export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            termin: " ",
            vocabulary: " ",
            equivalent: " ",
            etymology: " ",
            source:" ",
        };
    }
    getList = () =>
    {
        firebase.database().ref('/1YQG7H2FTltWuQoEl_wXnhCHF0LCShGUrhpbtEtgF-qc/LexicalMin').on('value', snapshot =>{
            snapshot.forEach((child) =>{
                if(this.props.route.params.key === child.key){
                    this.setState({
                        key: child.key,
                        termin: child.val().termin,
                        vocabulary: child.val().vocabulary,
                        equivalent: child.val().equivalent,
                        source: child.val().source
                    })
                }})
        })
    }
    componentDidMount(){
        this.getList();
    }
    hideComponent = (statement) =>{
        if(statement === "")
        {
            const styles = StyleSheet.create({container: {
                    display: 'none',
                }})
            return styles;
        }
        else{
            const styles = StyleSheet.create({
                container: {
                    backgroundColor: '#fff',
                    borderColor: 'black',
                    borderRadius: 15,
                    borderWidth: 1,
                    width: '100%',
                    padding: 10,
                }})
            return styles;
            }
    }
    const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 1,
        width: '100%',
        padding: 10,
    }})
    render() {
        return(
            <ScrollView style = {styles.container}>
                <Text style = {this.hideComponent(this.state.termin).container}>{this.state.termin}</Text>
                <Text style = {this.hideComponent(this.state.vocabulary).container}>{this.state.vocabulary}</Text>
                <Text style = {this.hideComponent(this.state.equivalent).container}>{this.state.equivalent}</Text>
                <Text style = {this.hideComponent(this.state.source).container}>{this.state.source}</Text>
            </ScrollView>
        );
    }
}
