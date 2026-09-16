import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Technology() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '900px',
      p: 4,
      backgroundImage: `url('./tiles.png')`,
      backgroundSize: '1200px',
      backgroundPosition: '0px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}>
      <Box sx={{

        display: 'flex', flexDirection: 'column', gap: 2,
        width: '820px',
        justifyContent: 'center', alignItems: 'center',
      }}>
        <CustomChip title="Built with Modern Tech" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Built with <span style={{ color: theme.palette.primary.main }}>modern technology</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}`, textAlign: 'center' }}>
        Our platform leverages the WebWorkers for distributed processing, ensuring high performance and responsiveness even under heavy workloads. WebGPU and shaders are used for raw power. Every aspect of the technology stack is chosen to maximize efficiency and capability, including the fully asynchronous architecture and optimized rendering pipeline.

        </Typography>
      </Box>

    </Box>
  )
}
