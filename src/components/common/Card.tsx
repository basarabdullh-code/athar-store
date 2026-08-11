'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'hover';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variantStyles: Record<string, string> = {
    default: 'bg-white border border-support-muted rounded-lg',
    elevated: 'bg-white shadow-md rounded-lg',
    hover: 'bg-white border border-support-muted rounded-lg hover:shadow-lg transition-shadow',
  };

  return (
    <div className={`p-6 ${variantStyles[variant]} ${className}`}>{children}</div>
  );
}
