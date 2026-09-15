import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import { cloneElement } from 'react';

export default function DetailsBar({  items }: { items: { icon: React.ReactNode, num: string, label: string }[] }) {

  return <>
    <Box sx={{ py: 4}}>
      <Stack direction="row"  divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dotted' }} />} sx={{ maxWidth: 1300, margin: "0 auto", px: 2, display: "flex", gap: 2, rowGap: 4, justifyContent: "center", flexWrap: "wrap" }}>
        {items.map((item, index) => (
          <Card key={index} elevation={4} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1, mb: 1, p: 2, py: 3,
            flex: 1,
            border: '1px solid var(--border)',

          }}>
            <Box key={index} sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, mb: 1, color: 'primary.main' }}>
              {item.icon && cloneElement(item.icon, { style: { color: 'inherit'}})}
              <Typography color="textPrimary" sx={{ fontWeight: 'bold' }} variant="h5">{item.num}</Typography>
            </Box>
            <Typography color="textDisabled" variant="subtitle2">{item.label}</Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  </>
}
