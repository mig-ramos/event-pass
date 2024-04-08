import { View, Text, StyleSheet } from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#000", 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
fontSize: 24,
color: "white",
    }
})