import { AppRegistry } from 'react-native';
import App from './App'; // Make sure the path is correct
import { name as myapp } from './app.json';


// Register the main App component
AppRegistry.registerComponent(myapp, () => App);