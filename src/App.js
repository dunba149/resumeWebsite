import logo from './logo.svg';
import './App.css';
import profileImage from "./ProfilePicture.jpg"; 


function Titles() {
  return (
    <div className="titles"> 
      <p>
        current layout
      </p>
      <p>
        change up right here
      </p>
      <div>
        <p>
          change even furthur
        </p>

      </div>
        
    </div>
  );
}

function Introduction() {
  return (
    <div className="MyName">
      Trey Dunbar
    </div>
  )
}

function MyDescription() {
  return(
    
    <div className="myPicture">
      
      <div className= "myDescription">
        <img src={profileImage} alt="profile" className="profile" />
       I'm a Computer Science major at the University of Minnesota Duluth, pursuing a Math minor to deepen my analytical and quantitative skills. Alongside my CS coursework, I've completed Calculus I & II, Differential Equations, Linear Algebra, Statistics, and Intro to Statistical Computing, which sharpened my ability to reason through complex systems, analyze data, and apply mathematical models to real-world problems.

On the CS side, I've already completed Software Engineering and Automata & Formal Languages, Software Analysis & Design, Computer Architecture, and Discrete Structures. These experiences have given me a strong foundation in both the theory of computation and the practical skills of building reliable software systems. Upcoming coursework in Security and Operating Systems will further expand my expertise.

I've applied this knowledge in hands-on projects such as Game Board Nexus, a mobile app connecting board game enthusiasts, and a Tabletop Game Tracker web app with Firebase integration. I'm proficient in C++, Java, Python, and Dart/Flutter, with growing experience in HTML, CSS, and JavaScript, and I'm comfortable using Git/GitHub for version control. Tutoring computer science for two semesters has also strengthened my ability to explain complex concepts clearly, reinforcing both my technical depth and communication skills.

I'm seeking internship opportunities where I can contribute to real-world projects, learn from experienced developers, and grow as a software engineer. I bring curiosity, adaptability, and a strong work ethic to every challenge, with the added perspective of a solid math and statistics background that enhances my problem-solving and data-driven thinking.
      


      </div>
    </div>
  );
}


function App() {
  return (

    <div className="app-layout">
      <Titles />
    
      <div className="App">
        <Introduction/>
        <MyDescription/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          dum dum
        

        </header>
      </div>
    </div>
  );
}

export default App;
