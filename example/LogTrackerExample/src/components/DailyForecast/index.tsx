import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import moment from 'moment';

const DailyForecast = ({day, temperatureText}) => {
  return (
    <View style={styles.dayContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.weekDay}>
          {moment(day.dt * 1000).format('ddd')}
        </Text>
      </View>
      <View style={styles.iconTempView}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={'contain'} // cover or contain its upto you view look
        />
        <Text style={styles.descriptionText}>{day.weather[0].description}</Text>
      </View>
      <View style={styles.degreeView}>
        <Text style={styles.degree}>
          {Math.round(day.temp.max)}
          {temperatureText}
        </Text>
        <Text style={styles.feelsLike}>
          Feels {Math.round(day.feels_like.day)}
          {temperatureText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '95%',
    maxWidth: 478,
  },
  dateContainer: {
    textAlign: 'right',
    flex: 1,
  },
  weekDay: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    margin: 3,
  },
  descriptionText: {
    color: 'black',
  },
  iconTempView: {
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  degreeView: {
    textAlign: 'center',
    flex: 1,
  },
  degree: {
    color: 'black',
    fontSize: 24,
  },
  feelsLike: {
    color: 'black',
    fontSize: 14,
  },
});

export default DailyForecast;
