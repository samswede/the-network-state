import { useState } from 'react';

function AccordionSection({ title, children }) {
  // State to manage whether the section is expanded or collapsed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={toggleSection}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default AccordionSection;
