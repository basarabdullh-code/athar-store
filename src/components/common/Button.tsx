'use client';

import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded transition-all inline-flex items-center justify-center space-x-2 space-x-reverse';

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary-950 text-secondary-50 hover:bg-primary-800 disabled:bg-support-gray',
    secondary: 'bg-secondary-50 text-primary-950 hover:bg-secondary-100 disabled:bg-support-muted',
    accent: 'bg-accent text-primary-950 hover:bg-accent-light disabled:bg-support-gray',
    ghost: 'text-primary-950 hover:bg-secondary-50 disabled:text-support-gray',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <span>⏳</span>}
      {children}
    </button>
  );
}
