import { makeResetStyles } from '@fluentui/react-components';

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
