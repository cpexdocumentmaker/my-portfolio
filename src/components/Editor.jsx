export default function Editor({ content, setContent }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-3">লেখা সম্পাদনা</h3>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="এখানে আপনার ডকুমেন্ট লিখুন..."
        className="w-full h-96 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 font-bangla"
      />
    </div>
  );
      }
