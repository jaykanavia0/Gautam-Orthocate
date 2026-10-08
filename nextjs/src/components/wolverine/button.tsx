"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface WolverineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "black" | "white" | "outline" | "glass" | "cyan";
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const WolverineButton: React.FC<WolverineButtonProps> = ({
  children,
  variant = "black",
  href,
  className = "",
  icon,
  onClick,
  target,
  rel,
  ...props
}) => {
  const variantClass =
    variant === "cyan"
      ? "-cyan"
      : variant === "white"
      ? "-white"
      : variant === "outline"
      ? "-outline"
      : variant === "glass"
      ? "-glass"
      : "-black";

  const renderIcon = icon || <ArrowRight className="w-4 h-4" />;

  const innerContent = (
    <>
      <span className="c-button_bg" />
      <span className="c-button_inner">
        <span className="c-button_icon c-button_icon-first" aria-hidden="true">
          {renderIcon}
        </span>
        <span className="c-button_label">{children}</span>
        <span className="c-button_icon c-button_icon-last" aria-hidden="true">
          {renderIcon}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`c-button rounded-full bg-transparent ${variantClass} ${className}`}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`c-button rounded-full bg-transparent ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {innerContent}
    </button>
  );
};
