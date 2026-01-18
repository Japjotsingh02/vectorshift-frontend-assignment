import { getNodeIcon } from "../../helper/nodeIcon";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.currentTarget.classList.add("opacity-60", "cursor-grabbing");
    event.currentTarget.classList.remove("cursor-grab");
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (event) => {
    event.currentTarget.classList.remove("opacity-60", "cursor-grabbing");
    event.currentTarget.classList.add("cursor-grab");
  };

  return (
    <div
      className={`cursor-grab min-w-[80px] h-[80px] gap-2 border flex items-center rounded-lg justify-center flex-col py-2 px-0.5 transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:border-[#6366f1] hover:text-[#6366f1] active:cursor-grabbing select-none ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
    >
      {getNodeIcon(label)}
      <span className="font-medium text-xs tracking-wide">{label}</span>
    </div>
  );
};
