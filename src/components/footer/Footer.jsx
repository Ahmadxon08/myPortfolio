/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_content">
          <button className="get">Get in touch</button>
          <p>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="media">
            <h1>ahmadxonmoydinov@gmail.com</h1>
            <h1>+998911525859</h1>
          </div>
          <div className="media2">
            <h1>You may also find me on these platforms!</h1>
          </div>
        </div>
      </div>
      <div className="footer_b">
        <span>2023 | Designed and coded with ❤️️ by Sagar Shah</span>
      </div>
    </footer>
  );
};

export default Footer;
