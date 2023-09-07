import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate, formatTime } from '../../utils/formats/dateTime';

function DateTimeDisplay() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const now = new Date();

  return (
    <div>
      <div>Date (short): {formatDate(now, 'short', currentLocale)}</div>
      <div>Date (long): {formatDate(now, 'long', currentLocale)}</div>
      <div>Date (Year and Month): {formatDate(now, 'yearMonth', currentLocale)}</div>
      <div>Date (Year only): {formatDate(now, 'year', currentLocale)}</div>
      <div>Time (short): {formatTime(now, 'short', currentLocale)}</div>
      <div>Time (with seconds): {formatTime(now, 'withSeconds', currentLocale)}</div>
      <div>Time (with timezone): {formatTime(now, 'withTimezone', currentLocale)}</div>
      <div>Time (24-hour format): {formatTime(now, '24hour', currentLocale)}</div>
    </div>
  );
}

export default DateTimeDisplay;
