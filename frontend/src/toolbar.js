import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="bg-white/95 py-5 px-8 rounded-xl shadow-md">
      <div className="flex flex-col gap-1 mb-4">
        <span className="text-xl font-semibold text-gray-800">
          Node Palette
        </span>
        <span className="text-sm text-gray-500">
          Drag nodes onto the canvas
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="conditional" label="Conditional" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="join" label="Join" />
      </div>
    </div>
  );
};
