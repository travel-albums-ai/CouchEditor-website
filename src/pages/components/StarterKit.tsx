import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function StarterKit() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '900px',
      p: 4,
      backgroundImage: `url('./starterKit.png')`,
      backgroundSize: '800px',
      backgroundPosition: 'center 200px',
      backgroundRepeat: 'no-repeat',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '750px',
        justifyContent: 'flex-start', alignItems: 'flex-start',
      }}>
        <CustomChip title="Batteries included" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold'  }}>
        Start your journey with <span style={{ color: theme.palette.primary.main }}>our starter kit</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Discover the essential tools and resources to understand architectures, patterns, and best practices in your projects.
        </Typography>
      </Box>

    </Box>
  )
}
