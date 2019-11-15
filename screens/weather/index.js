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
  Icon
} from "native-base";
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
          marginTop: 30,
          padding: 5,
          backgroundColor: "#eaebe6"
        }}
      >
        {weather && (
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{weather.weather[0].description}</Text>
                  <Text note>{celsius(weather.weather.main.temp) + " C"}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text>
                {whether.name}
                {", " + weather.sys.country}
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Wind speed: {weather.wind.speed + " " + weather.wind.deg + " C"}
              </Text>
            </CardItem>
          </Card>
        )}
      </Content>
    </Container>
  );
};
export default WeatherScreen;
