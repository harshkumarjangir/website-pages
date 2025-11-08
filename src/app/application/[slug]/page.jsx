import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Application from "@/components/Application";

export default async function ApplictionPage({ params }) {
  const { slug } = await  params;

  const dataDir = path.join(process.cwd(), "src/data/application");
  const filePath = path.join(dataDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) return notFound();

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return <Application data={data} />;
}

export async function generateStaticParams() {
  return [
    { slug: "restaurant" },
    { slug: "cab-booking" },
    // { slug: "car-booking" },
  ];
}
