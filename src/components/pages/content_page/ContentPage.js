import './ContentPage.css';
import NavBar from '../../layout/nav/NavBar';
import ChapterTitle from './ChapterTitle';
import ChapterSubtitle from './ChapterSubtitle';


function ContentPage() {
  return (
    <>
      <header>
            <NavBar websiteTitle={'Content Page Title'}/>
      </header>
      
      <main id="contentPage-main">

        <div className="chapterImage">
        </div>

        <ChapterTitle chapterTitle="Chapter Title"/>
        
        <ChapterSubtitle chapterSubtitle="Chapter Subtitle"/>
        <section className="content">
          <h2>Description</h2>
          <p>Technology has enabled us to start new companies, 
            new communities, and new currencies. 
            But can we use it to start new cities, or even new countries? 
            This book explains how to build the successor to the nation state, 
            a concept we call the network state.</p>
        </section >

        <section id="content-section">


        </section>
      </main>


      <footer>
      </footer>
    </>
  );
}

export default ContentPage;