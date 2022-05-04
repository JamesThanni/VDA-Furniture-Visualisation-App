import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor: "#121212",
        padding: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default globalStyles;