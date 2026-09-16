import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Technology() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '500px',
      p: 4,
      backgroundImage: `url('./tiles.png')`,
      backgroundSize: '900px',
      backgroundPosition: '0px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '320px',
        justifyContent: 'flex-end', alignItems: 'flex-end',
      }}>
        <CustomChip title="Built with Modern Tech" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
        Built with <span style={{ color: theme.palette.primary.main }}>modern technology</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}`, textAlign: 'right' }}>
        Our platform leverages the WebWorkers for distributed processing, ensuring high performance and responsiveness even under heavy workloads. WebGPU and shaders are used for raw power. Every aspect of the technology stack is chosen to maximize efficiency and capability, including the fully asynchronous architecture and optimized rendering pipeline.

        </Typography>
      </Box>

    </Box>
  )
}
