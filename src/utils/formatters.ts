export function formatCurrency(value: number, showDecimals = true): string {
  if (!value && value !== 0) return '₹0';

  const sign = value < 0 ? '-' : '';
  const absValue = Math.abs(value);

  if (absValue >= 10000000) {
    return `${sign}₹${(absValue / 10000000).toFixed(showDecimals ? 2 : 0)}Cr`;
  }
  if (absValue >= 100000) {
    return `${sign}₹${(absValue / 100000).toFixed(showDecimals ? 2 : 0)}L`;
  }
  if (absValue >= 1000) {
    return `${sign}₹${(absValue / 1000).toFixed(showDecimals ? 1 : 0)}K`;
  }
  return `${sign}₹${absValue.toFixed(showDecimals ? 2 : 0)}`;
}

export function formatPercentage(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatNumber(value: number, decimals = 2): string {
  return value.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatAUM(crores: number): string {
  if (crores >= 10000) {
    return `₹${(crores / 10000).toFixed(1)}L Cr`;
  }
  return `₹${crores.toLocaleString('en-IN')} Cr`;
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

export function truncateText(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function getValueColor(value: number, positiveColor = '#10B981', negativeColor = '#EF4444'): string {
  return value >= 0 ? positiveColor : negativeColor;
}
