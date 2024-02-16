import "./Projects.css"
import Article from "../../Assets/Article.png"
import Rancid from "../../Assets/Rancid_Tomatillos.png"
import Trivia from "../../Assets/Trivia_Troll.png"

function Projects() {
  return (
    <div className="projects-container">
      <a href={"https://article-zeta.vercel.app"}><div className="project">
        <img src={Article} alt="A screenshot of an artwork discovery application"/>
        <h1 className="project-text">Article</h1>
      </div>
      </a>
      <a href={"https://rancid-tomatillos-benrosnerwilliamsburg.vercel.app/"}>
      <div className="project">
        <img src={Rancid} alt="A screenshot of an movie info application"/>
        <h1 className="project-text">Rancid Tomatillos</h1>
      </div>
      </a>
      <a href={"https://trivia-troll.vercel.app"}>
      <div className="project">
        <img src={Trivia} alt="A screenshot of an trivia game application"/>
        <h1 className="project-text">Trivia Troll</h1>
      </div>
      </a>
    </div>
  );
};

export default Projects;