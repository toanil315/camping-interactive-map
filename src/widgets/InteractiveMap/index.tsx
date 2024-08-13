import { useInteractiveMapBaseClassName } from './style';
import { Map } from './ui/Map';
import { ToolPicker } from './ui/ToolPicker';

export const InteractiveMap = () => {
  const interactiveMapBaseClassName = useInteractiveMapBaseClassName();

  return (
    <div className={interactiveMapBaseClassName}>
      <ToolPicker />
      <Map />
    </div>
  );
};
