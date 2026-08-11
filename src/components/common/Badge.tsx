'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'error' | 'accent' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantStyles: Record<string, string> = {
    default: 'bg-support-muted text-primary-950',
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    accent: 'bg-accent text-primary-950',
    warning: 'bg-yellow-500 text-primary-950',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-block rounded-full font-semibold ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
