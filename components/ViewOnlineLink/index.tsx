interface ViewOnlineLinkProps {
  className?: string;
  href: string;
  label: string;
}

const ViewOnlineLink = ({
  className = "",
  href,
  label,
}: ViewOnlineLinkProps) => {
  return (
    <a
      className={`print-only items-center gap-1.5 text-xs font-medium text-[var(--accent)] border border-[var(--accent)] px-3 py-1.5 rounded ${className}`}
      href={href}
    >
      {label}
    </a>
  );
};

export default ViewOnlineLink;
