import { makeResetStyles, shorthands, tokens } from '@fluentui/react-components';

export const usePropertySidebarBaseClassName = makeResetStyles({
  width: '300px',
  height: '100vh',
  ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
});
