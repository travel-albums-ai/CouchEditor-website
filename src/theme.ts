import { createTheme } from '@mui/material/styles';

const ACCORDION_BORDER_RADIUS = 16

export const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#7152f8' },
    secondary: { main: '#f48fb1' },
    background: {
      default: '#f4f5f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#20232a',
      secondary: '#6b6f76',
      disabled: '#a0a3a8',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: '0px',

          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.default,
            border: '0px',
          },
        }),
      },

      defaultProps: {
        roundness: 'rounded',
      },

      variants: [
        {
          props: { roundness: 'full' },
          style: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
        {
          props: { roundness: 'rounded' },
          style: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
        {
          props: { roundness: 'square' },
          style: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
      ],
    },

    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: `${theme.palette.background.paper}DB`,
          maxHeight: '75vh',
          padding: theme.spacing(2),
          overflowY: 'auto',
          border: `1px solid ${theme.palette.primary.main}42`,
          backdropFilter: 'blur(16px)',
          borderRadius: Number(theme.shape.borderRadius) * 3,
          boxShadow: `0px 3px 12px -3px ${theme.palette.primary.main}`,
        }),
        backdrop: ({ theme }) => ({
          backdropFilter: 'blur(1px)',
          backgroundColor: `${theme.palette.background.paper}42`,
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          maxWidth: '500px',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: `${theme.palette.background.paper}DB`,
          backdropFilter: 'blur(2px)',
          color: `${theme.palette.text.primary}`,
          boxShadow: theme.shadows[4],

        }),
        arrow: ({ theme }) => ({
          color: `${theme.palette.background.paper}BB`,
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: Number(theme.shape.borderRadius) * 2,
        }),
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: Number(theme.shape.borderRadius) * 3,
        }),
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(30, 30, 30, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: `${theme.palette.background.paper}BD`,
          backdropFilter: 'blur(16px)',
          borderRadius: Number(theme.shape.borderRadius) * 3,
          boxShadow: `0px 3px 12px -3px ${theme.palette.primary.main}`,
        }),
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&::before': {
            display: 'none',
          },

          border: '1px solid',
          borderColor: theme.palette.divider,

          borderRadius: Number(theme.shape.borderRadius) * 3,

          '&:first-of-type': {
            borderTopLeftRadius: Number(theme.shape.borderRadius) * 3,
            borderTopRightRadius: Number(theme.shape.borderRadius) * 3,
          },

          '&:last-of-type': {
            borderBottomLeftRadius: Number(theme.shape.borderRadius) * 3,
            borderBottomRightRadius: Number(theme.shape.borderRadius) * 3,
          },
        }),
      },
    },
  },
})

export const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#373737', paper: '#2c2c2c' },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: '0px',
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.default,
            border: '0px',
          },
        }),
      },
      defaultProps: { roundness: 'rounded' },
      variants: [
        { props: { roundness: 'full' }, style: { '& .MuiOutlinedInput-root': { borderRadius: 999 } } },
        { props: { roundness: 'rounded' }, style: { '& .MuiOutlinedInput-root': { borderRadius: 24 } } },
        { props: { roundness: 'square' }, style: { '& .MuiOutlinedInput-root': { borderRadius: 0 } } },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'important' },
          style: {
            borderStyle: 'dotted',
            borderColor: '#90caf9',
            backgroundColor: 'rgba(144, 202, 249, 0.15)',
            boxShadow: '0 1px 8px 4px rgba(144, 202, 249, 0.2)',
            color: '#e3f2fd',
            fontWeight: 600,
          },
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        // root: {
        //   backdropFilter: 'blur(12px)',
        //   WebkitBackdropFilter: 'blur(12px)',
        // },
        paper: {
          background: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          overflow: 'hidden',
        },
        backdrop: {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }
      },
    },
    MuiButton: { styleOverrides: { root: { borderRadius: '8px', textTransform: 'none' } } },
    MuiCard: { styleOverrides: { root: { borderRadius: '16px' } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: 'rgba(30,30,30,0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' } } },
    MuiPopover: { styleOverrides: { paper: ({ theme }) => ({ backgroundColor: `${theme.palette.background.paper}BD`, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }) } },
    MuiAccordion: { styleOverrides: { root: { '&::before': { display: 'none' }, border: 0, borderRadius: ACCORDION_BORDER_RADIUS, '&:first-of-type': { borderTopLeftRadius: ACCORDION_BORDER_RADIUS, borderTopRightRadius: ACCORDION_BORDER_RADIUS }, '&:last-of-type': { borderBottomLeftRadius: ACCORDION_BORDER_RADIUS, borderBottomRightRadius: ACCORDION_BORDER_RADIUS } } } },
  },
})
