import './ContentPage.css';

import BasePage from '../../base/base_page/BasePage.js';
import MainContent from '../../base/base_page/MainContent.js';

import NavBar from '../../layout/nav/NavBar.js';
import PageTitle from './PageTitle.js';
import PageSubtitle from './PageSubtitle.js';
import NextPageNavBar from '../../layout/footer/next_page_nav_bar/NextPageNavBar.js';

import ContentImage from './ContentImage.js';
import EquationBlock from './EquationBlock.js';

/* this equation shows matrix multiplication */
const equation_example_1 = `
\\begin{bmatrix}
    a_{11} & a_{12} & \\cdots & a_{1n} \\\\
    a_{21} & a_{22} & \\cdots & a_{2n} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{bmatrix}

\\begin{bmatrix}
    b_{11} & b_{12} & \\cdots & b_{1p} \\\\
    b_{21} & b_{22} & \\cdots & b_{2p} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    b_{n1} & b_{n2} & \\cdots & b_{np}
\\end{bmatrix}
`;

const equation_example_2 = `
f(x) =
\\begin{cases}
    x^2 & \\text{if } x \\geq 0 \\\\
    -x & \\text{if } x < 0
\\end{cases}
`;


function ContentPage() {
  return (
    <>
      <BasePage >
          <MainContent>
            
            <ContentImage 
              imageID="quickstart"
              imageRatio={16/9} />
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

              <EquationBlock 
                equationName="Equation" 
                katexExpression={equation_example_2} />
            
            </section >

          </MainContent>
      </BasePage>
      
    </>
  );
}

export default ContentPage;

