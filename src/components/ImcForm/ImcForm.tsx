import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, RoundImage, Input, Button } from '../shared/Form.styles';
import PersonMeasurement from '../../assets/images/person_measurement.png';

const ImcForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const formatHeight = (height: string) => {
    if (/^\d{3}$/.test(height)) {
      return `${height[0]}.${height.substring(1)}`;
    }
    return height;
  };

  const handleCalculateImc = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(formatHeight(height));

    if (!name || /\d/.test(name) || name.length > 50) {
      alert(t('error.invalidName'));
      return;
    }

    if (isNaN(weightNum) || weightNum < 20 || weightNum > 500) {
      alert(t('error.invalidWeight'));
      return;
    }

    if (isNaN(heightNum) || heightNum < 1.0 || heightNum > 2.5) {
      alert(t('error.invalidHeight'));
      return;
    }

    const imc = weightNum / (heightNum * heightNum);
    let imcStatus = '';

    if (imc < 18.5) {
      imcStatus = t('observation.underweight');
    } else if (imc < 24.9) {
      imcStatus = t('observation.normal');
    } else if (imc < 29.9) {
      imcStatus = t('observation.overweight');
    } else {
      imcStatus = t('observation.obese');
    }

    setResult(`${name}, seu IMC é ${imc.toFixed(1)} (${imcStatus})`);

    setName('');
    setWeight('');
    setHeight('');
  };

  return (
    <Card>
      <RoundImage src={PersonMeasurement} alt={t('glucoseImageAlt')} />
      <h2>{t('IMC Calculator')}</h2>
      <div>
        <label>{t('patientList.name')}:</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 50))}
          placeholder={t('placeholders.name')}
        />
      </div>
      <div>
        <label>{t('Weight (kg)')}:</label>
        <Input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder={t('Weight (kg)')}
        />
      </div>
      <div>
        <label>{t('Height (m)')}:</label>
        <Input
          type="text"
          value={height}
          onChange={(e) => setHeight(formatHeight(e.target.value.replace(/[^0-9]/g, '')))}
          placeholder={t('Height (m)')}
        />
      </div>
      <Button onClick={handleCalculateImc}>{t('Calculate IMC')}</Button>

      {result && <p>{result}</p>}
    </Card>
  );
};

export default ImcForm;
