// import React, { Children } from "react";
// import { StyleSheet } from "react-native";

// export default function SignUpLayput({ children }) {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           paddingHorizontal: 20,
//           zIndex: 1,
//           position: "absolute",
//           top: 40,
//           width: "100%",
//           flex: 1,
//           flexDirection: "column",
//           backgroundColor: "white",
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             backgroundColor: "white",
//             borderRadius: 24.2,
//             textAlign: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             width: 50,
//             height: 50,
//             zIndex: 2,
//             marginBottom: 10,

//             shadowOffset: { width: 0, height: 3 },
//             shadowColor: "black",
//             shadowOpacity: 0.4,
//             shadowRadius: 3,

//             shadowColor: "black",
//             elevation: 8,
//           }}
//         >
//           <Ionicons name="arrow-back" size={25} color="black" />
//         </TouchableOpacity>
//         <StepByStepProgressBar steps={3} percent={progress} />
//       </View>
//       <ScrollView horizontal scrollEnabled={true}>
//         {children}
//       </ScrollView>

//       <View style={{ width: "100%", height: 76, padding: 12 }}>
//         <TouchableOpacity
//           style={{
//             backgroundColor: "#BFC2C9",
//             borderRadius: 20,
//             paddingVertical: 12,
//           }}
//         >
//           <Text style={{ textAlign: "center", color: "white" }}>Next</Text>
//         </TouchableOpacity>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
// //     marginVertical: 20,
// //   },
// // });
