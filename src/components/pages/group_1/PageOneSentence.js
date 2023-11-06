import './PageOneSentence.css';

import BasePage from '../../base/base_page/BasePage';
import MainContent from '../../base/base_page/MainContent.js';

import PageTitle from '../content_page/PageTitle';
import PageSubtitle from '../content_page/PageSubtitle.js';
import ContentImage from '../content_page/ContentImage.js';


function PageOneSentence() {
  return (
    <>
      <BasePage 
        textNavBar="The Network State"
        nextPageTitle="One Image"
        nextPageRoutePath="/group_1/one_image">
            
          <MainContent >
            
            <section className="content">
              <h2>Concept in One Sentence</h2>
                <p>
                In one informal sentence:
                </p>
                <blockquote>
                A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition from pre-existing states.
                </blockquote>
                <p>
                When we think of a nation state, we immediately think of the lands, but when we think of a network state, we should instantly think of the minds. That is, if the nation state system starts with the map of the globe and assigns each patch of land to a single state, the network state system starts with the 7+ billion humans of the world and attracts each mind to one or more networks.
                </p>
                <p>
                Here’s a more complex definition that extends that concept and pre-emptively covers many edge cases:
                </p>
                <blockquote>
                A network state is a social network with a moral innovation, a sense of national consciousness, a recognized founder, a capacity for collective action, an in-person level of civility, an integrated cryptocurrency, a consensual government limited by a social smart contract, an archipelago of crowdfunded physical territories, a virtual capital, and an on-chain census that proves a large enough population, income, and real-estate footprint to attain a measure of diplomatic recognition.
                </blockquote>
                <p>
                OK, that’s a mouthful! It’s lengthy because there are many internet phenomena that share some but not all of the properties of a network state. For example, neither Bitcoin nor Facebook nor a DAO is a network state, because each lacks certain qualities – like diplomatic recognition – which are core to anything we’d think of as the next version of the nation state.
                </p>

            
            </section >

          </MainContent>
      </BasePage>
      
    </>
  );
}

export default PageOneSentence;