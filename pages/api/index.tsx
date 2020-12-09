import dynamic from "next/dynamic";

const Content = dynamic(() => import("components/content"), { ssr: false });

export default function handler(req, res) {
  <Content />;
}
