import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { cloneElement } from 'react';

export default function FeatureCard({ item, compact = false, sx } : { item: { icon: React.ReactNode, title: string, desc: string }, compact?: boolean, sx?: object }) {

  return  <>
    <Card
      elevation={12}
      sx={{
        py: 3, color: 'primary.main',
        border: '1px solid var(--border)',
        bgcolor: '#373737c4',
        backdropFilter: 'blur(10px)',
        px: 3,
        pr: 4,
        position: "relative",
        display: "flex", flexDirection: "column", gap: 2,
        width: '500px',
        ...sx
      }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: compact ? 0 : 2, mt: compact ? 2 : 4 }}>
        {item.icon && cloneElement(item.icon as React.ReactElement, { size: 32})}
        <Typography variant="h6" color="textPrimary" sx={{ zIndex: 1 }}>{item.title}</Typography>
      </Box>
      <Typography variant="caption" color="textDisabled">{item.desc}</Typography>
    </Card>
  </>
}
