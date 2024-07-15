import { cn } from '@/utils/libs';
import React from 'react';

interface IEmptyContainer {
  children: React.ReactNode;
  classNameProps: string;
}
const EmptyContainer = ({ children, classNameProps }: IEmptyContainer) => {
  return <div className={cn(` h-full`, classNameProps)}>{children}</div>;
};

export default EmptyContainer;
