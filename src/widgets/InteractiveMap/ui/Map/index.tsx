import { CAMPING_OBJECT_ICON } from '@/constants/camping-object';
import { useMapBaseClassName, useTentInfoBaseClassName } from './style';
import ExampleMapSvg from '@/assets/example-map.svg';
import { useInteractiveMap } from '@/hooks/useInteractiveMap';
import { MouseEventHandler, RefObject, createRef, useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { Popover } from '@/components';
import { PositioningImperativeRef } from '@fluentui/react-components';

export const Map = () => {
  const mapBaseClassName = useMapBaseClassName();
  const tentInfoBaseClassName = useTentInfoBaseClassName();

  const imageRef = useRef<HTMLImageElement | null>(null);
  const transformRef = useRef<ReactZoomPanPinchRef['state'] | null>(null);
  const { items, selectedTool, addItems } = useInteractiveMap();
  const [positioningRefs, setPositioningRefs] = useState<RefObject<PositioningImperativeRef>[]>([]);

  useEffect(() => {
    setPositioningRefs(items.map(() => createRef<PositioningImperativeRef>()));
  }, [items.length]);

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

  const renderTentInfo = () => {
    return (
      <div className={tentInfoBaseClassName}>
        <img
          src='https://t3.ftcdn.net/jpg/05/39/76/28/360_F_539762817_90lTAPZAQwcS9nMzlfpGW0GW1JIttMTE.jpg'
          alt='tent'
        />
        <div className='info'>
          <h4>Luxury Glamping Tent</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur
            corporis!
          </p>
          <a href='#'>View details</a>
        </div>
      </div>
    );
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

            {items.map((item, index) => {
              const Icon = CAMPING_OBJECT_ICON[item.type];
              return (
                <Popover
                  positioning={{ positioningRef: positioningRefs[index] }}
                  content={renderTentInfo()}
                  key={item.id}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: `${item.left}%`,
                      top: `${item.top}%`,
                      scale: transformRef.current?.scale,
                      cursor: selectedTool ? 'unset' : 'pointer',
                      zIndex: 100,
                    }}
                    onClick={(e) => {
                      positioningRefs[index].current?.setTarget(e.target as HTMLElement);
                    }}
                  >
                    <Icon
                      width={40}
                      height={40}
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                </Popover>
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
