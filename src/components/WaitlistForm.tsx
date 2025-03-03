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

const getLocationData = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(2000)
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    const data = await response.json();
    return `${data.city}, ${data.region}, ${data.country_name}`;
  } catch (error) {
    console.error('Error getting location:', error);
    
    // Fallback to browser data
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
      const language = navigator.language || 'Unknown';
      return `${timezone}, ${language}`;
    } catch {
      return "Unknown";
    }
  }
};

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!email || !role) {
        toast.error("Please fill in all fields");
        return;
      }

      setIsSubmitting(true);
      
      // Get location data directly
      const location = await getLocationData();
      
      // Prepare form data
      const formData = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        email,
        role,
        location
      };
      
      // Submit to Google Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx6wKtVdv-P5_WTUo0Q-uvFB2z7uYVRIAJ4AsjQZqf0AEz3GalXuNz2aLzj9HCkveg_/exec", 
        {
          method: "POST",
          body: JSON.stringify(formData),
          // Add mode: "no-cors" if you still encounter CORS issues
        }
      );
      
      toast.success("Thank you for joining our waitlist!");
      setEmail("");
      setRole("");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while joining the waitlist");
    } finally {
      setIsSubmitting(false);
    }
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
          <SelectItem key="student-option" value="student">Student</SelectItem>
          <SelectItem key="professional-option" value="professional">Professional</SelectItem>
          <SelectItem key="recruiter-option" value="recruiter">Recruiter</SelectItem>
          <SelectItem key="educator-option" value="educator">Educator</SelectItem>
          <SelectItem key="other-option" value="other">Other</SelectItem>
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
