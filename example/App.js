/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import ImagedCarouselCard from "./lib/ImagedCarouselCard";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            top: "30%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ImagedCarouselCard />
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
