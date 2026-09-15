import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Technology() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '580px',
      p: 4,
      backgroundImage: `url('./technology.png')`,
      backgroundSize: '650px',
      backgroundPosition: '-0px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '350px',
        justifyContent: 'flex-end', alignItems: 'flex-end',
      }}>
        <CustomChip title="Built with Modern Tech" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
        Built with <span style={{ color: theme.palette.primary.main }}>modern technology</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}`, textAlign: 'right' }}>
        Our platform leverages the latest technologies to provide a seamless and efficient experience for all your creative needs.
        </Typography>
      </Box>

    </Box>
  )
}
