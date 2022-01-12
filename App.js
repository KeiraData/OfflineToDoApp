import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { Provider, useDispatch, useSelector } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { fetchTodos } from './actions/todoActions';
import { Button } from 'react-native-elements'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger
    ),
    offline(offlineConfig)
  )
);

const WrapperApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const showTodos = () => {
    console.log('Tareas pendientes:');
    console.log(todos);
  }

  return (
    <SafeAreaProvider>
      <Button onPress={showTodos} title="Show Todos"  />
    </SafeAreaProvider>
  );
};


export default WrapperApp;
