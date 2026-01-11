import { Handle, Position } from "reactflow";

const NodeHandles = ({ type, handles, position }) => {
  if (!handles.length) return null;

  const isSingle = handles.length === 1;

  return handles.map((handle, index) => {
    const top = isSingle
      ? "50%"
      : `${((index + 1) * 100) / (handles.length + 1)}%`;

    return (
      <Handle
        key={handle.id}
        type={type}
        position={position}
        id={handle.id}
        style={{ top }}
        className="w-3 h-3 bg-indigo-500 border-2 border-white rounded-full"
      />
    );
  });
};

export const BaseNode = ({
  id,
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width = 200,
  height = "auto",
  color = "#6366f1",
}) => {
  const nodeStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    minHeight: "80px",
    borderColor: color,
  };

  const renderInputHandles = () => {
    return <NodeHandles type="target" handles={inputHandles} position={Position.Left} />;
  };

  const renderOutputHandles = () => {
    return <NodeHandles type="source" handles={outputHandles} position={Position.Right} />;
  };

  return (
    <div
      className="border-2 rounded-lg bg-white shadow-md flex flex-col relative transition-shadow duration-200 hover:shadow-lg"
      style={nodeStyle}
    >
      {renderInputHandles()}
      <div
        className="px-3 py-2 rounded-t-md font-semibold text-sm"
        style={{ backgroundColor: color }}
      >
        <span className="text-white uppercase tracking-wide">{title}</span>
      </div>
      <div className="p-3 flex-1 flex flex-col gap-2 overflow-hidden [&_label]:flex [&_label]:flex-col [&_label]:gap-1 [&_label]:text-xs [&_label]:text-gray-700 [&_label]:font-medium [&_input]:p-1.5 [&_input]:px-2 [&_input]:border [&_input]:border-gray-300 [&_input]:rounded [&_input]:text-xs [&_input]:font-inherit [&_input]:transition-colors [&_input]:focus:outline-none [&_input]:focus:border-indigo-500 [&_input]:focus:ring-2 [&_input]:focus:ring-indigo-500/20 [&_select]:p-1.5 [&_select]:px-2 [&_select]:border [&_select]:border-gray-300 [&_select]:rounded [&_select]:text-xs [&_select]:font-inherit [&_select]:transition-colors [&_select]:focus:outline-none [&_select]:focus:border-indigo-500 [&_select]:focus:ring-2 [&_select]:focus:ring-indigo-500/20 [&_textarea]:p-1.5 [&_textarea]:px-2 [&_textarea]:border [&_textarea]:border-gray-300 [&_textarea]:rounded [&_textarea]:text-xs [&_textarea]:font-inherit [&_textarea]:transition-colors [&_textarea]:focus:outline-none [&_textarea]:focus:border-indigo-500 [&_textarea]:focus:ring-2 [&_textarea]:focus:ring-indigo-500/20">
        {children}
      </div>
      {renderOutputHandles()}
    </div>
  );
};
