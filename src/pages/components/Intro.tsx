import { Box, Button, Typography, useTheme } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import CustomChip from '../../generics/CustomChip';

export default function Intro() {
  const theme = useTheme();

  return (
    <Box sx={{
      height: '700px',
      p: 4,
      backgroundImage: `url('./intro.png')`,
      backgroundSize: '1050px',
      backgroundPosition: '240px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 4,
      mb: 8,
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '380px',
        justifyContent: 'flex-end', alignItems: 'flex-start',
      }}>
        <CustomChip title="Edit • Experiment • Create • Locally" />
        <Typography variant="h3" color="textPrimary" sx={{ fontWeight: 'bold' }}>
        Turn your photos into something <span style={{ color: theme.palette.primary.main }}>truly extraordinary</span>
        </Typography>
        <Typography>
        Couch Editor is a modern, node-based photo editor that runs locally in your browser. No uploads, No limits. Just creativity
        </Typography>
        <a href="https://couch-editor.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 10 }}>
          Open Couch Editor <ArrowRight />
          </Button>
        </a>

      </Box>

    </Box>
  )
}
