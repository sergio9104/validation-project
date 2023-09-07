export const formatDate = (date, format, locale) => {
  switch (format) {
    case 'short':
      return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
    case 'long':
      return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
    case 'yearMonth':
      return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
    case 'year':
      return new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
    default:
      return date.toString();
  }
};

export const formatTime = (date, format, locale) => {
  switch (format) {
    case 'short':
      return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(date);
    case 'withSeconds':
      return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
    case 'withTimezone':
      return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).format(date);
    case '24hour':
      return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
    default:
      return date.toString();
  }
};
