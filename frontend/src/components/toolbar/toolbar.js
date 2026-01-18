import { DraggableNode } from "../draggableNode/draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="bg-[#f9fafb] py-5 px-8 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-2.5">
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
