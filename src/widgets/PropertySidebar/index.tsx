import React from 'react';
import { usePropertySidebarBaseClassName } from './style';

export const PropertySidebar = () => {
  const propertySidebarBaseClassName = usePropertySidebarBaseClassName();

  return <div className={propertySidebarBaseClassName}>PropertySidebar</div>;
};
