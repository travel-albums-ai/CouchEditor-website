import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Templates() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '600px',
      p: 4,
      backgroundImage: `url('./templates.png')`,
      backgroundSize: 'contain',
      backgroundPosition: '0px 200px',
      backgroundRepeat: 'no-repeat',
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '350px',
        justifyContent: 'flex-start', alignItems: 'flex-start',
      }}>
        <CustomChip title="Ready-to-use Templates" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold'  }}>
        Templates to <span style={{ color: theme.palette.primary.main }}>spark your creativity</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Kickstart your projects with our ready-to-use templates. Learn, remix or make them your own.
        </Typography>
      </Box>

    </Box>
  )
}
