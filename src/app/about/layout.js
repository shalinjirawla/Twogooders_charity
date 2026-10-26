import PreviewShell from "../_preview-shared/PreviewShell";

export const metadata = {
  title: "About Us preview | Two Gooders",
  description: "Preview of the redesigned Two Gooders About page.",
  robots: { index: false, follow: false },
};

export default function AboutPreviewLayout({ children }) {
  return <PreviewShell>{children}</PreviewShell>;
}
