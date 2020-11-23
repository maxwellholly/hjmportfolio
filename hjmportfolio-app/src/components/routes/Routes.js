import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import Landing from '../../pages/landing/index';
import Login from '../../pages/login/index';
import Editor from '../../pages/editor/index';
import Blog from '../../pages/blog/index';
import Resume from '../../pages/resume/index';
import Projects from '../../pages/projects/index';
import Contact from '../../pages/contact/index';

export default function Routes() {
  return (
      <section className="main-content">
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route exact path={'/admin'} component={Login} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/resume'} component={Resume} />
          <Route exact path={'/projects'} component={Projects} />
          <Route exact path={'/contact'} component={Contact} />
          <ProtectedRoute exact path={'/editor'} component={Editor} />
        </Switch>
      </section>
  );
}
