import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 gap-5">
      <header className="bg-white/95 py-5 px-8 shadow-md border-b border-black/10">
        <h1 className="m-0 text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          VectorShift Pipeline Builder
        </h1>
      </header>
      <div className="flex flex-col gap-7 flex-1 mx-5 mb-5">
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
