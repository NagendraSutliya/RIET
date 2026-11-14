import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Eye, Calendar, BookOpen, ExternalLink } from 'lucide-react';

export default function DocumentModal({ isOpen, onClose, docTitle, docType = 'syllabus' }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-riet-navy text-white p-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-riet-gold/20 flex items-center justify-center text-riet-gold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-base text-white">
                {docTitle || 'Official Institutional Document'}
              </h3>
              <p className="text-[11px] text-slate-300">
                Rajasthan Institute of Engineering & Technology (RIET), Jaipur
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Preview Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-riet-gold bg-riet-navy px-2 py-0.5 rounded">
                  Official Publication
                </span>
                <h4 className="font-heading font-black text-lg text-riet-navy mt-1">
                  {docTitle || 'RIET Academic Document'}
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-medium">Session 2026-27</span>
            </div>

            <div className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <p>
                This document is issued under the authority of Rajasthan Institute of Engineering & Technology, Jaipur, affiliated to Rajasthan Technical University (RTU), Kota, and approved by the All India Council for Technical Education (AICTE), New Delhi.
              </p>
              <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Document Reference:</span>
                  <span className="font-mono text-slate-600">RIET/ACAD/2026-DOC-082</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Digital Verification:</span>
                  <span className="text-emerald-700 font-semibold">✓ Cryptographically Signed & Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Format:</span>
                  <span>Portable Document Format (PDF) • 2.4 MB</span>
                </div>
              </div>
            </div>

            {/* Mock PDF Viewer Representation */}
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-slate-800">
                Ready for Viewing & Direct PDF Download
              </p>
              <p className="text-[11px] text-slate-500">
                Click download below to save the official copy to your local device.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {downloaded ? '✓ Download initiated successfully!' : 'Free download for students and applicants'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-bold px-5 py-2 rounded-lg text-xs shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Downloaded ✓' : 'Download PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
