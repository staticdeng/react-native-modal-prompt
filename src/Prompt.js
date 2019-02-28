import React, { Component } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './promptStyles';

class Prompt extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        title: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        operation: PropTypes.array.isRequired,
        maxLength: PropTypes.number,
        showCount: PropTypes.bool,
    }
    static defaultProps = {
        visible: false,
        defaultValue: '',
        placeholder: '',
        maxLength: 100,
        showCount: false,
    }

    state = {
        visible: this.props.visible,
        value: this.props.defaultValue,
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({ visible: nextProps.visible, value: nextProps.defaultValue });
    }

    requestClose = () => {
        this.setState({ visible: false });
    }
    operationPress = async (fn) => {
        const bool = fn && await fn(this.state.value);
        if (bool !== false) {
            this.setState({ visible: false });
        }
    }
    onChangeText = (value) => {
        this.setState({ value });
    }
    renderPromet = () => {
        const { title, defaultValue, placeholder, operation, showCount, maxLength } = this.props;
        return (
            <View style={styles.prompt}>
                <View style={styles.promptMask}></View>
                <View style={styles.promptContent}>
                    <View style={styles.promptTitle}>
                        <Text style={styles.promptTitleText}>{title}</Text>
                    </View>
                    <View style={styles.promptBody}>
                        <TextInput
                            style={styles.promptInput}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            onChangeText={this.onChangeText}
                            maxLength={maxLength}
                            underlineColorAndroid="white"
                            autoFocus={true}
                        />
                        {
                            showCount
                            &&
                            <View style={styles.textCount}>
                                <Text>{this.state.value.length > maxLength ? maxLength : this.state.value.length}</Text><Text>/</Text><Text>{maxLength}</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.promptFooter}>
                        {
                            operation.length > 0
                            &&
                            operation.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.promptAction]}
                                        onPress={() => this.operationPress(item.onPress)}
                                    >
                                        <Text style={[styles.promptActionText, item.color && { color: item.color }]}>{item.text}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <Modal
                visible={this.state.visible}
                onRequestClose={this.requestClose}
            >
                {this.renderPromet()}
            </Modal>
        );
    }
}

export default Prompt;