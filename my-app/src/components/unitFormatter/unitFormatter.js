import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  convertInchToCm,
  convertPoundToKg,
  convertLiterToOz,
} from '../../utils/formats/converters.js';

function UnitFormatter({ unit, value }) {
  const { t } = useTranslation();

  let formattedValue;
  switch (unit) {
    case 'inch':
      formattedValue = `${t('inch', { value })} / ${t('cm', { value: convertInchToCm(value) })}`;
      break;
    case 'pound':
      formattedValue = `${t('pound', { value })} / ${t('kg', { value: convertPoundToKg(value) })}`;
      break;
    case 'liter':
      formattedValue = `${t('liter', { value })} / ${t('oz', { value: convertLiterToOz(value) })}`;
      break;
    default:
      formattedValue = value;
  }

  return <div>{formattedValue}</div>;
}

export default UnitFormatter;
