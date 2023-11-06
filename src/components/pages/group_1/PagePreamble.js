import './PagePreamble.css';

import BasePage from '../../base/base_page/BasePage';
import MainContent from '../../base/base_page/MainContent.js';

import PageTitle from '../content_page/PageTitle';
import PageSubtitle from '../content_page/PageSubtitle.js';
import ContentImage from '../content_page/ContentImage.js';


function PagePreamble() {
  return (
    <>
      <BasePage textNavBar="The Network State"
    nextPageTitle="One Sentence"
    nextPageRoutePath="/group_1/one_sentence">
          <MainContent >
            
            <ContentImage 
              imageID="quickstart"
              imageRatio={16/8} />
            <PageTitle pageTitle="Quickstart"/>

            <PageSubtitle pageSubtitle="Chapter 1"/>
            <section className="content">
              <h2>Preamble</h2>
                <p>
                Are you the kind of person who skims the beginning just to see whether to read the entire thing? You’re in luck.
                </p>
                <p>
                We’ve prepared <a href="">one sentence</a>, <a href="">one image</a>, <a href="">one thousand word</a>, and <a href="">one essay</a> summaries of the concepts behind startup societies and network states. Just click those links if you’re impatient. And of course, for the full experience, you can read it one page at a time.
                </p>
                <p>
                Speaking of pages, every section of this book is online and shareable as an individual web page. For example, the URL to this section is thenetworkstate.com/preamble. This allows you to link directly1 to any bit of the book for discussion. Moreover, unlike the typical book that’s frozen in time, think of this as a dynamic bookapp that gets continuously updated. You can see the latest version online, or you can follow the instructions at thenetworkstate.com/kindle.gif to get the latest version on your Kindle.
                </p>
                
            
            </section >

          </MainContent>
      </BasePage>
      
    </>
  );
}

export default PagePreamble;

