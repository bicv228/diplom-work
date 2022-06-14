import React from 'react';
import {StyleSheet,ScrollView, TextInput, Button, Linking} from "react-native";
import qs from 'qs';
export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vocabulary:'',
            email:'vvbuhaievskyi.fitu18@kubg.edu.ua'
        };
    }
    async sendEmail(to, subject, body, options = {}) {
        const { cc, bcc } = options;

        let url = `mailto:${to}`;

        const query = qs.stringify({
            subject: subject,
            body: body,
            cc: cc,
            bcc: bcc
        });

        if (query.length) {
            url += `?${query}`;
        }

        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }

        return Linking.openURL(url);
    }

    render() {
        return(
            <ScrollView style = {styles.container}>
                <TextInput
                    name = "terminName"
                    style = {styles.search}
                    placeholder =" Enter termin name"
                    onChangeText = {(text) => {
                        this.setState({name: text});
                        console.log(this.state.name);}}
                />
                <TextInput
                    name = "terminVocabulary"
                    style = {styles.search}
                    placeholder ="enter termin vocabulary"
                    onChangeText ={(text) => {
                        this.setState({vocabulary: text});
                        console.log(this.state.vocabulary);}}
                />
                <Button
                    title = 'Apply'
                    onPress={() => {
                        this.sendEmail(this.state.email, 'new termin', `${this.state.name + " " + this.state.vocabulary}`).then(()=> console.log("sended"))
                    }}
                />
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
