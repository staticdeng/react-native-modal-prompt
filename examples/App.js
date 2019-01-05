import React, { Component } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
// import Prompt from 'react-native-modal-prompt';
import Prompt from './src/Prompt';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptVisible: false
        };
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <View>
                    <Text style={{ fontSize: 20 }} onPress={() => this.setState({ promptVisible: true })}>
                        open prompt
                    </Text>
                </View>
                <Prompt
                    visible={this.state.promptVisible}
                    title="title"
                    placeholder="please write something"
                    defaultValue="prompt"
                    showCount={true}
                    operation={[
                        { 
                            text: 'Cancel',
                            color: '#000',
                            onPress: () => { 
                            ToastAndroid.showWithGravity('if return false, the modal will not close', 1000, ToastAndroid.CENTER);
                            return false; 
                        }},
                        {
                            text: 'Ok',
                            onPress: (value) =>
                                new Promise((resolve) => {
                                    console.log(`the prompt value is ${value}`);
                                    // ajax....
                                    ToastAndroid.showWithGravity('ajax request sucess', 1000, ToastAndroid.CENTER);
                                    setTimeout(resolve, 2000);
                                }),
                        },
                    ]}
                />
            </View>
        );
    }
}

export default App;
