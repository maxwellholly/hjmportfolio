import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/landing';
import Resume from '../pages/resume';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route exact path={'/resume'} component={Resume} />
            <Route exact path={'/projects'} component={Projects} />
            <Route exact path={'/contact'} component={Contact} />
        </Switch>
    );
}