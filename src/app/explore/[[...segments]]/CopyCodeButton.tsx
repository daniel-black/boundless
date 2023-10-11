"use client";

import { Button } from "@/components/ui/button";
import { BanIcon, CopyCheckIcon, CopyIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";

type CopyState = "uncopied" | "copying" | "copied" | "error";

const copyCodeButtonConfig = {
  uncopied: {
    text: "Copy",
    Icon: CopyIcon,
  },
  copying: {
    text: "Copying",
    Icon: LoaderIcon,
  },
  copied: {
    text: "Copied",
    Icon: CopyCheckIcon,
  },
  error: {
    text: "Error",
    Icon: BanIcon,
  },
} as const;

export function CopyCodeButton({ code }: { code: string }) {
  const [copyState, setCopyState] = useState<CopyState>("uncopied");
  const { text, Icon } = copyCodeButtonConfig[copyState];

  async function copyTextToClipboard(text: string) {
    try {
      setCopyState("copying");
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyState("error");
    }
  }

  return (
    <Button
      size="sm"
      variant={copyState === "error" ? "destructive" : "secondary"}
      className="flex gap-1.5 font-mono"
      onClick={() => copyTextToClipboard(code)}
      disabled={copyState !== "uncopied"}
    >
      <span>{text}</span>
      <Icon
        className={`h-4 w-4 ${copyState === "copying" ? "animate-spin" : ""}`}
      />
    </Button>
  );
}
