import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Router, RouterContext } from 'react-router';

export default class Root extends PureComponent {
  render() {
    const {
      store, history, routes, type,
    } = this.props;

    return (
      <Provider store={store}>
        <div>
          {type === 'server' ? <RouterContext /> : <Router history={history} routes={routes} />}
        </div>
      </Provider>
    );
  }
}
