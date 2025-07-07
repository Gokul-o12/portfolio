
import './Projects.css';

// import stockImg from '../../assets/images/Stock image_1.png';
// import nextGenImg from '../../assets/images/NextGen image.png';
// import teaLeafImg from '../../assets/images/project_NM.jpg';

import papexImg from '../../assets/images/papex.png';
import atom2Img from '../../assets/images/atom2.png';

export default function Projects() {
  const projects = [
    {
  title: "Papex – AI-Powered Document Intelligence Platform",
  description: `Designed and developed a platform that extracts structured data from documents using OCR and AI. Built a dynamic prompt system to convert raw text into JSON format. Delivered a complete solution with interactive dashboards and rule-based status tracking.`,
  techStack: [
    "Spring Boot",
    "React",
    "PostgreSQL",
    
    
  ],
  // company: "Sholas Technologies",
  image: papexImg,
  repo: "https://github.com/Gokul-o12/Stock-Price-Prediction-using-Machine-Learning-"
},

    {
  title: "ATOM2 – Business Website",
  description: `Developed a responsive multi-page business website with smooth navigation, scroll-based animations, and interactive UI components, optimized for performance and cross-device compatibility.`,
  techStack: [
    "Bootstrap",
    "JavaScript",
    "HTML/CSS",
    
    
  ],
  // company: "Sholas Technologies",
  image: atom2Img,
  repo: "https://github.com/Gokul-o12/Stock-Price-Prediction-using-Machine-Learning-"
},
//     {
//       title: "STOCK PRICE PREDICTION USING MACHINE LEARNING",
//       description: `Stock market prediction is the act of trying to determine the future value of a company stock or other financial instrument traded on an exchange.
// The successful prediction of a stock's future price could yield significant profit.

// Tech Stack: HTML, CSS, JavaScript, Python Flask & MySQL`,
//       image: stockImg,
//       repo: "https://github.com/Gokul-o12/Stock-Price-Prediction-using-Machine-Learning-"
//     },
//     {
//       title: "NEXTGEN E-COMMERCE REVOLUTION",
//       description: `Web application empowers farmers by allowing them to set their own prices and sell directly to consumers, bypassing intermediaries. Despite challenges like logistics, the platform addresses
// them to enable efficient direct-to-consumer sales, there by improving farmers' profitability and livelihood.

// Tech Stack: HTML, CSS, JavaScript & Python Flask`,
//       image: nextGenImg,
//       repo: "https://github.com/Gokul-o12/Next-Gen-E-Commerce-Revolution"
//     },
//     {
//       title: "DISEASES IN TEA LEAVES",
//       description: `Developed a tea leaf disease detection model using TensorFlow/Keras with 97.3% accuracy. 
// Implemented the model using Flask for practical use. 
// Enables early detection of diseases in tea leaves for effective monitoring.

// Tech Stack: HTML, CSS, JavaScript & Python Flask`,
//       image: teaLeafImg,
//       repo: "https://github.com/users/Gokul-o12/projects/1"
//     },




//     {
//       title: "DISEASES IN TEA LEAVES",
//       description: `Developed a tea leaf disease detection model using TensorFlow/Keras with 97.3% accuracy. 
// Implemented the model using Flask for practical use. 
// Enables early detection of diseases in tea leaves for effective monitoring.

// Tech Stack: HTML, CSS, JavaScript & Python Flask`,
//       image: teaLeafImg,
//       repo: "https://github.com/users/Gokul-o12/projects/1"
//     }
  ];

  return (
    <section id="projects" className="project">
  <h2 className="heading" data-aos="fade-up"><span>Projects</span></h2>

  <div className="portfolio-container">
    {projects.map((proj, index) => (
      <div
        className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 100} // Stagger animation
      >
        <img src={proj.image} alt={proj.title} />
        <div>
          <h4><span>{proj.title}</span></h4>
          <p>{proj.description}</p>

          {proj.company && (
            <p><strong>Company:</strong> {proj.company}</p>
          )}

          {proj.techStack && (
            <p className='forbot'><strong>Tech Stack:</strong> {proj.techStack.join(', ')}</p>
          )}

          {/* <div className="btn-group newb">
            <a href={proj.repo} target="_blank" rel="noopener noreferrer">
              <div className="btn">GitHub Repo</div>
            </a>
          </div> */}
        </div>
      </div>
    ))}
  </div>
</section>

  );
}












