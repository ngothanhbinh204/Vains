export function OrbitalRing({ radius, children }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
      style={{
        width: `${radius * 2.5}px`,
        height: `${radius * 2.5}px`,
      }}
    >
      {children}
    </div>
  );
}
