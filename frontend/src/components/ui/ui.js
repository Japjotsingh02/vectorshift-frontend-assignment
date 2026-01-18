import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "../../store/store";
import { InputNode } from "../nodes/inputNode";
import { LLMNode } from "../nodes/llmNode";
import { OutputNode } from "../nodes/outputNode";
import { TextNode } from "../nodes/textNode";
import { ConditionalNode } from "../nodes/conditionalNode";
import { MathNode } from "../nodes/mathNode";
import { TransformNode } from "../nodes/transformNode";
import { FilterNode } from "../nodes/filterNode";
import { JoinNode } from "../nodes/joinNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  conditional: ConditionalNode,
  math: MathNode,
  transform: TransformNode,
  filter: FilterNode,
  join: JoinNode,
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore();

  console.log(nodes, edges);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  console.log(nodes, edges, 'hi1');

  return (
    <>
      <div ref={reactFlowWrapper} className="w-full h-[70vh] bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
          minZoom={0.2}
          maxZoom={4}
        >
          <Background gap={gridSize} />
          <Controls className="bg-white border border-gray-200" />
          <MiniMap
            className="bg-white border border-gray-200"
            nodeColor={(node) => {
              const colorMap = {
                customInput: "#3b82f6",
                llm: "#8b5cf6",
                customOutput: "#ef4444",
                text: "#10b981",
                conditional: "#f59e0b",
                math: "#06b6d4",
                transform: "#ec4899",
                filter: "#14b8a6",
                join: "#6366f1",
              };
              return colorMap[node.type] || "#9ca3af";
            }}
          />
        </ReactFlow>
      </div>
    </>
  );
};
