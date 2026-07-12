/**
 * Calculates the duration between two dates and formats it as a string in Portuguese.
 * If endDate is null, it uses the current date (representing "Present").
 */
export function formatExperienceDuration(startDateStr: string, endDateStr: string | null): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "";
  }

  // Calculate difference in months (inclusive of the start month)
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (totalMonths <= 0) {
    return "";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearString = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
  const monthString = months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : '';

  if (yearString && monthString) {
    return `${yearString} e ${monthString}`;
  }
  
  return yearString || monthString;
}

/**
 * Formats a semantic date string (e.g., "2025-06") to a human-readable format (e.g., "Junho de 2025").
 */
export function formatTimelineDate(dateStr: string | null): string {
  if (!dateStr) return "Presente";
  
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
             .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter of month
}
