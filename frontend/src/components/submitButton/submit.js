import { Play } from "lucide-react";
import { useStore } from "../../store/store";

export const SubmitButton = () => {
  const { nodes, edges, setToast } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Network Error");
      }

      const data = await response.json();

      setToast({
        message: (
          <>
            <strong>Pipeline Analysis Results:</strong>
            <br />
            Number of Nodes: {data.num_nodes}
            <br />
            Number of Edges: {data.num_edges}
            <br />
            Is DAG: {data.is_dag ? "Yes" : "No"}
          </>
        ),
        type: "success",
      });
    } catch (error) {
      setToast({
        message:
          "Error submitting pipeline. Please make sure the backend is running.",
        type: "error",
      });
    }
  };

  return (
    <button
      type="button"
      className="px-2 py-1 text-xs text-[#166534] bg-emerald-100 border border-[#22C55E] flex items-center gap-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#Bbf7d0] active:translate-y-0 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      onClick={handleSubmit}
    >
      <Play size={12} fill={"#22C55E"} stroke={"#22C55E"} />
      Run
    </button>
  );
};
