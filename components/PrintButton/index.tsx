"use client";

interface PrintButtonProps {
  label?: string;
}

const PrintButton = ({ label = "PDF 저장" }: PrintButtonProps) => {
  return (
    <button
      className="no-print inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1.5 rounded hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-colors duration-150 cursor-pointer"
      onClick={() => window.print()}
    >
      <svg
        fill="none"
        height="12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="12"
      >
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect height="8" width="12" x="6" y="14" />
      </svg>
      {label}
    </button>
  );
};

export default PrintButton;
