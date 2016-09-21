import Root from '../container/Root';
import React from 'react';
import {Route} from 'react-router';
import Example from '../components/Example';

export default (
  <div>
    <Route component={Root} >
      <Root path="/" component={Example} />
    </Route>
  </div>
);
