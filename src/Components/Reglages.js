import React, { useState } from 'react';
import './Reglages.css';

const ChangePassword = ({ language }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Implement your password change logic here
    console.log('Changing password...');
  };

  return (
    <div className="change-password-container">
      <h2>{language === 'fr' ? 'Changer le mot de passe' : 'Change Password'}</h2>
      <div className="password-input">
        <label htmlFor="currentPassword">{language === 'fr' ? 'Mot de passe actuel' : 'Current Password'}:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="password-input">
        <label htmlFor="newPassword">{language === 'fr' ? 'Nouveau mot de passe' : 'New Password'}:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="password-input">
        <label htmlFor="confirmNewPassword">
          {language === 'fr' ? 'Confirmer le nouveau mot de passe' : 'Confirm New Password'}:
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleChangePassword}>
        {language === 'fr' ? 'Changer le mot de passe' : 'Change Password'}
      </button>
    </div>
  );
};

const ChangeUsername = ({ language }) => {
  const [currentUsername, setCurrentUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const handleChangeUsername = () => {
    // Implement your username change logic here
    console.log('Changing username...');
  };

  return (
    <div className="change-username-container">
      <h2>{language === 'fr' ? 'Changer le nom d\'utilisateur' : 'Change Username'}</h2>
      <div className="username-input">
        <label htmlFor="currentUsername">{language === 'fr' ? 'Nom d\'utilisateur actuel' : 'Current Username'}:</label>
        <input
          type="text"
          id="currentUsername"
          value={currentUsername}
          onChange={(e) => setCurrentUsername(e.target.value)}
        />
      </div>
      <div className="username-input">
        <label htmlFor="newUsername">{language === 'fr' ? 'Nouveau nom d\'utilisateur' : 'New Username'}:</label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <button onClick={handleChangeUsername}>
        {language === 'fr' ? 'Changer le nom d\'utilisateur' : 'Change Username'}
      </button>
    </div>
  );
};

const LanguageSwitcher = ({ setLanguage }) => {
  return (
    <div className="language-switcher">
      <button onClick={() => setLanguage('fr')}>Français</button>
      <button onClick={() => setLanguage('en')}>English</button>
    </div>
  );
};

const Reglages = () => {
  const [language, setLanguage] = useState('fr');

  return (
    <div className="reglages-container">
      <h1>{language === 'fr' ? 'Paramètres' : 'Settings'}</h1>
      <LanguageSwitcher setLanguage={setLanguage} />
      <ChangePassword language={language} />
      <ChangeUsername language={language} />
    </div>
  );
};

export default Reglages;
