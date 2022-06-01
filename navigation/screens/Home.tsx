import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.51301474169193,
    longitude: 127.0590256713309,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

return (
    <View style={{flex: 1}}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker
          coordinate={{
          latitude: 37.5095714212126,
          longitude: 127.05754911527038,
          }}
          image = {require("../../assets/images/map_marker.png")}
        />
        <Marker
          coordinate={{
          latitude: 37.51389207002637,
          longitude: 127.05829141661525,
          }}
          image = {require("../../assets/images/map_marker.png")}
        />
        <Marker
          coordinate={{
          latitude: 37.515542492085714,
          longitude: 127.05728625878692,
          }}
          image = {require("../../assets/images/map_marker.png")}
        />
        <Marker
          coordinate={{
          latitude: 37.51047809510764,
          longitude: 127.05996779724956,
          }}
          image = {require("../../assets/images/map_marker.png")}
        />
      </MapView>
      <View style={styles.searchBox}>
      <FontAwesome name="search" size={25} style={{ marginRight: 10}} />
        <TextInput 
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex:1, padding:0, color: '#7E8389'}}
        />
      </View>
    </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position:'absolute', 
    flexDirection:"row",
    backgroundColor: '#F2F2F2',
    width: '75%',
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
  }
});