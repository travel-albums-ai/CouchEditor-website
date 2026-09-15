import { Box, Button, Typography, useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import { ArrowRight } from 'lucide-react';

export default function Intro() {
  const theme = useTheme();


  return (
    <Box sx={{
      height: '700px',
      p: 4,
      backgroundImage: `url('./intro.png')`,
      backgroundSize: '1800px',
      backgroundPosition: '-300px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 4,
      mb: 4,
    }}>
      <Chip label={"Edit • Experiment • Create • Locally"} color="primary" sx={{ px: 1 }} />
      <Typography variant="h3" color="textPrimary" sx={{ fontWeight: 'bold', width: '400px' }}>
        Turn your photos into something <span style={{ color: theme.palette.primary.main }}>truly extraordinary</span>
      </Typography>
      <Typography sx={{ width: '400px' }}>
        Couch Editor is a modern, node-based photo editor that runs locally in your browser. No uploads, No limits. Just creativity
      </Typography>
      <Button variant="contained" color="primary">
          Open Couch Editor <ArrowRight />
      </Button>

      <Box>
          1, 2, 3
      </Box>

    </Box>
  )
}
