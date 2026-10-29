import { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import PrintPreview from './components/PrintPreview';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [activeTemplate, setActiveTemplate] = useState('blank');
  const [content, setContent] = useState('');
  const [pageSize, setPageSize] = useState('A4');
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="flex min-h-screen bg-gray-50 font-bangla">
      <Sidebar setActiveTemplate={setActiveTemplate} />
      
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">বাংলা ডকুমেন্ট মেকার</h1>
          <div className="flex gap-2">
            <select 
              value={pageSize} 
              onChange={(e) => setPageSize(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              <option value="A4">A4</option>
              <option value="A5">A5</option>
            </select>
            <button 
              onClick={handlePrint}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              PDF ডাউনলোড
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Editor content={content} setContent={setContent} />
          
          <PrintPreview 
            ref={printRef} 
            content={content} 
            pageSize={pageSize} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
