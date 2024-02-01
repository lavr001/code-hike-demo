import "@code-hike/mdx/dist/index.css";
import "./app.css";

function MyApp({ Component, pageProps }) {
  const headerItems = {
    left: ["Amplify Dev Center", "Docs", "Learn", "UI Library", "Contribute"],
    right: ["About AWS Amplify", "Pricing"],
  };
  const modulesNames = [
    "Getting Started",
    "Prerequisites",
    "Set up fullstack",
    "Connect API and database",
    "Add authentication",
    "Deploy and host app",
    "Next steps",
  ];

  const quickLinks = [
    "Set up fullstack project",
    "Create a new React app",
    "Initialize a new backend",
    "Install Amplify Libraries",
    "Set up frontend",
  ];

  return (
    <>
      <header>
        <div className="left">
          {headerItems.left.map((item) => {
            return (
              <div className="header_item" key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="right">
          {headerItems.right.map((item) => {
            return (
              <div className="header_item" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </header>
      <navbar className="modules">
        {modulesNames.map((name) => {
          return (
            <div className="side_item" key={name}>
              {name}
            </div>
          );
        })}
      </navbar>
      <div className="codehike">
        <a href="/">Home</a>
        <Component {...pageProps} />
      </div>
      <navbar className="quicklinks">
        {quickLinks.map((link) => {
          return (
            <div className="side_item" key={link}>
              {link}
            </div>
          );
        })}
      </navbar>
    </>
  );
}

export default MyApp;
