import { CampingFireIcon, TentIcon, TreeIcon } from '@/components';

export enum CAMPING_OBJECT_ENUM {
  TENT = 'TENT',
  CAMPING_FIRE = 'CAMPING_FIRE',
  TREE = 'TREE',
}

export const CAMPING_OBJECT_ICON = {
  [CAMPING_OBJECT_ENUM.TENT]: TentIcon,
  [CAMPING_OBJECT_ENUM.CAMPING_FIRE]: CampingFireIcon,
  [CAMPING_OBJECT_ENUM.TREE]: TreeIcon,
};
