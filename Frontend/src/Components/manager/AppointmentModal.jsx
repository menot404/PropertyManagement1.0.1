import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, User, Home, Clock, Calendar as CalendarIcon } from 'lucide-react';

const AppointmentModal = ({ appointment, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    agent: '',
    property: '',
    date: new Date(),
    duration: 60,
    notes: '',
    status: 'pending'
  });

  // Initialiser avec les données existantes si en mode édition
  useEffect(() => {
    if (appointment) {
      setFormData({
        title: appointment.title,
        client: appointment.client,
        agent: appointment.agent,
        property: appointment.property,
        date: appointment.date,
        duration: appointment.duration,
        notes: appointment.notes || '',
        status: appointment.status
      });
    }
  }, [appointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    setFormData(prev => ({ ...prev, date: new Date(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">
            {appointment ? "Modifier le rendez-vous" : "Créer un nouveau rendez-vous"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Titre du RDV</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="pending">En attente</option>
                <option value="confirmed">Confirmé</option>
                <option value="completed">Terminé</option>
                <option value="canceled">Annulé</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <User size={16} className="mr-2" /> Client
              </label>
              <select
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Sélectionner un client</option>
                <option value="Aïcha Traoré">Aïcha Traoré</option>
                <option value="Ousmane Diop">Ousmane Diop</option>
                <option value="Kadidia Sissoko">Kadidia Sissoko</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Agent assigné</label>
              <select
                name="agent"
                value={formData.agent}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Sélectionner un agent</option>
                <option value="Mamadou Koné">Mamadou Koné</option>
                <option value="Fatoumata Diallo">Fatoumata Diallo</option>
                <option value="Ibrahim Traoré">Ibrahim Traoré</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Home size={16} className="mr-2" /> Bien immobilier
              </label>
              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Sélectionner un bien</option>
                <option value="Villa Ouaga 2000">Villa Ouaga 2000</option>
                <option value="Appartement Plateau">Appartement Plateau</option>
                <option value="Terrain Zone Bois">Terrain Zone Bois</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <CalendarIcon size={16} className="mr-2" /> Date
                </label>
                <input
                  type="datetime-local"
                  value={formData.date.toISOString().slice(0, 16)}
                  onChange={handleDateChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Clock size={16} className="mr-2" /> Durée (min)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  min="15"
                  step="15"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes supplémentaires</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            {appointment && (
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
              >
                <Trash2 size={16} className="mr-2" />
                Supprimer
              </button>
            )}
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              <Save size={16} className="mr-2" />
              {appointment ? "Enregistrer" : "Créer le RDV"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;