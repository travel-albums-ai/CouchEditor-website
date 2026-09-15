import { Box, Button, Typography } from '@mui/material';
import { ExternalLink, Mouse } from 'lucide-react';
import Section from '../../Section';

export default function Hero() {

  return  <>
    <Section id="hero">

      <img src="heroAi.png" style={{ width: '100%', height: 'auto', filter: 'grayscale(50%)' }} />
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute', top: 0, right: 0 }}>
        <Typography color="textDisabled" variant="caption" sx={{ textAlign: 'right', width: '100%' }}>*AI Generated</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, position: 'relative', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <img src="logo_new_240.png" className="hero-logo" style={{ width: '100px' }} />
            <h2 className="section-title" style={{ padding: 0, margin: 0 }}>Your memories, <em>beautifully mapped.</em></h2>
          </Box>
          <Typography color="textDisabled" variant="subtitle1" sx={{ py: 5 }}>Travel Albums organizes your travel photos by place, time, and journey — overlaid on a living
          map of everywhere you've been.</Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              startIcon={<ExternalLink size={16} />} component="a" href="https://web-app-travel-albums.vercel.app/#/allPhotos"  target="_blank" variant="contained" color="primary" size="large">Get Started Free</Button>
            <Button startIcon={<Mouse size={16} />} component="a" href="#features" variant="outlined" color="primary">See features</Button>
          </Box>
        </Box>
      </Box>
    </Section>
  </>

}
