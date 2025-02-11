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
      <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center p-6">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-contain md:object-cover ${
            isVideoLoading ? 'hidden' : 'block'
          }`}
          onLoadedData={() => setIsVideoLoading(false)}
          muted={isMuted}
        >
          <source
            src="https://res.cloudinary.com/doy5slx3n/video/upload/v1739234658/VeriSkill_Your_Skills_Verified_1_ihcile.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        
        <button
          onClick={handleToggleMute}
          className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5 6 9H2v6h4l5 4V5Z"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          )}
        </button>

        <div className="relative z-10 container mx-auto text-center text-white">
          {/* <span className="inline-block animate-fade-down px-4 py-1.5 mb-6 text-sm font-medium bg-primary/20 rounded-full">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down [animation-delay:200ms]">
            Showcase Your Real Skills
          </h1>
         <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-down [animation-delay:400ms]">
            A revolutionary platform where talent meets opportunity through verified project demonstrations
          </p> 
          */} 

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

