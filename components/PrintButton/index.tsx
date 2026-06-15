"use client";

import { useState } from "react";

interface PrintButtonProps {
  label?: string;
}

const PrintButton = ({ label = "PDF 저장" }: PrintButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="no-print inline-flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-3 py-1.5 rounded hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-colors duration-150 cursor-pointer"
        onClick={() => setOpen(true)}
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

      {open && (
        <div
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-8 max-w-sm w-full mx-4 space-y-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <p className="text-base font-semibold text-[var(--foreground)]">
                PDF로 저장하기
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                인쇄 대화상자가 열리면 아래 옵션을 설정하세요.
              </p>
            </div>

            <ol className="space-y-3">
              {[
                { label: "대상", value: "PDF로 저장" },
                { label: "헤더 및 바닥글", value: "체크 해제" },
                { label: "여백", value: "없음 또는 최소" },
              ].map(({ label: l, value }) => (
                <li key={l} className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">{l}</span>
                  <span className="font-mono text-xs border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 rounded text-[var(--foreground)]">
                    {value}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex gap-3">
              <button
                className="flex-1 text-sm font-medium text-[var(--background)] bg-[var(--foreground)] px-4 py-2 rounded hover:opacity-80 transition-opacity cursor-pointer"
                onClick={() => { setOpen(false); window.print(); }}
              >
                인쇄 시작
              </button>
              <button
                className="text-sm text-[var(--muted)] border border-[var(--border)] px-4 py-2 rounded hover:border-[var(--foreground)] transition-colors cursor-pointer"
                onClick={() => setOpen(false)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrintButton;
