
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export default function Feature({
  title,
  description,
  icon: Icon,
  className,
}: FeatureProps) {
  return (
    <div className={cn("p-6 glass rounded-2xl", className)}>
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
