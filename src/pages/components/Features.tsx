import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Folder, Form, Grid3X3, Lock, Map, Search, Timeline } from 'lucide-react';
import Section from '../../Section';

export default function Features({ id }: { id: string }) {

  const items = [
    {
      icon: <Map size={32} />,
      title: "Interactive Globe View",
      desc: "See all your travel photos pinned on a world map. Zoom into regions, clusters, and cities to explore your memories geographically.",
      bgSpriteStyle: {
        // backgroundPosition: "0% 0%",
        backgroundPosition: "50% 0%",
      }
    },
    {
      icon: <Grid3X3 size={32} />,
      title: "Smart Photo Grid",
      desc: "Browse thousands of photos in a fluid, fast grid. Sort, Search, by date, location, or folder. Instantly — no waiting",
      bgSpriteStyle: {
        // backgroundPosition: "50% 0%",
        backgroundPosition: "0% 100%",
      }
    },
    {
      icon: <Timeline size={32} />,
      title: "Trip Timelines",
      desc: "Every trip is automatically assembled into a chronological story. Relive your journey from departure to return, photo by photo.",
      bgSpriteStyle: {
        // backgroundPosition: "100% 0%",
        backgroundPosition: "50% 100%",
      }
    },
    {
      icon: <Folder size={32} />,
      title: "Folder Layers",
      desc: "Overlay any folder from your file system onto the map. Organize by year, by trip, or by person — you're in control of the structure.",
      bgSpriteStyle: {
        // backgroundPosition: "0% 100%",
        // backgroundPosition: "100% 100%",
        backgroundPosition: "0% 0%",
      }
    },
    {
      icon: <Search size={32} />,
      title: "Now & Then Compare",
      desc: "Side-by-side comparison mode for photos taken at the same spot across different years. Watch places change over time.",
      bgSpriteStyle: {
        // backgroundPosition: "50% 100%",
        backgroundPosition: "100% 100%",
      }
    },
    {
      icon: <Lock size={32} />,
      title: "100% Local & Private",
      desc: "Everything runs on your machine. No cloud sync, no account required, no photos leave your hard drive. Ever. Your memories stay yours.",
      bgSpriteStyle: {
        // backgroundPosition: "100% 100%",
        backgroundPosition: "100% 0%",
      }
    }
  ]

  return  <>
    <Section id={id}
      icon={<Form size={32} />}
      title="Features"
      description={<>Everything you need to<br /><em>relive your travels.</em></>}>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 2 }}>
        {items.map((item, index) => (
          <Card key={index} sx={{
            py: 3, color: 'primary.main',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            bgcolor: 'background.default',
            px: 3,
            pr: 4,
            position: "relative",
            display: "flex", flexDirection: "column", gap: 2,
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <div style={{
                width: "100%",
                opacity: 0.25,
                pointerEvents: "none",
                filter: "grayscale(50%)",
                zIndex: 0,
                aspectRatio: "1 / 1",
                backgroundImage: 'url("./spriteFeatures2.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "300% 200%",
                backgroundPosition: item.bgSpriteStyle?.backgroundPosition || "0% 100%",
                backgroundColor: "transparent"

              }} />
            </div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, mt: 4 }}>
              {item.icon}
              <Typography variant="h6" color="textPrimary" sx={{ zIndex: 1 }}>{item.title}</Typography>
            </Box>
            <Typography variant="caption" color="textDisabled" sx={{ zIndex: 1, mb: 2 }}>{item.desc}</Typography>

          </Card>
        ))}
      </Box>
    </Section>

  </>

}
