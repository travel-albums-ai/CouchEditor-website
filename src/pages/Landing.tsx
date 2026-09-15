import { Box } from '@mui/material';
import { cloneElement, Fragment } from 'react';
import Footer from '../header/Footer';
import Demo from './components/Demo';
import Flow from './components/Flow';
import Intro from './components/Intro';
import Results from './components/Results';
import StarterKit from './components/StarterKit';
import Technology from './components/Technology';
import Templates from './components/Templates';
import Tools from './components/Tools';

const sections = [
  {
    id: 'intro',
    component: <Intro />
  },
  {
    id: 'flow',
    component: <Flow />
  },
  {
    id: 'demo',
    component: <Demo />
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
    id: 'templates',
    component: <Templates />
  },
  {
    id: 'starterKit',
    component: <StarterKit />
  },
  {
    id: 'technology',
    component: <Technology />
  },
]

export default function Landing() {

  return  <>
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '1280px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {sections.map((section, index) => (
          <Fragment key={section.id}>
            {cloneElement(section.component, { id: section.id, index: index })}
          </Fragment>
        ))}
      </Box>
    </Box>

    <Footer />
  </>
}
