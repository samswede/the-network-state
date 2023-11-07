
import './HomePage.css';
import NavBar from '../../layout/nav/NavBar';
import ActionArea from './action_area/ActionArea';
import ContentBox from './content_box/ContentBox';
import ContentBoxItem from './content_box/ContentBoxItem';

import SideBar from '../../layout/side_bar/SideBar.js';
import SideBarItemSmall from '../../layout/side_bar/SideBarItemSmall';

import { useState } from 'react';
import MenuContext from './menu_context/MenuContext';


function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <header id="home-nav-bar">
          <MenuContext.Provider value={[menuIsVisible, setMenuIsVisible]}>
            <NavBar websiteTitle={''}/>
          </MenuContext.Provider>
      </header>
      
          <MenuContext.Provider value={[menuIsVisible, setMenuIsVisible]}>
            <SideBar>
                <SideBarItemSmall iconID="arrow-down-right-circle" text="Preamble" routePath="/group_1/preamble"/>
                <SideBarItemSmall iconID="arrow-down-right-circle" text="In one sentence" routePath="/group_1/one_sentence"/>
                <SideBarItemSmall iconID="arrow-down-right-circle" text="In one image" routePath="/group_1/one_image"/>
                <SideBarItemSmall iconID="arrow-down-right-circle" text="In one thousand words" routePath="/group_1/one_thousand"/>
                <SideBarItemSmall iconID="arrow-down-right-circle" text="In one essay" routePath="/group_1/one_essay"/>

            </SideBar>
          </MenuContext.Provider>

      <main id="home-main">

        <div id="responsive-1">
          <section id="action-section">
            <img id="main-concept-image" alt=''>
            </img>
            <ActionArea />
          </section>
        </div>

        <div id="responsive-2">
            <section id="description">
              <h2>Description</h2>
              <p>Technology has enabled us to start new companies, 
                new communities, and new currencies. 
                But can we use it to start new cities, or even new countries? 
                This book explains how to build the successor to the nation state, 
                a concept we call the network state.</p>
            </section >

            <section id="content-section-1">
              <ContentBox contentHeader="1. Quickstart">
              <ContentBoxItem 
                  iconID="arrow-down-right-circle" 
                  text="Preamble"
                  routePath="/group_1/preamble"/>
                <ContentBoxItem 
                  iconID="arrow-down-right-circle" 
                  text="In one sentence"
                  routePath="/group_1/one_sentence"/>
                <ContentBoxItem 
                  iconID="arrow-down-right-circle" 
                  text="In one image"
                  routePath="/group_1/one_image"/>
                <ContentBoxItem 
                  iconID="arrow-down-right-circle" 
                  text="In one thousand words"
                  routePath="/group_1/one_thousand"/>
                <ContentBoxItem 
                  iconID="arrow-down-right-circle" 
                  text="In one essay"
                  routePath="/group_1/one_essay"/>
              </ContentBox>
            </section>

            <section id="content-section-2">
              <ContentBox contentHeader="2. History as Trajectory">
                <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="Prologue"
                    routePath="/group_1/preamble"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="Microhistory and Macrohistory"
                    routePath="/group_1/one_sentence"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="Political Power and Technological Truth"
                    routePath="/group_1/one_image"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one thousand words"
                    routePath="/group_1/one_thousand"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one essay"
                    routePath="/group_1/one_essay"/>
                </ContentBox>

            </section>

            <section id="content-section-3">
              <ContentBox contentHeader="3. The Tripolar Moment">
                <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="Preamble"
                    routePath="/group_1/preamble"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one sentence"
                    routePath="/group_1/one_sentence"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one image"
                    routePath="/group_1/one_image"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one thousand words"
                    routePath="/group_1/one_thousand"/>
                  <ContentBoxItem 
                    iconID="arrow-down-right-circle" 
                    text="In one essay"
                    routePath="/group_1/one_essay"/>
                </ContentBox>

            </section>
        </div>
      </main>


      <footer>
      </footer>
    </>
  );
}

export default HomePage;