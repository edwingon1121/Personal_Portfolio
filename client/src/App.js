import React from 'react';
import NavBar from './Sections/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom';
import Summary from './Sections/Summary/Summary';
import Projects from './Sections/Projects/Projects';
import Download from './Sections/Download/Download';
import Form from './Sections/Form/Form';
import Footer from './Sections/Footer/Footer';
import Project from './Sections/Projects/Project';
import NotFound from './Sections/Download/NotFound';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/projects/:name" component={Project}></Route>
        <Route path="/projects" component={Projects} />
        <Route path="/download" component={Download} />
        <Route path="/contact" component={Form} />
        <Route path="/summary" component={Summary} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Summary} />
        <Redirect to='/not-found' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
