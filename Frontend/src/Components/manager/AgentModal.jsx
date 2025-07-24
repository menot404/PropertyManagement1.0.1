import React, { useState, useEffect } from 'react';
import { X, Save, User, Mail, Phone, Lock, Unlock } from 'lucide-react';

const AgentModal = ({ agent, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
    password: '',
    confirmPassword: ''
  });

  // Initialiser avec les données existantes si en mode édition
  useEffect(() => {
    if (agent) {
      setFormData({
        name: agent.name,
        email: agent.email,
        phone: agent.phone,
        status: agent.status,
        password: '',
        confirmPassword: ''
      });
    }
  }, [agent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation des mots de passe pour la création
    if (!agent && formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">
            {agent ? "Modifier l'agent" : "Créer un nouvel agent"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
              <User size={16} className="mr-2" /> Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Mail size={16} className="mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Phone size={16} className="mr-2" /> Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 flex items-center">
                  <Unlock size={16} className="mr-1" /> Actif
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === 'inactive'}
                  onChange={handleChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 flex items-center">
                  <Lock size={16} className="mr-1" /> Inactif
                </span>
              </label>
            </div>
          </div>

          {!agent && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              <Save size={16} className="mr-2" />
              {agent ? "Enregistrer" : "Créer l'agent"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentModal;