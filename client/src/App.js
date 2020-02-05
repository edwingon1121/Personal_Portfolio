import React from 'react';
import NavBar from './Containers/NavBar/NavBar';
import Summary from './Containers/Summary/Summary';
import Projects from './Containers/Projects/Projects';
import Download from './Containers/Download/Download';
import Form from './Containers/Form/Form';
import Footer from './Containers/Footer/Footer';


function App() {
  return (
    <>
      <NavBar/>
      <Summary/>
      <Projects/>
      <Download/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
