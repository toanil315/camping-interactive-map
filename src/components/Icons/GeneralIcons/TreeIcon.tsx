import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 31.976'
      xmlSpace='preserve'
      {...props}
    >
      <path
        d='M18.869 21.976H21a1 1 0 0 0 .832-1.554l-2.963-4.445H21a.999.999 0 0 0 .814-1.581l-10-14c-.376-.526-1.252-.526-1.628 0l-10 14A1 1 0 0 0 1 15.976h2.131L.168 20.421A.998.998 0 0 0 1 21.976h2.131L.168 26.421A.998.998 0 0 0 1 27.976h7v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h7a1 1 0 0 0 .832-1.554l-2.963-4.446zm-6.869 8h-2v-2h2v2zm-9.131-4 2.963-4.445A.998.998 0 0 0 5 19.976H2.869l2.963-4.445A.998.998 0 0 0 5 13.976H2.943L11 2.697l8.057 11.279H17a1 1 0 0 0-.832 1.554l2.963 4.445H17a1 1 0 0 0-.832 1.554l2.963 4.445H2.869z'
        fill='#C1D1DD'
      />
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
