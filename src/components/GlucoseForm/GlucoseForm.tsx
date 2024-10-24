import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, RoundImage, Input, Button } from '../shared/Form.styles';
import PersonMeasurement from '../../assets/images/blood_drop.png';

const GlucoseForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [glucose, setGlucose] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCalculateGlucose = () => {
    const glucoseNum = parseFloat(glucose);

    if (!name || /\d/.test(name) || name.length > 50) {
      alert(t('error.invalidName'));
      return;
    }

    if (isNaN(glucoseNum) || glucoseNum < 10 || glucoseNum > 1000) {
      alert(t('error.invalidGlucose'));
      return;
    }

    let glucoseStatus = '';
    let attentionMessage = '';

    if (glucoseNum < 70) {
      glucoseStatus = t('observation.low');
      attentionMessage = t('observation.requiresAttention');
    } else if (glucoseNum >= 70 && glucoseNum <= 99) {
      glucoseStatus = t('observation.normal');
    } else if (glucoseNum >= 100 && glucoseNum <= 125) {
      glucoseStatus = t('observation.preDiabetes');
      attentionMessage = t('observation.requiresAttention');
    } else {
      glucoseStatus = t('observation.diabetes');
      attentionMessage = t('observation.requiresAttention');
    }

    setResult(`${name}, seu nível de glicemia é ${glucoseNum} mg/dL (${glucoseStatus}). ${attentionMessage}`);

    setName('');
    setGlucose('');
  };

  return (
    <Card>
      <RoundImage src={PersonMeasurement} alt={t('glucoseImageAlt')} />
      <h2>{t('triageTitle')}</h2>
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
        <label>{t('patientList.glucose')}:</label>
        <Input
          type="text"
          value={glucose}
          onChange={(e) => setGlucose(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder={t('placeholders.glucose')}
        />
      </div>
      <Button onClick={handleCalculateGlucose}>{t('Calculate Glucose')}</Button>

      {result && <p>{result}</p>}
    </Card>
  );
};

export default GlucoseForm;
