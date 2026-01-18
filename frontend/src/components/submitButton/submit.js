import { Play } from "lucide-react";
import { useStore } from "../../store/store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

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

      alert(
        `Pipeline Analysis Results:\n\n` +
          `Number of Nodes: ${data.num_nodes}\n` +
          `Number of Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        "Error submitting pipeline. Please make sure the backend is running."
      );
    }
  };

  return (
    <div className="flex items-center justify-center py-8 bg-white/95 rounded-xl shadow-md">
      <button
        type="button"
        className="px-10 py-3.5 text-xs text-[#166534] bg-emerald-100 border-none flex items-center rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        onClick={handleSubmit}
      >
        <Play />
        Run
      </button>
    </div>
  );
};
