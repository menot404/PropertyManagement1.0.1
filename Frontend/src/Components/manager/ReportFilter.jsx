import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Filter, X } from 'lucide-react';

const ReportFilter = ({ onFilterChange, onDateChange, initialFilters, initialDateRange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleApplyFilters = () => {
    onFilterChange(filters);
    onDateChange(dateRange);
    setShowFilters(false);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      propertyType: 'all',
      agent: 'all',
      status: 'all'
    };
    const resetDateRange = {
      startDate: new Date(2025, 0, 1),
      endDate: new Date(2025, 5, 20)
    };
    
    setFilters(resetFilters);
    setDateRange(resetDateRange);
    onFilterChange(resetFilters);
    onDateChange(resetDateRange);
    setShowFilters(false);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Filter size={16} />
          {showFilters ? 'Masquer les filtres' : 'Filtrer les rapports'}
        </button>
      </div>

      {showFilters && (
        <div className="bg-white rounded-lg shadow p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filtres avancés</h3>
            <button 
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Période</label>
              <div className="space-y-2">
                <div>
                  <label className="text-xs text-gray-500">Date de début</label>
                  <DatePicker
                    selected={dateRange.startDate}
                    onChange={(date) => setDateRange({...dateRange, startDate: date})}
                    selectsStart
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Date de fin</label>
                  <DatePicker
                    selected={dateRange.endDate}
                    onChange={(date) => setDateRange({...dateRange, endDate: date})}
                    selectsEnd
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    minDate={dateRange.startDate}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="all">Tous les types</option>
                <option value="appartement">Appartement</option>
                <option value="villa">Villa</option>
                <option value="terrain">Terrain</option>
                <option value="bureau">Bureau</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Agent</label>
              <select
                value={filters.agent}
                onChange={(e) => setFilters({...filters, agent: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="all">Tous les agents</option>
                <option value="agent1">Mamadou Koné</option>
                <option value="agent2">Fatoumata Diallo</option>
                <option value="agent3">Ibrahim Traoré</option>
                <option value="agent4">Aminata Ouédraogo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut transaction</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="all">Tous les statuts</option>
                <option value="completed">Complétée</option>
                <option value="pending">En attente</option>
                <option value="canceled">Annulée</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Réinitialiser
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              Appliquer les filtres
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportFilter;