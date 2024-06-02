# INTRODUCTION TO REACT COMPONENT
## 11253489

![alt text](<Images/assignment3.png>)

The provided code demonstrates a structured approach to building a React Native application with reusable components and consistent styling. The CustomButton component showcases how to create a reusable UI element, while the FlatList and SectionList components illustrate how to render lists of data with custom layouts. The SafeAreaView, ScrollView, StatusBar, TextInput, Text, View, and Image components are used to build the overall layout and user interface.


 ### App Component

The App component serves as the main entry point of the application. It sets up the overall layout and integrates various UI elements including a search input, a list of images with titles, a custom button, and a section list of tasks.

### CustomButton Component
The CustomButton component is a reusable button component created to encapsulate the button's styling and behavior. It accepts title, onPress, and style props, allowing customization of the button text, click handler, and additional styling. This component is imported and used within the App component to provide a consistent button design.

### Item Component
The Item component is a stateless functional component used to render individual task items within the SectionList. It takes a title prop and styles it with styles.itemText.

### DATA Constant
The DATA constant is an array of objects used to populate the SectionList. Each object represents a section with a title and an array of data items (tasks).

### magesData Constant
The imagesData constant is an array of objects where each object represents an image with a title and a source. This data is used to populate the FlatList.

### renderItem Function
The renderItem function is used by the FlatList to render each item in the list. It takes an item as a parameter and returns a View containing an Image and a Text element to display the image and its corresponding title.

### FlatList Component
The FlatList component is used to render a grid of images with titles. It uses the imagesData array for its data, renderItem function to render each item, and is configured to display items in a grid layout with three columns.

### SectionList Component
The SectionList component is used to render a list of tasks grouped by sections. It uses the DATA array for its sections, Item component to render each task, and displays section headers with titles.

### SafeAreaView Component
The SafeAreaView component ensures that the content is rendered within the safe area boundaries of a device, avoiding any overlap with system UI elements like the status bar.

### ScrollView Component
The ScrollView component allows for vertical scrolling of its child components. It is used to contain the search input, categories header, FlatList, button, and SectionList, making the entire layout scrollable.

### StatusBar Component
The StatusBar component is used to customize the appearance of the status bar, setting its style to the default.

### TextInput Component
The TextInput component is used to create a search input field where users can type text. It includes styling for padding, margin, border, and background color.

### Text Component
The Text component is used multiple times to display various pieces of text, such as the application title, section headers, image titles, and task items. Each instance is styled appropriately for its context.

### View Component
The View component is a container for other components and elements. It is used to group and style multiple elements together, such as the image and title in the FlatList items, and task items in the SectionList.

### Image Component
The Image component is used to display images in the FlatList. Each image is styled to have a consistent size and appearance.

### StyleSheet Object
The StyleSheet object is used to create a set of styles for the components in the application. It defines various styles such as container, scrollView, input, image, imageContainer, imageTitle, item, itemText, flatListContent, row, head, buttonContainer, title, and header.