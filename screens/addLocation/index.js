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

const AddLocation = () => {
  const [address, setAddress] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: 0,
    longitude: 0,
    formatted_address: null,
    name: null
  });
  const [isLoading, setIsLoading] = useState(false);

  const getAddressLocation = async () => {
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
    setIsLoading(false);
  };

  return (
    <Container>
      <Content>
        <Item>
          <Input
            placeholder="Enter new address"
            onChangeText={e => setAddress(e.target.value)}
          />
          <Icon active name="address" />
        </Item>
        <Item>
          {isLoading ? (
            <Spinner color="#6e4cad" />
          ) : (
            <Button onPress={() => getAddressLocation()}>
              <Text>Create Address</Text>
            </Button>
          )}
        </Item>
      </Content>
    </Container>
  );
};
export default AddLocation;
