import { Card, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { PaintRoller } from 'lucide-react';
import Section from '../../Section';

export default function Themes() {

  const items = [
    {
      icon: <span style={{ fontSize: 32 }}>💗</span>,
      title: "Barbie",
      desc: "The cute one",
      image: 'barbie.png',
    },
    {
      icon: <span style={{ fontSize: 32 }}>🐈</span>,
      title: "Catppuccin",
      desc: "The fluffy one",
      image: 'catppuccin.png',
    },
    {
      icon: <span style={{ fontSize: 32 }}>🧛</span>,
      title: "Dracula",
      desc: "The spooky one",
      image: 'dracula.png',
    },
    {
      icon: <span style={{ fontSize: 32 }}>💛</span>,
      title: "Monokai",
      desc: "The classic one",
      image: 'monokai.png',
    },
    {
      icon: <span style={{ fontSize: 32 }}>🌑</span>,
      title: "Solarized",
      desc: "The bright one",
      image: 'solarized.png',
    },
    {
      icon: <span style={{ fontSize: 32 }}>🌆</span>,
      title: "Tokyo Night",
      desc: "The dark one",
      image: 'tokyo.png',
    }
  ]

  return (
    <>
      <Section icon={<PaintRoller />} id="themes" title="Pretty colors" description={<>Explore our classically inspired <em>themes</em></>}>



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
              <div style={{ position: 'absolute', top: 0, right: 10, bottom: 0, width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                  width: "100%",
                  filter: 'blur(0.5px)',
                  borderRadius: 8,
                  opacity: 0.75,
                  pointerEvents: "none",
                  zIndex: 0,
                  aspectRatio: "1 / 1",
                  backgroundImage: `url("./${item.image}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "200% 100%",
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
  )
}
