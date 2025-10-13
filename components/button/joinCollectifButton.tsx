"use client";

import { Button } from "../button";

interface JoinCollectifButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  children?: React.ReactNode;
}

export function JoinCollectifButton({ 
  variant = "primary", 
  className,
  children = "Rejoindre le collectif"
}: JoinCollectifButtonProps) {
  const handleClick = () => {
    window.location.href = "/contact?type=collectif";
  };

  return (
    <Button 
      onClick={handleClick} 
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}