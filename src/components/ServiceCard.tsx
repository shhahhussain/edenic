interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-card dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center border border-border dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
      <div className="text-primary dark:text-blue-400 text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-gray-100">{title}</h3>
      <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default ServiceCard; 