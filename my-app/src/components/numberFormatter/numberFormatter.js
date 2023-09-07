import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function NumberFormatter() {
  const { t } = useTranslation();
  const [digits, setDigits] = useState(2);

  const numbers = [
    1,
    12345.6712313123123,
    987654,
    1000000000
  ];

  return (
    <div>
      <label>
        Select Number of Digits:
        <select onChange={(e) => setDigits(Number(e.target.value))} value={digits}>
          {[...Array(10).keys()].map(i => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </label>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>
            {t('number', { value: Number(num.toFixed(digits)) })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NumberFormatter;
