
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Home from './Home';

function openHome(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Home/>);
}

function openAbout(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<About/>);
}
function openProject(){
  let main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Project/>);
}
function openContact(){
  const main=ReactDOM.createRoot(document.getElementById('main-area'));
  main.render(<Contact/>);
}
function App() {
  return (
    <div className="main">
        <div>
        <table id="navbar">
            <tr>
                <th id="logo"><img
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/283/895/small/jp-logo-monogram-emblem-style-with-crown-shape-design-template-free-vector.jpg" alt=""/>
                </th>
                <th><button onClick={openHome}>Home</button></th>
                <th><button onClick={openAbout}>About</button></th>
                <th><button onClick={openProject}>Project</button></th>
                <th><button onClick={openContact} >Contact</button></th>
            </tr>
        </table>
      </div>
      <div id='main-area'>
            <Home/>
      </div>
    </div>
  );
}

export default App;