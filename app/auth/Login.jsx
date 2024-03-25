import { SafeAreaView, View, Text, ScrollView, StatusBar } from "react-native";
import { Stack } from "expo-router";
import styles from '../../styles/app.style';
import { LoginForm, BotLoginImage, Input } from "../../components";

const Login = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Stack.Screen
                options={{
                    headerShown: false,
                    // headerStyle: { backgroundColor: COLORS.lightWhite },
                    // headerShadowVisible: false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn
                    //         iconUrl={icons.left}
                    //         dimension='60%'
                    //         handlePress={() => router.back()}
                    //     />
                    // ),
                    // headerTitle: "",
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <BotLoginImage />
                <LoginForm />
            </ScrollView>
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Login;
