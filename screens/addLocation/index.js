import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Spinner
} from "native-base";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import * as action from "../../actions/places.actions";

const AddLocation = () => {
  const [address, setAddress] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: null,
    longitude: null,
    formatted_address: null,
    name: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getAddressLocation = async () => {
    if (address === null) return;
    setIsLoading(true);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.geocodeAsync(address);
    console.log(address);
    console.log(location);
    if (location) {
      setLocationInfo({
        ...locationInfo,
        latitude: location[0].latitude,
        longitude: location[0].longitude,
        formatted_address: address,
        name: address
      });
      console.log("locationInfo", locationInfo);
      dispatch(action.createLocation(locationInfo));
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <Content
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 1,
          padding: 5,
          backgroundColor: "#eaebe6"
        }}
      >
        <Item>
          <Input
            placeholder="Enter new address"
            onChangeText={address => setAddress(address)}
          />
          <Icon active name="md-search" />
        </Item>
        <Item>
          {isLoading ? (
            <Spinner color="#6e4cad" />
          ) : (
            <Button
              style={{
                width: "100%",
                backgroundColor: "#6e4cad",
                color: "#ffffff"
              }}
              onPress={() => getAddressLocation()}
              full
            >
              <Text style={{ color: "#ffffff" }}>Create Address</Text>
            </Button>
          )}
        </Item>
      </Content>
    </Container>
  );
};
export default AddLocation;
