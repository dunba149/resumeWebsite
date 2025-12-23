import './App.css';
import profileImage from "./ProfilePicture.jpg";


function Titles() {
  return (
    <div className="titles">
      <div>


        <button className='SidebarButton'
          onClick={() => {
            (
              document.getElementById("Intro").scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            )
          }}

        >
          <p>
            About Me
          </p>
        </button>
      </div>
      <div>
        <button className='SidebarButton'
          onClick={() => {
            (
              document.getElementById("workHistory").scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            )
          }}

        >
          <p>
            Work History
          </p>
        </button>
      </div>
      <div>
        <button className='SidebarButton'
          onClick={() => {
            (
              document.getElementById("Projects").scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            )
          }}

        >
          <p>
            Projects
          </p>
        </button>
      </div>
      <div>
        <button className='SidebarButton'
          onClick={() => {
            (
              document.getElementById("Skills").scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            )
          }}

        >
          <p>
            Skills
          </p>
        </button>
      </div>
      <div>
        <button className='SidebarButton'
          onClick={() => {
            (
              document.getElementById("Resume").scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            )
          }}

        >
          <p>
            My Resume
          </p>
        </button>
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
  return (

    <div className="myPicture">

      <div className="myDescription">

        <img src={profileImage} alt="profile" className="profile" />

        <div className="TheDescription">
          <ul> 
          <p>
            I'm a Computer Science major at the University of Minnesota Duluth, pursuing a Math minor to deepen my analytical and quantitative skills. Alongside my CS coursework, I've completed Calculus I & II, Differential Equations, Linear Algebra, Statistics, and Intro to Statistical Computing, which sharpened my ability to reason through complex systems, analyze data, and apply mathematical models to real-world problems.
          </p>
          <p>
            On the CS side, I've already completed Software Engineering and Automata & Formal Languages, Software Analysis & Design, Computer Architecture, and Discrete Structures. These experiences have given me a strong foundation in both the theory of computation and the practical skills of building reliable software systems. Upcoming coursework in Security and Operating Systems will further expand my expertise.
          </p>
          <p>
            I've applied this knowledge in hands-on projects such as Game Board Nexus, a mobile app connecting board game enthusiasts, and a Tabletop Game Tracker web app with Firebase integration. I'm proficient in C++, Java, Python, and Dart/Flutter, with growing experience in HTML, CSS, and JavaScript, and I'm comfortable using Git/GitHub for version control. Tutoring computer science for two semesters has also strengthened my ability to explain complex concepts clearly, reinforcing both my technical depth and communication skills.

          </p>
          <p>
            I'm seeking internship opportunities where I can contribute to real-world projects, learn from experienced developers, and grow as a software engineer. I bring curiosity, adaptability, and a strong work ethic to every challenge, with the added perspective of a solid math and statistics background that enhances my problem-solving and data-driven thinking.
          </p>
        </ul>
        </div>
      </div>
    </div>
  );
}

function WorkHistory(list) {
  return (

    <div className='Columns'>

      <div className='Section'>
        <p className='Header'>
          header
          <ul>
            <li>
              <p className='Description'>
                hello
              </p>
            </li>
            <li>
              <p className='Description'>
                hello
              </p>
            </li>
            <li>
              <p className='Description'>
                hello
              </p>
            </li>
            <li>
              <p className='Description'>
                hello
              </p>
            </li>

          </ul>
        </p>
      </div>
      <div className='Section'>
        <p className='Header'>
          hello
        </p>
      </div>
      <div className='Section'>
        <p className='Header'>
          hello
        </p>
      </div>
    </div>
  );
}



function Projects() {
  return (
    <div className='Columns'>
      <div className='Section'>


        <p>
          Project1
        </p>
      </div>
      <div className='Section'>
        <p>
          Project2
        </p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className='tag-list'>


      <div className='inner'>

        <div className='tag'>Java</div>
        <div className='tag'>C++</div>
        <div className='tag'>Python</div>
        <div className='tag'>Dart</div>
        <div className='tag'>Flutter</div>
        <div className='tag'>CSS</div>
        <div className='tag'>JS</div>
        <div className='tag'>HTML</div>
        <div className='tag'>Git</div>
        <div className='tag'>GitHub</div>
        <div className='tag'>Firebase</div>
        <div className='tag'>Automata theory</div>
        <div className='tag'>Formal Languages</div>
        <div className='tag'>Computational Models</div>
        <div className='tag'>Software Design</div>
        <div className='tag'>Strong Communication</div>
        <div className='tag'>Collaboration</div>
        <div className='tag'>Analytical Thinker</div>

      </div>
    </div>
  );
}


function App() {
  const job1 = ["HelloTitle", "helloWorld", "hello"]
  return (


    <div className="app-layout">
      <Titles />

      <div className="App">
        <Introduction />
        <section id='Intro'>
          <p className="AboutMe">
            About Me:
          </p>
          <MyDescription />
        </section>
        <section id='workHistory'>
          <p className='MainTitleOption'>
            Work History:
          </p>
          <WorkHistory />
        </section>
        <section id='Projects'>
          <p className='MainTitleOption'>
            Projects:
          </p>
          <Projects />
        </section>
        <section id='Skills'>
          <p className="MainTitleOption">
            Skills:
          </p>
          <Skills />
        </section>
        <section id='Resume'>
          <div className='borderOfButton'>
            <button className="ResumeButton"
              onClick={() => window.open("https://drive.google.com/file/d/1PGdTQ20wvCBvQlYjCU4523KnN6_rI9wk/view?usp=sharing", "_blank")


              }
            >
              See My Resume!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
