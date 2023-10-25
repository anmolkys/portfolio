import './App.css';
import Project from './components/Project';
function App() {
  const projects = [
    {
      title:"blog-api",
      desc:"-> written in typescript and NestJs and secured by JWT",
      link:"https://github.com/anmolkys/nestjs-blogapi"
    },
    {
      title:"url-shortener",
      desc:"-> short any url fast and redirect your users at light speed",
      link:"https://www.url.anmolkys.in"
    },
    {
      title:"anonymost",
      desc:"-> mern stack project that lets you post anonymous thoughts",
      link:"https://anonymost.netlify.app/"
    },
    {
      title:"notes-app",
      desc:"-> stay organized by making notes and todos",
      link:"https://anmolkys.github.io/Notes/"
    }
  ];

  return (
    <div className="App">
      <div className='navigator'><a href='/'><h3 className='about'>About</h3></a><a href='/contact'><h3 className='contact'>Contact</h3></a></div>
      <p className='about-para'>
        🎈 A minimalistic fullstack developer , who learns new technology really fast.</p>
        <p>🏀 Also a basketball player and a part time Anime geek.</p>
        <p>🌱 Currently doing Undergrad in VIT Vellore
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
