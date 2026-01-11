export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.currentTarget.classList.add('opacity-60', 'cursor-grabbing');
      event.currentTarget.classList.remove('cursor-grab');
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    const onDragEnd = (event) => {
      event.currentTarget.classList.remove('opacity-60', 'cursor-grabbing');
      event.currentTarget.classList.add('cursor-grab');
    };
  
    return (
      <div
        className={`cursor-grab min-w-[100px] h-[80px] flex items-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 justify-center flex-col py-3 px-5 transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:cursor-grabbing select-none ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        draggable
      >
          <span className="text-white font-semibold text-base tracking-wide">{label}</span>
      </div>
    );
  };
  