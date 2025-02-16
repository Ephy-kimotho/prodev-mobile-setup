import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
        position: "relative"
    },
    navGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10
    },
    largeText: {
        color: "black",
        fontWeight: 700,
        fontSize: 39,
    },
    smallText: {
        fontSize: 14,
        color: "#7E7B7B"
    },
    formGroup: {
        marginTop: 15
    },
    placeholderText: {
        fontSize: 18,
        color: "#7E7B7B",
        marginBottom: 7
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        borderColor: '#7E7B7B',
        paddingHorizontal: 10
    },
    passwordGroup: {
        flexDirection: "row",
        borderWidth: 1,
        alignItems: "center",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: '#7E7B7B',
    },
    forgotPasswordText: {
        fontWeight: 500,
        textAlign: "right",
        marginTop: 9,
        fontSize: 17,
        color: "#34967C"
    },
    button: {
        backgroundColor: "#2B876E",
        height: 53,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        borderColor: "#2B876E",
        justifyContent: "center"

    },
    buttonText: {
        color: "white",
        fontSize: 17,
    }
    ,
    dividerGroup: {
        marginTop: 20,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    divider: {
        borderWidth: 1,
        borderColor: "#c2c2c2",
        flex: 1
    }
    ,
    dividerText: {
        fontSize: 17,
        color: "#c2c2c2"
    },
    socialMediaButtonGroup: {
        gap: 15,
        marginTop: 25
    },
    socialMediaButton: {
        borderWidth: 1,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10
    },
    socialMediaButtonText: {
        fontSize: 18,
        color: '#0D0D0D',
        fontWeight: 400
    },
    subTextGroup: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 33,
        left: 77,
        right: 76

    },
    subText: {
        fontSize: 18,
        color: '#b5b5b5'
    },
    subTextJoin: {
        fontSize: 18,
        color: '#FFA800',
        fontWeight: 600
    }
});


export { styles };