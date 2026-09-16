import { Box } from '@mui/material';
import { cloneElement, Fragment } from 'react';
import Footer from '../header/Footer';
import Header from '../header/Header';
import Flow from './components/Flow';
import Intro from './components/Intro';
import Languages from './components/Languages';
import ProductHunt from './components/ProductHunt';
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
    id: 'technology',
    component: <Technology />
  },
  {
    id: 'flow',
    component: <Flow />
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
    id: 'languages',
    component: <Languages />
  },
  // {
  //   id: 'demo',
  //   component: <Demo />
  // },
  {
    id: 'productHunt',
    component: <ProductHunt />
  },
]

export default function Landing() {

  return  <>

    <Box sx={{ width: '1280px', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Header />
      {sections.map((section, index) => (
        <Fragment key={section.id}>
          {cloneElement(section.component, { id: section.id, index: index })}
        </Fragment>
      ))}
      <Footer />
    </Box>
  </>
}
