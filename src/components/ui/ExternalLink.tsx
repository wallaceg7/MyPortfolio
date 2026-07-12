import React from 'react';
import { sanitizeExternalUrl } from '../../utils/security';

interface ExternalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string | undefined | null;
  children: React.ReactNode;
  ariaLabel: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  children, 
  ariaLabel, 
  className = '', 
  ...rest 
}) => {
  const sanitizedHref = sanitizeExternalUrl(href);

  // If URL is invalid, empty, or insecure, do not render the component
  if (!sanitizedHref) {
    return null;
  }

  return (
    <a
      href={sanitizedHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};
export default ExternalLink;
