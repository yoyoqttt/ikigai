const { BrowserRouter, Route, Link } = ReactRouterDOM;

const Home = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    <p>This is the home content. Feel free to explore!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>We are a fantastic team doing amazing things!</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Feel free to reach out to us for any inquiries.</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <hr />

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));