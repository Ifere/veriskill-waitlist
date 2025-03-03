import { useEffect, useRef, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import Feature from "@/components/Feature";
import StepGuide from "@/components/StepGuide";
import { Video, Users, BarChart, GraduationCap } from "lucide-react";

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="relative z-10 container mx-auto text-center text-white">
          <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium bg-primary/20 rounded-full">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down [animation-delay:200ms]">
            Showcase Your Real Skills
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-down [animation-delay:400ms]">
            A revolutionary platform where talent meets opportunity through verified project demonstrations
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose VeriSkill?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering professionals to demonstrate their real-world capabilities through verified project demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature
              icon={Video}
              title="Video Portfolios"
              description="Showcase your skills through detailed project walkthroughs and demonstrations"
            />
            <Feature
              icon={BarChart}
              title="AI-Powered Verification"
              description="Our AI analyzes your submissions to extract and verify your competencies"
            />
            <Feature
              icon={Users}
              title="Talent Matching"
              description="Connect with recruiters looking for your specific verified skills"
            />
            <Feature
              icon={GraduationCap}
              title="Learning Pathways"
              description="Get personalized guidance on skills to develop for your dream role"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your journey to showcase and verify your skills
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <StepGuide
              number={1}
              title="Create Your Profile"
              description="Set up your profile and upload video demonstrations of your projects"
            />
            <StepGuide
              number={2}
              title="AI Analysis"
              description="Our AI system analyzes your submissions to extract and verify skills"
            />
            <StepGuide
              number={3}
              title="Get Verified"
              description="Receive third-party verifications from peers and mentors"
            />
            <StepGuide
              number={4}
              title="Connect"
              description="Match with recruiters looking for your specific verified skills"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Showcase Your Skills?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the waitlist today and be among the first to experience the future of skill verification
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}

