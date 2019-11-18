import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Spinner
} from "native-base";
import * as action from "../../actions/places.actions";
import { overlay } from "react-native-paper";

const PlacesScreen = () => {
  const places = useSelector(state => state.places.places);
  const placesIsLoading = useSelector(state => state.places.isLoading);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  navigationOptions = {
    title: "Home"
  };
  useEffect(() => {
    if (places === null) dispatch(action.loadAllPlaces());
  }, [dispatch]);
  console.log("places", places);
  /* render function, etc */
  console.log("state", state);
  const handleRemoveItem = location => {
    dispatch(action.removeLocation(location));
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
        <List>
          {places &&
            places.map((location, index) => (
              <ListItem key={location.formatted_address + index} thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: location.icon }} />
                </Left>
                <Body>
                  <Text>{location.name}</Text>
                  <Text note numberOfLines={4}>
                    {location.formatted_address}
                  </Text>
                </Body>
                <Right>
                  <Icon
                    style={{ fontSize: 18, color: "#6e4cad" }}
                    size={25}
                    name="remove-circle"
                    onPress={() => handleRemoveItem(location)}
                  />
                </Right>
              </ListItem>
            ))}
        </List>
        <View
          style={{
            flex: 1,
            alignContent: "center",
            borderRadius: "100%",
            margin: 10,
            overlay: 1
          }}
        >
          <ListItem>{placesIsLoading && <Spinner color="#6e4cad" />}</ListItem>
          <ListItem thumbnail>
            <Right>
              <Button>
                <Icon
                  name="add"
                  style={{ fontSize: 30, color: "white" }}
                  onPress={() => {
                    state.navigation.navigate("AddLocation");
                  }}
                />
              </Button>
            </Right>
          </ListItem>
        </View>
      </Content>
    </Container>
  );
};
export default PlacesScreen;
