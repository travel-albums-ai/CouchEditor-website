import { Box, Typography, useTheme } from '@mui/material';
import CustomChip from '../../generics/CustomChip';

export default function Languages() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '520px',
      p: 4,
      backgroundImage: `url('./settingsLanguages.png')`,
      backgroundSize: '700px',
      backgroundPosition: '0px 0px',
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
        <CustomChip title="Your Language & Style" />
        <Typography variant="h4" color="textPrimary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
        Customize your <span style={{ color: theme.palette.primary.main }}>language & style</span>
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: '14px', textShadow: `0px 0px 8px ${theme.palette.background.paper}`, textAlign: 'right' }}>
        Tailor the platform to match your preferred language and colors, including performance and interface elements, ensuring a personalized and consistent experience.
        </Typography>
      </Box>

    </Box>
  )
}
