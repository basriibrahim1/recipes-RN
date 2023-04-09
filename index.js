import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import storage from './src/storage/store'
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';


const {store, persistor} = storage()

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaView style={{flex:1}}>
                    <Routes />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
