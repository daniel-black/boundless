import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BirdIcon, FileStackIcon, ListTreeIcon } from "lucide-react";
import { ReturnToExploreLink } from "./ReturnToExploreLink";

export function Sidebar() {
  return (
    <section className="w-72 p-3 min-h-screen h-full border-r flex flex-col justify-between">
      <div>
        <div className="text-lg font-semibold select-none flex gap-1.5">
          <span>Boundless</span>
          <BirdIcon />
        </div>
        <Accordion
          type="multiple"
          defaultValue={["previous", "suggested"]}
          className="w-full"
        >
          <AccordionItem value="previous">
            <AccordionTrigger>
              <div className="flex gap-1.5 items-center select-none">
                <FileStackIcon className="h-4 w-4" />
                <span>Previous Pages</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="suggested">
            <AccordionTrigger>
              <div className="flex gap-1.5 items-center select-none">
                <ListTreeIcon className="h-4 w-4" />
                <span>Suggested Links</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <ReturnToExploreLink />
    </section>
  );
}
