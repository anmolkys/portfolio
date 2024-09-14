import './App.css';
import Project from './components/Project';
import { Link } from 'react-router-dom/cjs/react-router-dom';
function App() {
  const projects = [
    {
      title:"waifu-api",
      desc:"-> serves more than 5000+ images and details of waifus",
      link:"https://waifu.anmolkys.in"
    },
    {
      title:"url-shortener",
      desc:"-> shorten any url fast, redirect your users at light speed and access dashboards",
      link:"https://www.url.anmolkys.in"
    },
    {
      title:"anonymost",
      desc:"-> mern stack project that lets you post anonymous thoughts",
      link:"https://anonymost.netlify.app/"
    },
        {
      title:"Tiny Devin",
      desc:"-> deeplearning model that writes code for you by searching the Internet",
      link:"https://github.com/anmolkys/TinyDevin"
    },
    {
      title:"notes-app",
      desc:"-> stay organized by making notes and todos",
      link:"https://anmolkys.github.io/Notes/"
    },
  ];

  return (
    <div className="App">
      <div className='navigator'><Link to='/'><h3 className='about'>About</h3></Link><Link to='/contact'><h3 className='contact'>Contact</h3></Link></div>
      <p>A minimalistic fullstack developer , who learns new technology really fast. Also a basketball player and a part time Anime geek.<br/>
      I like to photograph random things happening around me and I actively participate in curating and reading blogs about tech.<br /><br />
      My goal is to seamlessly and creatively deliver what is required of me to make . Currently , I'm working on further developing my knowledge
      about web development and machine learning.
      </p>
      <br />
      <h3 className='projects'>Projects:</h3>
      <ul>{
        projects.map((project)=><Project props={project}></Project>)
        }
      </ul>

    </div>
  );
}

export default App;
