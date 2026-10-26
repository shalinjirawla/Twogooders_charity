import PreviewHeader from "./PreviewHeader";
import { premiumFontClass } from "./premiumFonts";
import "./preview-header.css";

// Wraps a preview route with the shared top header
export default function PreviewShell({ children }) {
  return (
    <div className={`pv-withHeader ${premiumFontClass}`}>
      <PreviewHeader />
      {children}
    </div>
  );
}
