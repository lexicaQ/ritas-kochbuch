
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export const NavLink = ({ 
  to, 
  children, 
  className,
  active
}: NavLinkProps) => {
  const location = useLocation();
  const isActive = active !== undefined ? active : location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "text-sm font-medium transition-colors hover:text-cookbook-800",
        isActive 
          ? "text-cookbook-700 font-bold" 
          : "text-cookbook-600",
        className
      )}
    >
      {children}
    </Link>
  );
};
