import { PipelineToolbar } from './components/toolbar/toolbar';
import { PipelineUI } from './components/ui/ui';
import { SubmitButton } from './components/submitButton/submit';

function App() {
  return (
    <div className="min-h-screen">
      {/* <header className="bg-white/95 py-5 px-8 shadow-md border-b border-black/10">
        <h1 className="m-0 text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          VectorShift Pipeline Builder
        </h1>
      </header> */}
      <div className="flex flex-col flex-1 m-2 border border-[#dadce1] bg-[#fcfcfc] rounded-lg text-[#282A34]">
        <PipelineToolbar />
        <div className="flex-1 bg-gray-100 rounded-xl shadow-xl overflow-hidden">
          <PipelineUI />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
