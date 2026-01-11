import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},
  // getNodeID: (type) => {

  //     const newIDs = {...(state.nodeIDs || {})};
  //     if (newIDs[type] === undefined) {
  //         newIDs[type] = 0;
  //     }
  //     newIDs[type] += 1;
  //     set({nodeIDs: newIDs});
  //     return `${type}-${newIDs[type]}`;
  // },
  getNodeID: (type) => {
    const nodeIDs = { ...get().nodeIDs };

    nodeIDs[type] = (nodeIDs[type] || 0) + 1;

    set({ nodeIDs });

    return `${type}-${nodeIDs[type]}`;
  },
  addNode: (node) => {
    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },
  onNodesChange: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));
  },
  onEdgesChange: (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },
  onConnect: (connection) => {
    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.Arrow, height: "20px", width: "20px" },
        },
        state.edges
      ),
    }));
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: { ...node.data, [fieldName]: fieldValue },
          };
        }

        return node;
      }),
    }));
  },
}));
