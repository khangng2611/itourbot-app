// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import styles from './auth.style';
// import { icons } from '../../constants';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
// import { useEffect, useState } from 'react';

// const OAuthLogin = () => {
//     const [userInfo, setUserInfo] = useState();
//     //ios:  419978511119-vqrmck18o9dte3cjl6f1ll72c9jna3h3.apps.googleusercontent.com
//     // android: 419978511119-8sgh4eot9seciv377iit312g56c9nv8r.apps.googleusercontent.com
//     const configGoogleSignin = () => {
//         GoogleSignin.configure({
//             androidClientId: '419978511119-8sgh4eot9seciv377iit312g56c9nv8r.apps.googleusercontent.com',
//             iosClientId: '419978511119-vqrmck18o9dte3cjl6f1ll72c9jna3h3.apps.googleusercontent.com',
//         })
//     }

//     useEffect(()=>{
//         configGoogleSignin();
//     },[])

//     const signIn = async () => {
//         await GoogleSignin.hasPlayServices();
//         const userInfo = await GoogleSignin.signIn();
//         setUserInfo(userInfo);
//     }

//     return (
//         <View style={styles.oauthContainer}>
//             <TouchableOpacity
//                 style={styles.oauthBtn}
//                 onPress={signIn}
//             >
//                 <Image style={styles.oauthLogo} source={icons.google} />
//                 <Text style={styles.oauthText}>Sign In</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.oauthBtn}
//             // onPress={() => (oauthLogin('facebook'))}
//             >
//                 <Image style={styles.oauthLogo} source={icons.facebook} />
//                 <Text style={styles.oauthText}>Sign In</Text>
//             </TouchableOpacity>
//             <Text>{userInfo}</Text>
//         </View>
//     )
// }

// export default OAuthLogin;