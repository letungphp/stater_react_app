import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

 
export default class Dashboard extends React.Component {
  render () {
    return <div>
	    <Header />
	    <Sidebar />
	    <Content />
	    <Footer />
    </div>;
    ;
  }
}