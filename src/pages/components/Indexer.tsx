import Box from '@mui/material/Box';
import { CircleGauge, Folder, Globe, Grid2X2 } from 'lucide-react';
import Mockup from '../../Mockup';
import Section from '../../Section';
import FeatureCard from '../../generics/FeatureCard';



export default function Indexer() {

  return  <>

    <Section id="how" title="How it works" description={<>From folder<br />to <em>world map</em> in a snap.</>}>


      <Mockup image="indexer.png" title="Indexer in action" brand={false} />

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 4, mt: 8, justifyContent: 'center', alignItems: 'start'
      }}>
        <FeatureCard item={{
          icon: <Folder size={24} />,
          title: "Pick a folder",
          desc: "Indexer will scan the folder and its subfolders for photos. It looks for geotags, timestamps, and camera data to plot your memories on the map."
        }} />
        <FeatureCard item={{
          icon: <Globe size={24} />,
          title: "Interface auto updates",
          desc: "As Indexer processes your photos, the interface updates in real-time, showing progress and newly indexed photos on the map."
        }} />
        <FeatureCard item={{
          icon: <Grid2X2 size={24} />,
          title: "Organize into trips & layers",
          desc: "Travel Layers automatically groups nearby photos by date into trips. Add custom layers, labels, and notes to build a personal travel atlas that grows with every journey."
        }} />
        <FeatureCard item={{
          icon: <CircleGauge size={24} />,
          title: "Backpressure for large libraries",
          desc: "Indexer uses backpressure to efficiently handle large photo libraries, ensuring smooth performance and preventing system overload and cache overflow."
        }} />

      </Box>



    </Section>

  </>

}
