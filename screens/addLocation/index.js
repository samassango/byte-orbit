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

const AddLocation = () => {
  const [address, setAddress] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: 0,
    longitude: 0,
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
    setLocationInfo({
      ...locationInfo,
      latitude: location.latitude,
      longitude: location.longitude,
      formatted_address: address,
      name: address
    });
    dispatch(action.createLocation(locationInfo));
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
            onChangeText={e => setAddress(e.target.value)}
          />
          <Icon active name="md-search" />
        </Item>
        <Item>
          {isLoading ? (
            <Spinner color="#6e4cad" />
          ) : (
            <Button onPress={() => getAddressLocation()} full>
              <Text>Create Address</Text>
            </Button>
          )}
        </Item>
      </Content>
    </Container>
  );
};
export default AddLocation;
