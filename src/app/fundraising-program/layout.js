import PreviewShell from "../_preview-shared/PreviewShell";

export const metadata = {
  title: "Fundraising Program preview | Two Gooders",
  description: "Preview of the redesigned Two Gooders Fundraising Program page.",
  robots: { index: false, follow: false },
};

export default function FundraisingPreviewLayout({ children }) {
  return <PreviewShell>{children}</PreviewShell>;
}
