import { Box, Typography } from '@mui/material';
import { cloneElement, Fragment } from 'react';
import Flow from './components/Flow';
import Intro from './components/Intro';
import Results from './components/Results';
import Tools from './components/Tools';


const sections = [
  {
    id: 'intro',
    component: <Intro />
  },
  {
    id: 'results',
    component: <Results />
  },
  {
    id: 'tools',
    component: <Tools />
  },
  {
    id: 'flow',
    component: <Flow />
  },


  // {
  //   id: 'steps',
  //   component: <MapSteps />
  // },
  // {
  //   id: 'batchProcessing',
  //   component: <BatchProcessing />
  // },
  // {
  //   id: 'languages',
  //   component: <Languages />
  // },
  // {
  //   id: 'themes',
  //   component: <Themes />
  // },
  // {
  //   id: 'techBar',
  //   component: <TechBar />
  // },
  // {
  //   id: 'mcpeverywhere',
  //   component: <MCPEverywhere />
  // },
  // {
  //   id: 'settings',
  //   component: <Settings />
  // },
  // {
  //   id: 'indexer',
  //   component: <Indexer />
  // },
  // {
  //   id: 'indexerStats',
  //   component: <IndexerStats />
  // }
]

export default function Landing() {

  return  <>
    {/* <Hero /> */}
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '1280px' }}>
        {sections.map((section, index) => (
          <Fragment key={section.id}>
            {cloneElement(section.component, { id: section.id, index: index })}
          </Fragment>
        ))}
      </Box>
    </Box>

    <footer>
      <div class="container">
        <div class="footer-inner">
          <a class="footer-logo" href="#">
            <img src="logo_new_240.png" className="hero-logo" style={{ height: 24 }} />
            <Typography>Travel Albums</Typography>
          </a>
          <span class="footer-copy">© 2026 Travel Layers. All rights reserved.</span>
          <ul class="footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Release notes</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </>

}
