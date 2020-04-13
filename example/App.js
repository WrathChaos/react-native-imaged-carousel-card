/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import ImagedCarouselCard from "react-native-imaged-carousel-card";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            top: 32,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ImagedCarouselCard
            height={200}
            width={200}
            shadowColor="#051934"
            source={{
              uri:
                "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            }}
          />
          <View style={{ marginTop: 32 }}>
            <ImagedCarouselCard />
          </View>

          <View style={{ marginTop: 32 }}>
            <ImagedCarouselCard
              height={200}
              width={200}
              shadowColor="#051934"
              source={{
                uri:
                  "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
