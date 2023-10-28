import React, { useState } from 'react';

export default function MultiLanguageSupport() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <h2>Multi-Language Support</h2>
      <select value={language} onChange={handleLanguageChange}>
        <option value='English'>English</option>
        <option value='Spanish'>Spanish</option>
        <option value='French'>French</option>
        <option value='German'>German</option>
      </select>
    </div>
  );
}