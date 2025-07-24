import React from 'react';
import { FileText, Download } from 'lucide-react';

const TransactionsTable = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">Aucune transaction</h3>
        <p className="mt-1 text-gray-500">Aucune transaction n'a été enregistrée pour cette période.</p>
      </div>
    );
  }

  const totalValue = transactions.reduce((sum, tx) => sum + tx.price, 0);
  const totalCommission = transactions.reduce((sum, tx) => sum + tx.commission, 0);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bien</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.property}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.client}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.agent}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{tx.price.toLocaleString('fr-FR')} FCFA</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{tx.commission.toLocaleString('fr-FR')} FCFA</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  tx.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : tx.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-red-100 text-red-800'
                }`}>
                  {tx.status === 'completed' ? 'Complétée' : tx.status === 'pending' ? 'En attente' : 'Annulée'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                  <Download size={14} />
                  <span>Reçu</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50 font-semibold">
          <tr>
            <td colSpan="5" className="px-6 py-3 text-right text-sm">Totaux:</td>
            <td className="px-6 py-3 text-sm text-gray-900">{totalValue.toLocaleString('fr-FR')} FCFA</td>
            <td className="px-6 py-3 text-sm text-gray-900">{totalCommission.toLocaleString('fr-FR')} FCFA</td>
            <td colSpan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TransactionsTable;