import { alpha, Box, Chip, Divider, Typography } from '@mui/material';
import Logo from './Logo';



export default function Footer() {

  return  <>

    <Box sx={{ display: "flex", gap: 2, alignItems: "stretch", justifyContent: "space-between", flexWrap: 'wrap', flex: 1, flexDirection: 'column' }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap', flex: 1, mb: 4 }}>

        <Box>
          <Logo />
        </Box>
        <Box>
          <Typography color="textPrimary" variant="subtitle2">Product</Typography>
        </Box>
        <Box>
          <Typography color="textPrimary" variant="subtitle2">Resources</Typography>
        </Box>
        <Box>
          <Typography color="textPrimary" variant="subtitle2">Community</Typography>
        </Box>
        <Box>
          <Chip
            label={<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="caption" >Made for creators</Typography>
              <Typography color="textSecondary" variant="caption">By a creator</Typography>
            </Box>}
            icon={<span style={{ fontSize: '1.5rem' }}>❤️</span>}
            sx={{
              bgcolor: theme => alpha(theme.palette.primary.main, 0.2),
              color: 'white',
              p: 3.5,
              boxShadow: theme => `0 4px 6px ${alpha(theme.palette.primary.main, 0.1)}`,
              px: 1,
              borderRadius: 10,
            }}
            size="medium"
          />
        </Box>

      </Box>

      <Divider />

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', py: 2, width: '1280px', mx: 'auto', mb: 2 }}>
        <Typography color="textSecondary" variant="caption">© 2026 Couch Editor</Typography>
        <Typography color="textSecondary" variant="caption">Github</Typography>
      </Box>
    </Box>
  </>

}
