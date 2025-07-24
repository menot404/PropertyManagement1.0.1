import React from 'react';
import { Edit, Phone, Mail, User, Calendar, Home } from 'lucide-react';

const ClientTable = ({ clients, onEdit }) => {
  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <User className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun client</h3>
        <p className="mt-1 text-gray-500">Aucun client n'a encore été ajouté.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent assigné</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biens suivis</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière activité</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clients.map(client => (
            <tr key={client.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Mail size={14} className="mr-1" /> {client.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <Phone size={14} className="mr-1" /> {client.phone}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <User size={14} className="mr-1" /> {client.agent}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                  {client.properties.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {client.properties.map((prop, i) => (
                        <span key={i} className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs">
                          {prop}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-400 italic">Aucun bien suivi</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" /> {client.lastActivity}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  client.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {client.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => onEdit(client)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;