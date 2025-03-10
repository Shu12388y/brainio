'use client';

// import { Button } from "@/components/ui/button";
import { Brain, Share2, Sparkles, MessageSquareMore, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5f3ff_1px,transparent_1px),linear-gradient(to_bottom,#f5f3ff_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_0%,hsl(267_83%_53%/0.15),transparent)]" />
      </div>

      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary animate-float" />
            <span className="text-2xl font-bold">Brain.io</span>
          </div>
          <div className="flex gap-4">
            {/* <Button variant="ghost" className="text-base">Login</Button> */}
            {/* <Button className="text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"> */}
              Sign Up Free
            {/* </Button> */}
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto pt-24 pb-20">
          <div className="inline-flex items-center rounded-full border px-6 py-2 mb-8 text-sm backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Introducing Brain.io 2.0</span>
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Transform Your Notes with
            <span className="gradient-text block mt-2">AI-Powered Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of note-taking with Brain.io. Organize, analyze, and share your thoughts with the power of artificial intelligence.
          </p>
          <div className="flex gap-4 justify-center items-center">
            {/* <Button size="lg" className="text-base h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8 hover:scale-105 transition-all">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supercharge Your Note-Taking Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock the full potential of your notes with our powerful features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI-Powered Insights"
              description="Let our advanced AI analyze your notes, generate summaries, and provide intelligent suggestions."
            />
            <FeatureCard
              icon={<Share2 className="h-8 w-8" />}
              title="Seamless Sharing"
              description="Share notes with friends and colleagues instantly. Collaborate in real-time with smart commenting."
            />
            <FeatureCard
              icon={<MessageSquareMore className="h-8 w-8" />}
              title="Interactive AI Chat"
              description="Chat with our AI about your notes. Get clarifications, expansions, and new perspectives."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-b from-purple-500/5 to-purple-500/10 rounded-3xl p-16 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Note-Taking?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of users who have already enhanced their productivity with Brain.io
              </p>
              {/* <Button size="lg" className="text-base h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"> */}
                <Sparkles className="mr-2 h-5 w-5" />
                Start Free Trial
              {/* </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold">Brain.io</span>
            </div>
            <div className="flex gap-8 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Brain.io. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}