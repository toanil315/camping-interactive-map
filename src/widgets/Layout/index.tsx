import { useLayoutBaseClassName } from './style';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const layoutBaseClassName = useLayoutBaseClassName();

  return <div className={layoutBaseClassName}>{children}</div>;
};
