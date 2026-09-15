import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Flow() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '650px',
      p: 4,
      backgroundImage: `url('./flow.png')`,
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
        width: '320px',
        justifyContent: 'flex-start', alignItems: 'flex-start',
      }}>
        <CustomChip title="Your (Work)Flow" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold'  }}>
        Create with <span style={{ color: theme.palette.primary.main }}>a flow</span> that suits your style
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Connect tools, build powerful pipelines and reuse them anytime. Whether it's for a small project or a large-scale production, your flow adapts to your needs.
        </Typography>
      </Box>

    </Box>
  )
}
