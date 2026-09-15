import { Box } from '@mui/material';
import { Filter, Key, ToggleLeft } from 'lucide-react';
import CenterDynamic from '../../generics/CenterDynamic';
import FeatureCard from '../../generics/FeatureCard';
import Section from '../../Section';

export default function Settings() {

  const items = [
    {
      id: 'feelAndLook',
      dom: <FeatureCard item={{
        icon: <ToggleLeft size={24} />,
        title: "Feel & Look",
        desc: "Configure the colors, spacing, level of detail, your language and many more. Configure it all to suit your preferences."
      }} />,
      image: "settings1.png",
      reversed: false,
    },
    {
      id: 'filters',
      dom: <FeatureCard item={{
        icon: <Filter size={24} />,
        title: "Filters",
        desc: "Intersect various filters to find that one photo you’re looking for. Filter by date, location, albums, views, and more."
      }} />,
      image: "settings2.png",
      reversed: true,
    },
    {
      id: 'byok',
      dom: <FeatureCard item={{
        icon: <Key size={24} />,
        title: "BYOK",
        desc: "Bring your own key to enhance security and control over your data. Use OpenAIs API to ask questions about your gallery"
      }} />,
      image: "settings3.png",
      reversed: false,
    },
    {
      id: 'webmcp',
      dom: <FeatureCard item={{
        icon: <Key size={24} />,
        title: "WebMCP",
        desc: "Enable WebMCP to allow your browser-based Copilot to interact with your Trip Gallery instance securely."
      }} />,
      image: "settings4.png",
      reversed: true,
    },
    {
      id: 'indexer',
      dom: <FeatureCard item={{
        icon: <Filter size={24} />,
        title: "Indexer",
        desc: "The indexer scans and organizes your photos for faster search and retrieval, making it easier to manage large collections."
      }} />,
      image: "settings5.png",
      reversed: false,
    }
  ]

  return  <>
    <Section id="settings" title="Settings" description={<>Configure everything <br /><em>for your comfort.</em></>}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8, overflow: 'auto' }}>
        {items.map(item => (
          <Box key={item.id} sx={{ mb: 16 }}>
            <CenterDynamic image={item.image} reversed={item.reversed} width={800}>
              {item.dom}
            </CenterDynamic>
          </Box>
        ))}
      </Box>
    </Section>
  </>
}
