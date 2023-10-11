"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const runtime = "edge";

export function StartExploring() {
  const [topic, setTopic] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  function handleClick() {
    if (topic === "") return;

    const cleanedTopic = topic.trim().replaceAll(" ", "-").toLowerCase();
    const encodedTopic = encodeURIComponent(cleanedTopic);

    router.push(`${pathName}/${encodedTopic}`);
  }

  return (
    <div className="py-3 px-10 w-full space-y-3">
      <h3>What do you want to learn about?</h3>
      <Input
        size={40}
        className="w-full max-w-xl"
        placeholder="Civil engineering in Roman times"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleClick}>Explore</Button>
    </div>
  );
}
