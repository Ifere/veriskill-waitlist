
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !role) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thank you for joining our waitlist!");
    setEmail("");
    setRole("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12"
        required
      />
      <Select value={role} onValueChange={setRole} required>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="student">Student</SelectItem>
          <SelectItem value="recruiter">Recruiter</SelectItem>
          <SelectItem value="educator">Educator</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="h-12 text-lg font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
