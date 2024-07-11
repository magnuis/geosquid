import { H2, Muted } from "@/src/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="ml-8 flex w-full flex-col items-start justify-center">
        <H2>Hello, world 🚀</H2>
          <Muted>
          GeoSquid
        </Muted>
      </div>
    </main>
  );
}
