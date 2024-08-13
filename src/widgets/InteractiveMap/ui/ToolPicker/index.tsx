import { CampingFireIcon, DeleteTableIcon, TentIcon, TreeIcon } from '@/components';
import { useToolPickerBaseClassName } from './style';
import { Tooltip } from '@fluentui/react-components';
import { useEffect } from 'react';
import { CAMPING_OBJECT_ENUM } from '@/constants/camping-object';
import { useInteractiveMap } from '@/hooks/useInteractiveMap';

const tools = [
  {
    name: 'Tent',
    type: CAMPING_OBJECT_ENUM.TENT,
    icon: TentIcon,
    path: '/tent.svg',
  },
  {
    name: 'Camping fire',
    type: CAMPING_OBJECT_ENUM.CAMPING_FIRE,
    icon: CampingFireIcon,
    path: '/camping-fire.svg',
  },
  {
    name: 'Tree',
    type: CAMPING_OBJECT_ENUM.TREE,
    icon: TreeIcon,
    path: '/tree.svg',
  },
];

export const ToolPicker = () => {
  const toolPickerBaseClassName = useToolPickerBaseClassName();

  const { selectedTool, setSelectedTool } = useInteractiveMap();

  useEffect(() => {
    if (!selectedTool) {
      document.body.style.cursor = 'default';
    } else {
      const tool = tools.find((tool) => tool.type === selectedTool);
      if (tool) {
        document.body.style.cursor = `url("${tool.path}"), auto`;
      }
    }
  }, [selectedTool]);

  const handleSelectTool = (toolType: CAMPING_OBJECT_ENUM | null) => {
    setSelectedTool(toolType);
  };

  const renderTools = () => {
    const baseToolIconProps = {
      width: 45,
      height: 45,
    };

    return tools.map((tool) => {
      return (
        <Tooltip
          content={tool.name}
          relationship='description'
          withArrow
          appearance='inverted'
          positioning={'after'}
          key={tool.type}
        >
          <div
            className='tool'
            onClick={() => handleSelectTool(tool.type)}
          >
            <tool.icon {...baseToolIconProps} />
          </div>
        </Tooltip>
      );
    });
  };

  return (
    <div className={toolPickerBaseClassName}>
      {renderTools()}
      <Tooltip
        content={'Cancel'}
        relationship='description'
        withArrow
        appearance='inverted'
        positioning={'after'}
      >
        <div
          className='tool'
          onClick={() => handleSelectTool(null)}
          style={{ transform: 'scale(1.5)' }}
        >
          <DeleteTableIcon fill={selectedTool === null ? '#e7e7e7' : '#C1D1DD'} />
        </div>
      </Tooltip>
    </div>
  );
};
