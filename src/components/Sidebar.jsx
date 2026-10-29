import { FileText, PenTool, Shield, FileCheck } from 'lucide-react';

const templates = [
  { id: 'blank', name: 'খালি ডকুমেন্ট', icon: FileText },
  { id: 'application', name: 'আবেদনপত্র', icon: PenTool },
  { id: 'contract', name: 'চুক্তিপত্র', icon: Shield },
  { id: 'report', name: 'অফিসিয়াল রিপোর্ট', icon: FileCheck },
];

export default function Sidebar({ setActiveTemplate }) {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">টেমপ্লেট</h2>
      <ul className="space-y-2">
        {templates.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => setActiveTemplate(t.id)}
              className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
            >
              <t.icon size={20} className="text-blue-600" />
              {t.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
