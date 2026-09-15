import { Box, Typography, useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';

export default function Results() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '500px',
      p: 4,
      backgroundImage: `url('./changes.png')`,
      backgroundSize: '1000px',
      backgroundPosition: '300px 0px',
      // position: 'relative',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>

      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '350px',
        justifyContent: 'flex-start', alignItems: 'flex-start',
      }}>
        <Chip label="See the difference" color="primary" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold'  }}>
        Small changes, <span style={{ color: theme.palette.primary.main }}>Stunning results.</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Adjust a setting and see the stunning results instantly. Every tool you use contributes to the final masterpiece. You are in control of every detail.
        </Typography>
      </Box>

    </Box>
  )
}
