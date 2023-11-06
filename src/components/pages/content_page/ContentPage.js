import './ContentPage.css';
import NavBar from '../../layout/nav/NavBar';
import PageTitle from './PageTitle.js';
import PageSubtitle from './PageSubtitle.js';
import NextPageNavBar from '../../layout/footer/next_page_nav_bar/NextPageNavBar';
import PseudoCodeBlock from './PseudoCodeBlock';

const pseudocode_example = `
procedure QUICKSORT(A, p, r)
if p < r then
  q = PARTITION(A, p, r)
  QUICKSORT(A, p, q - 1)
  QUICKSORT(A, q + 1, r)
end if
end procedure

procedure PARTITION(A, p, r)
  x = A[r]
  i = p - 1
  for j = p to r - 1 do
    if A[j] < x then
      i = i + 1
      exchange A[i] with A[j]
    end if
  exchange A[i + 1] with A[r]
  end for
end procedure
`.trim();


function ContentPage() {
  return (
    <>
      <header>
            <NavBar websiteTitle={'Content Page Title'}/>
      </header>
      
      <main className="contentPage__main">

        <div className="chapterImage">
        </div>

        <PageTitle pageTitle="Chapter Title"/>

        <PageSubtitle pageSubtitle="Chapter Subtitle"/>
        <section className="content">
          <h2>Description</h2>
          <p>
            Technology has enabled us to start new companies, 
            new communities, and new currencies. 
            But can we use it to start new cities, or even new countries? 
            This <a href="">book</a> explains how to build the successor to the nation state, 
            a concept we call the network state.
          </p>
          <blockquote>
            A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition from pre-existing states.
          </blockquote>

          <PseudoCodeBlock katex={pseudocode_example} />
        
        </section >

      </main>


      <footer>
      <NextPageNavBar nextPageTitle="Home" pageButtonText="Back" routePath="/"/>
        
      </footer>
    </>
  );
}

export default ContentPage;

