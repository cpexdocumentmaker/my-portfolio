import { forwardRef } from 'react';

const PrintPreview = forwardRef(({ content, pageSize }, ref) => {
  const sizeClass = pageSize === 'A4' ? 'w-[210mm] min-h-[297mm]' : 'w-[148mm] min-h-[210mm]';

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-3">প্রিভিউ</h3>
      <div className="overflow-auto max-h-[80vh] bg-gray-100 p-4 rounded-lg">
        <div
          ref={ref}
          id="print-area"
          className={`${sizeClass} bg-white mx-auto shadow-lg p-[20mm] text-justify leading-relaxed`}
          style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
        >
          {content ? (
            <div className="whitespace-pre-wrap">{content}</div>
          ) : (
            <p className="text-gray-400 text-center mt-20">এখানে প্রিভিউ দেখা যাবে</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default PrintPreview;
