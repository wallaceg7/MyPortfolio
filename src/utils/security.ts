/**
 * Sanitizes and validates external URLs for security.
 * Only allows safe protocols: https:// (or absolute relative paths like /curriculo-wallace-goncalves.pdf).
 * Blocks javascript:, data:, vbscript:, and malformed protocols.
 * 
 * @param url The URL string to validate.
 * @returns The sanitized URL string or null if invalid.
 */
export function sanitizeExternalUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  
  const trimmed = url.trim();
  
  // Guard against common XSS vectors
  if (
    trimmed === "" || 
    trimmed === "#" || 
    trimmed.toLowerCase().startsWith("javascript:") ||
    trimmed.toLowerCase().startsWith("data:") ||
    trimmed.toLowerCase().startsWith("vbscript:")
  ) {
    return null;
  }

  // Allow safe absolute relative paths (like resume PDF)
  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    // Enforce HTTPS-only for external resources
    if (parsed.protocol === "https:") {
      return trimmed;
    }
    return null;
  } catch {
    // If it's a domain without protocol, e.g., www.linkedin.com, try parsing with https prefix
    if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(trimmed)) {
      return `https://${trimmed}`;
    }
    return null;
  }
}

/**
 * Sanitizes and validates a mailto: link target email.
 * Ensures the email complies with standard syntax before constructing the protocol string.
 * 
 * @param email The target email address.
 * @returns A safe mailto: string, or null if the email is invalid.
 */
export function sanitizeMailtoUrl(email: string | undefined | null): string | null {
  if (!email) return null;
  
  const trimmed = email.trim();
  
  // Standard strict email syntax validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(trimmed)) {
    return `mailto:${trimmed}`;
  }
  
  return null;
}
