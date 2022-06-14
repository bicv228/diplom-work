import React from 'react';
import {StyleSheet,ScrollView,Button} from "react-native";
export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ScrollView style = {styles.container}>
                <Button
                    title = 'Search'
                    onPress={() => {
                        this.props.navigation.navigate('Search');
                    }}
                />
                <Button
                    title = 'Send'
                    onPress={() => {
                        this.props.navigation.navigate('Send');
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
