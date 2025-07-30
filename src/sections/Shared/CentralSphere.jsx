export function CentralSphere({ size = 190 }) {
  const borderWidth = 12;
  const wrapperSize = size + borderWidth * 2;

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: `${wrapperSize}px`,
        height: `${wrapperSize}px`,
        boxShadow: ` inset 0 0 12 ${borderWidth / 2}px rgba(28, 87, 80, 0.2)`,
      }}
    >
      <div
        className="relative rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          margin: `${borderWidth}px`, // để nội dung nằm chính giữa
          background: `radial-gradient(50% 50% at 50% 50%, #67E3F4 0%, #1F8479 100%)`,
          boxShadow: `
            rgba(34, 211, 238, 0.4) 0px 0px 95px,
            rgba(34, 211, 238, 0.6) 0px 0px 47.5px inset
          `,
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-radial from-cyan-200 to-transparent opacity-60" />
      </div>
    </div>
  );
}
