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
  Icon
} from "native-base";
import * as action from "../../actions/places.actions";
import { overlay } from "react-native-paper";

const PlacesScreen = () => {
  const places = useSelector(state => state.places.places);
  const navigation = useSelector(state => state.navigation);
  const dispatch = useDispatch();
  navigationOptions = {
    title: "Home"
  };
  useEffect(() => {
    dispatch(action.loadAllPlaces());
  }, [dispatch]);
  console.log("places", places);
  /* render function, etc */

  return (
    <Container>
      <Content
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 30,
          padding: 5,
          backgroundColor: "#eaebe6"
        }}
      >
        <List>
          {places &&
            places.map(location => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: location.icon }} />
                </Left>
                <Body>
                  <Text>{location.name}</Text>
                  <Text note numberOfLines={4}>
                    {location.formatted_address}
                  </Text>
                </Body>
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
          <ListItem thumbnail>
            <Right>
              <Button>
                <Icon name="add" style={{ fontSize: 30, color: "white" }} />
                {/* <Text>Location</Text> */}
              </Button>
            </Right>
          </ListItem>
        </View>
      </Content>
    </Container>
  );
};
export default PlacesScreen;
