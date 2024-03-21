import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.css'; // Fichier de style pour la notification

function Notification() {
  const addAlert = (message, type) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 'success-toast' // Identifiant unique pour cette notification
        });
        break;
      case 'warning':
        toast.warning(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 'warning-toast' // Identifiant unique pour cette notification
        });
        break;
      case 'error':
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 'error-toast' // Identifiant unique pour cette notification
        });
        break;
      // Ajoutez d'autres types d'alertes ici
      default:
        toast.info(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 'info-toast' // Identifiant unique pour cette notification
        });
    }
  };

  return (
    <div className="notification-container">
      <button onClick={() => addAlert("Date d'expiration proche pour le médicament Y", 'warning')}>
        Afficher une notification d'avertissement
      </button>
      <button onClick={() => addAlert("Opération réussie !", 'success')}>
        Afficher une notification de succès
      </button>
      <button onClick={() => addAlert("Une erreur s'est produite !", 'error')}>
        Afficher une notification d'erreur
      </button>
      <ToastContainer />
    </div>
  );
}

export default Notification;
