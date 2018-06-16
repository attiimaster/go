import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Work from './components/Work';
import Work2 from './components/Work2';
import Console from './components/Console';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { HexGridClear } from './components/Hexagon';

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

class App extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {
        const sections = document.querySelectorAll("section");
        for (let i=0; i<sections.length; i++) {
            console.log(sections[i].children)
            if (checkVisible(sections[i])) {
                sections[i].className += " appear";
            } else {
                sections[i].className = "";
            }
        }
    }
    render() {
        return (
            <div className='App'>
                <Nav />

                <section id={0} className="appear" >
                    <HexGridClear color={'#444'} />
                    <h1>mayer.solutions</h1>
                    <Console />
                </section>
    
                <section id={1}>
                    <Services />
                </section>
    
                <section id={2} >
                    <About />
                </section>
    
                <section id={3} >
                    <Work />
                </section>
    
                <section id={4} >
                    <Contact />
                    <HexGridClear margin={{ marginTop: -100 + "px" }} color={'#444'} />
                    <footer className="footer">2018 - designed and built by Raphael Mayer</footer>
                </section>
    
                <section id={5} hidden >
                    <Work2 />
                </section>
            </div>
        );
    }
}

export default App;

