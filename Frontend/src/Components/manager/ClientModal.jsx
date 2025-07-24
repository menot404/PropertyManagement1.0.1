import React, { useState, useEffect } from 'react';
import { X, Save, User, Mail, Phone, Home } from 'lucide-react';

const ClientModal = ({ client, agents, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agent: '',
    status: 'active',
    properties: []
  });

  // Initialiser avec les données existantes si en mode édition
  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name,
        email: client.email,
        phone: client.phone,
        agent: client.agent,
        status: client.status,
        properties: [...client.properties]
      });
    } else {
      setFormData(prev => ({
        ...prev,
        agent: agents.length > 0 ? agents[0].name : ''
      }));
    }
  }, [client, agents]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePropertyChange = (index, value) => {
    const newProperties = [...formData.properties];
    newProperties[index] = value;
    setFormData(prev => ({ ...prev, properties: newProperties }));
  };

  const addPropertyField = () => {
    setFormData(prev => ({
      ...prev,
      properties: [...prev.properties, '']
    }));
  };

  const removePropertyField = (index) => {
    const newProperties = formData.properties.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, properties: newProperties }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">
            {client ? "Modifier le client" : "Créer un nouveau client"}
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Agent assigné</label>
            <select
              name="agent"
              value={formData.agent}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              {agents.map(agent => (
                <option key={agent.id} value={agent.name}>
                  {agent.name}
                </option>
              ))}
            </select>
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
                <span className="ml-2">Actif</span>
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
                <span className="ml-2">Inactif</span>
              </label>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className=" text-sm font-medium text-gray-700 flex items-center">
                <Home size={16} className="mr-2" /> Biens suivis
              </label>
              <button 
                type="button" 
                onClick={addPropertyField}
                className="text-blue-600 text-sm"
              >
                + Ajouter un bien
              </button>
            </div>
            
            {formData.properties.map((prop, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={prop}
                  onChange={(e) => handlePropertyChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg"
                  placeholder="Nom du bien"
                />
                <button 
                  type="button" 
                  onClick={() => removePropertyField(index)}
                  className="px-3 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

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
              {client ? "Enregistrer" : "Créer le client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientModal;