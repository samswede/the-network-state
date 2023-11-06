import './MainContent.css';

function MainContent({children}) {
  return (
    <>

      <main className="contentPage__main">

        {children}

      </main>

    </>
  );
}

export default MainContent;
