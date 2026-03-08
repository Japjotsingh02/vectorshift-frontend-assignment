import { CircleX } from "lucide-react";
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
} from "reactflow";
import { useStore } from "../../store/store";

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
}) {
  const removeEdge = useStore((state) => state.removeEdge);

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const handleRemoveEdge = (e) => {
    e.stopPropagation();
    removeEdge(id);
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <button
            type="button"
            onClick={handleRemoveEdge}
            className="flex items-center justify-center w-5 h-5 rounded-full text-[#7A7DF3] bg-[#fff] transition-colors cursor-pointer"
            aria-label="Delete edge"
          >
            <CircleX size={18} />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge;
