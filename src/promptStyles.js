import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    prompt: {
        flex: 1,
    },
    promptMask: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    promptContent: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '30%',
        left: '50%',
        width: 300,
        marginLeft: -150,
        borderRadius: 5,
        alignItems: 'center',
        overflow: 'hidden'
    },
    promptTitle: {
        paddingTop: 20
    },
    promptTitleText: {
        fontSize: 18,
        color: '#000',
    },
    promptBody: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: '100%'
    },
    promptInput: {
        height: 46,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        paddingHorizontal: 10
    },
    promptFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    promptAction: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRightWidth: 1,
        borderColor: '#ddd',
        position: 'relative',
        left: 1
    },
    promptActionText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#006dbf'
    },
    textCount: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
        marginTop: 5
    }
});
