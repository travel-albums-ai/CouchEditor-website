import { alpha, useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';

export default function CustomChip({ title }: { title: string }) {

  const theme = useTheme();

  return (
    <Chip label={title} color="primary" sx={{
      fontWeight: 'bold',
      textTransform: 'uppercase',
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
      letterSpacing: '1px',
      color: theme.palette.primary.main
    }} />
  )
}
