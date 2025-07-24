import { Edit, Trash2, Eye } from 'lucide-react';

const PropertyTable = ({ properties }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {properties.map(property => (
          <tr key={property.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium text-gray-900">{property.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.type}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.price} FCFA</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                property.status === 'Disponible' ? 'bg-green-100 text-green-800' :
                property.status === 'En négociation' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {property.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.agent}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
              <button className="text-blue-600 hover:text-blue-900">
                <Eye size={16} />
              </button>
              <button className="text-yellow-600 hover:text-yellow-900">
                <Edit size={16} />
              </button>
              <button className="text-red-600 hover:text-red-900">
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertyTable;