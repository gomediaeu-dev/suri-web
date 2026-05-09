"use client";

export default function ChatTrigger({
  className = "btn-ghost",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("suri-open-chat"));
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}
