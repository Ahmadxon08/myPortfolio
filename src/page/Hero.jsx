/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const myPhoto = "./assets/img/myPhoto.jpg";
const js = "./assets/img/js.svg";
const react = "./assets/img/icon-react.svg";
const next = "./assets/img/icon-nextjs.svg";
const sass = "./assets/img/icon-sass.svg";
const wind = "./assets/img/icon-tailwindcss.svg";
const git = "./assets/img/icon-git.svg";
const ts = "./assets/img/ts.svg";
const figma = "./assets/img/icon-figma.svg";
const spoty = "./assets/img/spoty.png";
const crypto = "./assets/img/crypto.png";
const shop = "./assets/img/shop.png";
const me = "./assets/img/mm.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Hero.scss";
const Hero = ({ isDark }) => {
  return (
    <>
      <div className="container" id="home">
        <div className="content">
          <div className="left">
            <h1>Hi, I’m Ahmadxon 👋</h1>
            <span>
              I'm a front end developer (React.js ) with a focus on creating
              (and occasionally designing) exceptional digital experiences that
              are fast, accessible, visually appealing, and responsive. Even
              though I have been creating web applications for over a year, I
              still love it as if it was something new.
            </span>
          </div>
          <div className="right">
            <img
              src={myPhoto}
              alt="this is my own photo for portfolio"
              style={{
                transition: ".1s",
                borderRight: `10px solid ${isDark ? "#203f64" : "white"}`,
                borderBottom: `10px solid ${isDark ? "#203f64" : "white"}`,
              }}
            />
          </div>
        </div>
      </div>
      <section className="About" id="about">
        <div className="container">
          <div className="about_head">
            <span>About me</span>
          </div>
          <div className="about_content">
            <div className="about_left">
              <img src={me} alt="this is my photo" />
            </div>
            <div className="about_right">
              <h1>Curious about me? Here you have it:</h1>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                front end development (React.js ). I am very enthusiastic about
                bringing the technical and visual aspects of digital products to
                life. User experience, pixel perfect design, and writing clear,
                readable, highly performant code matters to me.
              </p>
              <p>
                I began my journey as a web developer in 2023, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, a years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="skill" id="skill">
        <div className="container">
          <div className="skill_head">
            <span>Skills</span>
          </div>
          <div className="skill_content">
            <div className="div">
              <div className="icon">
                <img src={js} alt="this is icon" />
                <span>Javascript</span>
              </div>
              <div className="icon">
                <img src={react} alt="this is icon" />
                <span>React</span>
              </div>
              <div className="icon">
                <img src={next} alt="this is icon" />
                <span>Next.js</span>
              </div>
              <div className="icon">
                <img src={sass} alt="this is icon" />
                <span>Sass/Scss</span>
              </div>
            </div>
            <div className="div1">
              <div className="icon">
                <img src={wind} alt="this is icon" />
                <span>Javascript</span>
              </div>
              <div className="icon">
                <img src={git} alt="this is icon" />
                <span>Git</span>
              </div>
              <div className="icon">
                <img src={ts} alt="this is icon" />
                <span>Typescript</span>
              </div>
              <div className="icon">
                <img src={figma} alt="this is icon" />
                <span>Figma</span>
              </div>
            </div>
            <div className="div"></div>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <div className="container">
          <div className="work_head">
            <span>Work</span>
            <p>Some of the noteworthy projects I have built!</p>
          </div>
          <div className="work_content">
            <div className="work_body">
              <img src={spoty} alt="this is spotify website" />
              <div className="texts">
                <p>
                  Spotify is a digital music, podcast, and video service that
                  gives you access to millions of songs and other content from
                  creators all over the world.
                </p>
                <a href="https://test123-flame.vercel.app/" target="blank">
                  View project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="work_body">
              <img src={crypto} alt="this is spotify website" />
              <div className="texts">
                <p>
                  A cryptocurrency is a digital currency, which is an
                  alternative form of payment created using encryption
                  algorithms.
                </p>
                <a href="https://exam-8-tau.vercel.app/" target="blank">
                  View project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="work_body">
              <img src={shop} alt="this is spotify website" />
              <div className="texts">
                <p>
                  The store has an escalator which allows people to take their
                  shopping carts with them. a part of a shopping website that
                  keeps a record of what you want to buy until you pay for it:
                  There are 3 items in your shopping cart.
                </p>
                <a href="https://shopping-01.vercel.app/" target="blank">
                  View project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
{
  /* */
}
