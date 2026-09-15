import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Tools() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '900px',
      p: 4,
      backgroundImage: `url('./tools.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      my: 8,
    }}>

      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '350px',
        justifyContent: 'flex-start', alignItems: 'flex-start',
      }}>
        <CustomChip title="Powerful tools" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold'  }}>
        Everything you need, <span style={{ color: theme.palette.primary.main }}>right at your fingertips</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Powerful tools, neatly organized. Drag a tool to add it to your pipeline and start editing.
        </Typography>
      </Box>

    </Box>
  )
}
