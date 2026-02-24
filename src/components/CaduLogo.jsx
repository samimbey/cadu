// Reusable Cadu wordmark component matching brand guidelines
export default function CaduLogo({ size = "md", dark = false }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <span
      className={`${sizes[size]} font-normal tracking-tight ${dark ? "text-white" : "text-cadu-blue"}`}
      style={{ fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
    >
      cadu
    </span>
  );
}