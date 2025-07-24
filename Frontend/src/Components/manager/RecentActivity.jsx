const RecentActivity = ({ activities }) => {
    return (
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
            <div>
              <div className="font-medium">{activity.user}</div>
              <p className="text-gray-600">{activity.action}</p>
              <p className="text-sm text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecentActivity;