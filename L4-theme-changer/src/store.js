import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(createLogger()),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore