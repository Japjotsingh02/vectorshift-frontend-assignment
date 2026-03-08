import { PipelineToolbar } from "./components/toolbar/toolbar";
import { SubmitButton } from "./components/submitButton/submit";
import { PanelRightClose } from "lucide-react";
import React, { Suspense } from "react";

const PipelineUI = React.lazy(() => import("./components/pipeline-ui/ui"));

function App() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col flex-1 m-2 border border-[#dadce1] bg-[#fcfcfc] rounded-lg text-[#282A34]">
        <header className="flex justify-between py-2 px-3 border-b border-[#dadce1] items-center">
          <div className="flex gap-5">
            <PanelRightClose size={16} />
            <div className="text-[#1a1b25] font-semibold text-xs">Pipelines</div>
          </div>
          <SubmitButton />
        </header>
        <PipelineToolbar />
        <div className="bg-gray-100 rounded-xl shadow-xl overflow-hidden w-full h-[70vh]">
          <Suspense>
            <PipelineUI />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
