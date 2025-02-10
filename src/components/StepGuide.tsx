
import { cn } from "@/lib/utils";

interface StepGuideProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export default function StepGuide({
  number,
  title,
  description,
  className,
}: StepGuideProps) {
  return (
    <div className={cn("flex gap-6", className)}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
