import React from 'react';
import { StatusBar, View, Text, ScrollView, FlatList, Button, TextInput, StyleSheet, Image, SafeAreaView, SectionList } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    title: "On Going Task",
    data: [
      "Daily hour exercise is a healthy practice.",
      "Cooking is a good skill to learn.",
      "I will live to study not study to live.",
      "Develop your thinking ability by meditating daily.",
      "Take time to relax after a long day's work.",
      "Work to build a beautiful future."
    ]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

export default function App() {
  const imagesData = [
    { key: "1", title: "Cooking", src: require('./cook.png') },
    { key: "2", title: "Working", src: require('./work.png') },
    { key: "3", title: "Relaxing", src: require('./relax.png') },
    { key: "4", title: "Studying", src: require('./study.png') },
    { key: "5", title: "Exercising", src: require('./exercise.png') },
    { key: "6", title: "Meditating", src: require('./meditete.png') }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.src} style={styles.image} />
      <Text style={styles.imageTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>DEBBY'S DAILY TASKS</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput style={styles.input} placeholder="Search" />
        <Text style={styles.head}>CATEGORIES</Text>
        <FlatList
          key={2}
          data={imagesData}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContent}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Click to Add Task'
            onPress={() => console.log("Button is functioning properly")}
            color="black"
          />
        </View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a4ab',
    paddingTop: Constants.statusBarHeight,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: '80%',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  imageTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    marginVertical: 10,
    backgroundColor: '#b0abb3',
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    margin: 20,
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#6a6a6a',
    padding: 10,
    textAlign: 'center',
  },
});