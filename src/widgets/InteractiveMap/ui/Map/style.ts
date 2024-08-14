import { makeResetStyles, tokens } from '@fluentui/react-components';

export const useMapBaseClassName = makeResetStyles({
  width: 'calc(100vw - 300px)',
  height: '100vh',
  backgroundColor: '#FCFCFC',
  transformOrigin: 'top right !important' as any,

  '& img': {
    height: '100vh',
    pointerEvents: 'auto !important' as any,
  },
});

export const useTentInfoBaseClassName = makeResetStyles({
  width: '400px',

  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  gap: tokens.spacingHorizontalMNudge,

  '& img': {
    width: '100px',
    height: '100px',
    borderRadius: tokens.borderRadiusLarge,
  },

  '& .info': {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,

    '& h4': {
      margin: 0,
    },

    '& p': {
      fontSize: tokens.fontSizeBase200,
      color: tokens.colorNeutralForeground1,
      margin: 0,
    },

    '& a': {
      fontSize: tokens.fontSizeBase200,
      color: 'blue',
      outline: 'none',
    },
  },
});
