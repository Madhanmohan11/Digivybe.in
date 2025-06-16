
import { Button } from '@/components/ui/button';
import { QuickAction } from './types';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionClick: (action: string) => void;
}

const QuickActions = ({ actions, onActionClick }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mb-6">
      {actions.map((action) => (
        <Button
          key={action.action}
          onClick={() => onActionClick(action.action)}
          className={`${action.color} hover:opacity-80 text-white p-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2`}
        >
          <span className="text-lg">{action.icon}</span>
          <span>{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default QuickActions;
