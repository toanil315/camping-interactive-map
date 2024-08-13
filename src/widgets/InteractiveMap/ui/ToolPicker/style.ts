import { makeResetStyles, tokens, shorthands } from '@fluentui/react-components';

export const useToolPickerBaseClassName = makeResetStyles({
  position: 'absolute',
  top: '50%',
  left: '10px',
  zIndex: 10,
  transform: 'translateY(-50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: tokens.spacingVerticalL,

  ...shorthands.padding(tokens.spacingVerticalMNudge, tokens.spacingHorizontalM),
  borderRadius: tokens.borderRadiusXLarge,
  backgroundColor: tokens.colorNeutralBackground1,
  boxShadow: tokens.shadow8Brand,

  cursor: 'default',

  '& .tool': {
    cursor: 'pointer',
  },
});
