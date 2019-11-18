import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Right
} from "native-base";
import Ionicon from "@expo/vector-icons/Ionicons";

import * as action from "../../actions/whether.actions";

const WeatherScreen = () => {
  const weather = useSelector(state => state.weather.weather);
  const dispatch = useDispatch();

  const celsius = k => k - 273.15;

  useEffect(() => {
    dispatch(action.loadAllWeather());
  }, [dispatch]);
  console.log("whether", weather);

  /* render function, etc */
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
        {weather && weather.hasOwnProperty("weather") && (
          <Card style={{ elevation: 3, margin: 10 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{weather.weather[0].description}</Text>
                  <Text note>
                    {parseFloat(celsius(weather.main.temp)).toFixed(2) + " C"}
                  </Text>
                </Body>
              </Left>
              <Right>
                <Ionicon
                  style={{ paddingLeft: 5, color: "#346beb" }}
                  name="md-cloudy"
                  size={25}
                />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Left>
                <Text>
                  {weather.name}
                  {", " + weather.sys.country}
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Wind speed:{" "}
                  {weather.wind.speed + " " + weather.wind.deg + " C"}
                </Text>
              </Left>
            </CardItem>
          </Card>
        )}
        {weather && weather.hasOwnProperty("message") && (
          <Text>
            Error occurred while pulling the city weather "
            {`${weather.message}`}"
          </Text>
        )}
      </Content>
    </Container>
  );
};
export default WeatherScreen;
