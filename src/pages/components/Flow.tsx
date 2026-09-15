import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Flow() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '600px',
      p: 4,
      backgroundImage: `url('./flow.png')`,
      backgroundSize: '950px',
      backgroundPosition: '-30px -10px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}>

      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 2,
        width: '320px',
        justifyContent: 'flex-end', alignItems: 'flex-end',
      }}>
        <CustomChip title="Your (Work)Flow" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
        Create with <span style={{ color: theme.palette.primary.main }}>a flow</span> that suits your style
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textAlign: 'right', textShadow: `0px 0px 8px ${theme.palette.background.paper}` }}>
        Connect tools, build powerful pipelines and reuse them anytime. Whether it's for a small project or a large-scale production, your flow adapts to your needs.
        </Typography>
      </Box>

    </Box>
  )
}
