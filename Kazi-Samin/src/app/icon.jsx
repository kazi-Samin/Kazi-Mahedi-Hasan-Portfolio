import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #10131a 0%, #050816 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#adc6ff",
          fontSize: 15,
          fontWeight: "900",
          borderRadius: "28%", // squircle shape
          border: "1.5px solid rgba(173, 198, 255, 0.35)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        KS
      </div>
    ),
    {
      ...size,
    }
  );
}
