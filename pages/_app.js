import "@code-hike/mdx/dist/index.css";
import "./app.css";
import "../styles/tokens.css";
import React, { useState, useEffect } from "react";
import WelcomeModal from "../components/WelcomeModal";

// Removed GuideProvider and useGuide imports

const AppContent = ({ Component, pageProps }) => {
  // State and handlers are now in MyAppWrapper, passed down or accessed globally
  const { showGuide, tooltipStep } = pageProps; // Assuming these are passed if needed directly by Component

  const headerItems = {
    left: ["UI Library", "Contribute"],
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
          <div className="header_item logo-container">
            <img
              src="/assets/amplify-logo.svg" // Corrected path if it was changed
              alt="Amplify Logo"
              className="logo"
            />
            <span>Amplify Docs</span>
          </div>
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
};

const MyAppWrapper = ({ Component, pageProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [tooltipStep, setTooltipStep] = useState(0); // 0: no tooltip, 1: first, 2: second

  useEffect(() => {
    const firstVisit = localStorage.getItem("hasVisitedDemo");
    if (!firstVisit) {
      setIsModalOpen(true);
    }

    // Expose handlers to window for ButtonLink to use
    window.globalHandleNextTooltip = () => {
      setTooltipStep((prev) => prev + 1);
    };
    window.globalHandleEndGuide = () => {
      setShowGuide(false);
      setTooltipStep(0);
    };

    return () => {
      delete window.globalHandleNextTooltip;
      delete window.globalHandleEndGuide;
    };
  }, []); // Empty dependency array ensures this runs once and cleans up

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("hasVisitedDemo", "true");
  };

  const handleStartGuide = () => {
    setIsModalOpen(false);
    setShowGuide(true);
    setTooltipStep(1); // Start with the first tooltip
    localStorage.setItem("hasVisitedDemo", "true");
  };

  // Pass down showGuide and tooltipStep to the page component
  const enhancedPageProps = {
    ...pageProps,
    showGuide,
    tooltipStep,
  };

  const showGuideBackdrop = showGuide && tooltipStep > 0;

  return (
    <>
      {showGuideBackdrop && (
        <div className="modal-backdrop guide-backdrop"></div>
      )}
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStartGuide={handleStartGuide}
      />
      <AppContent Component={Component} pageProps={enhancedPageProps} />
    </>
  );
};

export default MyAppWrapper;
