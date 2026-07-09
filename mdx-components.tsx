import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-[var(--foreground)] mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-[var(--foreground)] mt-8 mb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-[var(--foreground)] mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1.5 mb-4 pl-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-sm text-[var(--muted)] space-y-1.5 mb-4 pl-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ children, ...props }) => {
      const isBlock = "data-language" in props;
      if (isBlock) {
        return (
          <code className="text-xs" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className="font-mono text-xs bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] px-1.5 py-0.5 rounded">
          {children}
        </code>
      );
    },
    figure: ({ children, ...props }) => (
      <figure className="mb-4" {...props}>
        {children}
      </figure>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[var(--accent)] pl-4 my-4 text-sm text-[var(--muted)] italic">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--foreground)]">
        {children}
      </strong>
    ),
    hr: () => <hr className="border-[var(--border)] my-8" />,
    a: ({ children, href }) => (
      <a
        className="text-[var(--accent)] hover:underline underline-offset-2"
        href={href}
        rel="noopener noreferrer"
        target={href?.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="text-left text-xs font-semibold text-[var(--foreground)] border border-[var(--border)] px-3 py-2 bg-[var(--surface)]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="text-sm text-[var(--muted)] border border-[var(--border)] px-3 py-2">
        {children}
      </td>
    ),
    ...components,
  };
}
