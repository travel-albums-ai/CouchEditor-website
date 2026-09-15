import { Box, Typography } from '@mui/material';
import { cloneElement, Fragment } from 'react';
import BatchProcessing from './components/BatchProcessing';
import Features from './components/Features';
import IndexerStats from './components/IndexerStats';
import Intro from './components/Intro';
import Languages from './components/Languages';
import MapSteps from './components/MapSteps';
import MCPEverywhere from './components/MCPEverywhere';
import Settings from './components/Settings';
import TechBar from './components/TechBar';
import Themes from './components/Themes';
import Tools from './components/Tools';


const sections = [
  {
    id: 'intro',
    component: <Intro />
  },
  {
    id: 'statsBar',
    component: <Tools />
  },
  {
    id: 'features',
    component: <Features />
  },

  {
    id: 'steps',
    component: <MapSteps />
  },
  {
    id: 'batchProcessing',
    component: <BatchProcessing />
  },
  {
    id: 'languages',
    component: <Languages />
  },
  {
    id: 'themes',
    component: <Themes />
  },
  {
    id: 'techBar',
    component: <TechBar />
  },
  {
    id: 'mcpeverywhere',
    component: <MCPEverywhere />
  },
  {
    id: 'settings',
    component: <Settings />
  },
  // {
  //   id: 'indexer',
  //   component: <Indexer />
  // },
  {
    id: 'indexerStats',
    component: <IndexerStats />
  }
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
