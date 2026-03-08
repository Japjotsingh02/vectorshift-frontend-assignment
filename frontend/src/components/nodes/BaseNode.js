import { Handle, Position } from "reactflow";
import { getNodeIcon } from "../../helper/nodeIcon";
import { CircleX } from "lucide-react";
import { useStore } from "../../store/store";

const NodeHandles = ({ type, handles, position }) => {
  if (!handles.length) return null;

  const isSingle = handles.length === 1;
  const isInput = type === "target";

  return handles.map((handle, index) => {
    const top = isSingle
      ? "50%"
      : `${((index + 1) * 100) / (handles.length + 1)}%`;

    return (
      <div
        className={`absolute top-[50%] ${
          isInput ? "left-[-3px]" : "right-[-3px]"
        } w-2.5 h-2.5`}
      >
        <Handle
          key={handle.id}
          type={type}
          position={position}
          id={handle.id}
          style={{ top }}
          className={`!relative !top-0 !bg-[#fff] ${
            isInput ? "!left-[-1]" : "!right-0"
          } !border-1 !border-[#4f46e5] !w-[10px] !h-[10px] !p-[6px] !rounded-full`}
        >
          <div
            className={`!absolute !top-[50%] ${
              isInput
                ? "!right-[50%] !translate-x-[50%]"
                : "!left-[50%] !translate-x-[-50%]"
            } !translate-y-[-50%] !p-[1px] bg-[#4f46e5] !border-[2px] !border-[#4f46e5] !rounded-full`}
          />
        </Handle>
      </div>
    );
  });
};

export const BaseNode = ({
  id,
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width = 180,
  height = "auto",
}) => {
  const { removeNode } = useStore();

  const nodeStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    minHeight: "80px",
  };

  const renderInputHandles = () => {
    return (
      <NodeHandles
        type="target"
        handles={inputHandles}
        position={Position.Left}
      />
    );
  };

  const renderOutputHandles = () => {
    return (
      <NodeHandles
        type="source"
        handles={outputHandles}
        position={Position.Right}
      />
    );
  };

  return (
    <div
      className="rounded-md bg-white flex flex-col relative transition-all duration-200 border border-[#A9ABF7] ring-1 ring-[#cecffc] ring-offset-0 hover:border-[#A9ABF7] hover:ring-2 hover:ring-[#cecffc] hover:ring-offset-0"
      style={nodeStyle}
    >
      {renderInputHandles()}
      <div className="rounded-md font-medium text-xs flex justify-between items-center gap-2 bg-[#EEF2FF] border border-[#A5B4FC] m-1 px-1.5 py-1 pb-4">
        <div className="flex gap-1">
          {getNodeIcon(title, "sm")}
          <span className="capitalize tracking-wide">{title}</span>
        </div>
        <CircleX
          size={12}
          className="cursor-pointer"
          onClick={() => removeNode(id)}
        />
      </div>
      <div
        className="
          py-1.5 px-2.5 flex-1 flex flex-col gap-2 overflow-hidden
          [&_label]:flex [&_label]:flex-col [&_label]:gap-1
          [&_label]:text-xs [&_label]:text-gray-700 [&_label]:font-medium
          [&_input]:bg-[#DEDFF5] [&_input]:p-0.5 [&_input]:px-2
          [&_input]:rounded [&_input]:text-xs [&_input]:text-center
          [&_input]:border-0 [&_input]:outline-0 [&_input:focus-visible]:outline-none
          [&_input:focus-visible]:ring-0 [&_input]:transition-colors
          [&_select]:p-1.5 [&_select]:px-2 [&_select]:border [&_select]:border-gray-300
          [&_select]:rounded [&_select]:text-xs [&_select]:font-inherit [&_select]:transition-colors
          [&_select:focus]:outline-none [&_select:focus]:border-indigo-500
          [&_select:focus]:ring-2 [&_select:focus]:ring-indigo-500/20
          [&_textarea]:p-1.5 [&_textarea]:px-2 [&_textarea]:border [&_textarea]:border-gray-300
          [&_textarea]:rounded [&_textarea]:text-xs [&_textarea]:font-inherit [&_textarea]:transition-colors
          [&_textarea:focus]:outline-none [&_textarea:focus]:border-indigo-500
          [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-indigo-500/20
        "
      >
        {children}
      </div>
      {renderOutputHandles()}
    </div>
  );
};
