import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profileData } from '../../data/profile';
import { ExternalLink } from './ExternalLink';
import { sanitizeMailtoUrl } from '../../utils/security';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', iconSize = 20 }) => {
  const socialItems = [
    {
      name: 'GitHub',
      url: profileData.githubUrl.startsWith('http') ? profileData.githubUrl : `https://github.com/${profileData.githubUrl}`,
      icon: <GithubIcon size={iconSize} />,
      label: 'Visitar perfil do GitHub de Wallace',
      isEmail: false,
    },
    {
      name: 'LinkedIn',
      url: profileData.linkedinUrl.startsWith('http') ? profileData.linkedinUrl : `https://linkedin.com/in/${profileData.linkedinUrl}`,
      icon: <LinkedinIcon size={iconSize} />,
      label: 'Visitar perfil do LinkedIn de Wallace',
      isEmail: false,
    },
    {
      name: 'E-mail',
      url: profileData.email,
      icon: <Mail size={iconSize} />,
      label: 'Enviar e-mail para Wallace',
      isEmail: true,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialItems.map((item) => {
        if (item.isEmail) {
          const mailto = sanitizeMailtoUrl(item.url);
          if (!mailto) return null;
          return (
            <a
              key={item.name}
              href={mailto}
              aria-label={item.label}
              className="p-2 text-text-secondary transition-all duration-300 rounded-lg hover:text-accent-blue hover:bg-bg-card hover:scale-105 border border-transparent hover:border-border-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
            >
              {item.icon}
            </a>
          );
        }

        return (
          <ExternalLink
            key={item.name}
            href={item.url}
            ariaLabel={item.label}
            className="p-2 text-text-secondary transition-all duration-300 rounded-lg hover:text-accent-blue hover:bg-bg-card hover:scale-105 border border-transparent hover:border-border-subtle"
          >
            {item.icon}
          </ExternalLink>
        );
      })}
    </div>
  );
};
