import { CAMPING_OBJECT_ICON } from '@/constants/camping-object';
import { useMapBaseClassName } from './style';
import ExampleMapSvg from '@/assets/example-map.svg';
import { useInteractiveMap } from '@/hooks/useInteractiveMap';
import { MouseEventHandler, useRef } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

export const Map = () => {
  const mapBaseClassName = useMapBaseClassName();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const transformRef = useRef<ReactZoomPanPinchRef['state'] | null>(null);
  const { items, selectedTool, addItems } = useInteractiveMap();

  const handleAddCampingObject: MouseEventHandler<HTMLImageElement> = (e) => {
    if (!selectedTool) return;

    const { clientX, clientY } = e;
    const SIDEBAR_WIDTH = 300;
    const { left, top, width, height }: DOMRect = imageRef.current!.getBoundingClientRect();

    let positionXInImage = clientX;
    let positionYInImage = clientY;

    if (width !== window.innerWidth - SIDEBAR_WIDTH) {
      positionXInImage = clientX - left;
    }

    if (height !== window.innerHeight) {
      positionYInImage = clientY - top;
    }

    const positionXInImageRelative = (positionXInImage / width) * 100;
    const positionYInImageRelative = (positionYInImage / height) * 100;

    addItems({
      type: selectedTool,
      left: positionXInImageRelative,
      top: positionYInImageRelative,
      id: Date.now().toString(),
    });
  };

  return (
    <div>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        minScale={0.5}
        maxScale={2}
        onTransformed={(e) => (transformRef.current = e.state)}
        centerZoomedOut={false}
      >
        <TransformComponent wrapperClass={mapBaseClassName}>
          <div>
            <img
              src={ExampleMapSvg}
              alt='Example map'
              className='map'
              ref={imageRef}
              onClick={handleAddCampingObject}
            />

            {items.map((item) => {
              const Icon = CAMPING_OBJECT_ICON[item.type];
              return (
                <Icon
                  width={40}
                  height={40}
                  key={item.id}
                  style={{
                    position: 'absolute',
                    left: `${item.left}%`,
                    top: `${item.top}%`,
                    scale: transformRef.current?.scale,
                  }}
                />
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
