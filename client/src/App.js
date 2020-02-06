import React from 'react';
import NavBar from './Sections/NavBar/NavBar';
import Summary from './Sections/Summary/Summary';
import Projects from './Sections/Projects/Projects';
import Download from './Sections/Download/Download';
import Form from './Sections/Form/Form';
import Footer from './Sections/Footer/Footer';


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
