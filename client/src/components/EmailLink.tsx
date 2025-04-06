import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

interface EmailLinkProps {
  className?: string;
  showText?: boolean;
  hideTextOnMobile?: boolean;
}

export default function EmailLink({ className = '', showText = true, hideTextOnMobile = false }: EmailLinkProps) {
  const [emailLink, setEmailLink] = useState('');
  
  useEffect(() => {
    // Assemble the email address from parts to make it harder for scrapers
    const user = ['f', 'r', 'i', 't', 's', 'l', 'y', 'n', 'e', 'b', 'o', 'r', 'g'].join('');
    const domain = ['g', 'm', 'a', 'i', 'l'].join('') + '.' + ['c', 'o', 'm'].join('');
    setEmailLink(`mailto:${user}@${domain}`);
  }, []);

  return (
    <a 
      href={emailLink}
      className={`flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors ${className}`}
      aria-label="Send email to Frits Lyneborg"
    >
      <FaEnvelope className={showText ? "text-sm" : "text-xl"} />
      {showText && <span>{hideTextOnMobile ? "Email" : "Send e-mail"}</span>}
      {!showText && hideTextOnMobile && <span className="hidden sm:inline text-sm">Send e-mail</span>}
    </a>
  );
}