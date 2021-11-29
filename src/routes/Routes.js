import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/landing';
import Resume from '../pages/resume';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import Blog from '../pages/blog';

export default function Routes(props) {
    return (
        <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/resume'} component={Resume} />
            <Route exact path={'/projects'} component={Projects} />
            <Route exact path={'/contact'} component={Contact} api={props.api}/>
            <Route exact path={'/blog'} component={Blog} />
        </Switch>
    );
}