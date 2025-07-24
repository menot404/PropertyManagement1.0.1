const StatsCard = ({ title, value, change, icon }) => {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className={`mt-1 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change} ce mois
          </p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    );
  };
  
  export default StatsCard;