import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

const TOPICS = [
  "Reverse Engineering",
  "Cyber Security",
  "Backend Development",
  "System Programming",
  "CTF Challenges",
  "Open Source Projects",
  "Technology and Hobbies",
];

const PREFIXES = [
  "Just an ordinary teenage boy with high ambitions in",
  "Just an ordinary teenage boy driven by ambition in",
  "Just an ordinary teenage boy building in",
  "Just an ordinary teenage boy immersed in",
  "Just an ordinary teenage boy exploring",
  "Just an ordinary teenage boy devoted to",
  "Just an ordinary teenage boy relentlessly learning about",
];

const TypingText = ({ start }: { start: boolean }) => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");

  useEffect(() => {
    if (!start) return;

    const current = TOPICS[topicIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("hold"), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === "hold") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setTopicIndex((i) => (i + 1) % TOPICS.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, topicIndex, start]);

  return (
    <span
      style={{ fontFamily: "'Courier Prime', monospace" }}
      className="inline-flex items-center text-foreground font-semibold"
    >
      {displayed}
      <span
        className="ml-[2px] inline-block w-[2px] h-[1.1em] bg-foreground align-middle animate-pulse"
        style={{ animationDuration: "0.5s" }}
      />
    </span>
  );
};

const Index = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [prefix] = useState(
    () => PREFIXES[Math.floor(Math.random() * PREFIXES.length)],
  );

  useEffect(() => {
    const t = setTimeout(() => setStartTyping(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <main className="flex flex-1 flex-col items-center justify-center text-center w-full gap-8">
          {/* Name + subtitle */}
          <div className="flex flex-col items-center gap-2">
            <h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground
                         transition-opacity duration-700 opacity-0 animate-fadeIn"
            >
              Faeza Raziq
            </h1>
            <p
              className="text-xs sm:text-sm font-body uppercase tracking-[0.3em] text-muted-foreground
                         transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:200ms]"
            >
              Official Personal Website
            </p>
          </div>

          {/* Tagline — lebar dibatasi, teks kecil, wrap natural */}
          <p
            className="max-w-[320px] sm:max-w-[380px] text-xs sm:text-sm font-body text-muted-foreground leading-relaxed
                       transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:400ms]"
          >
            {prefix} <TypingText start={startTyping} />
          </p>

          {/* Contact card */}
          <div className="relative w-full max-w-xs transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:600ms]">
            <span
              className="absolute -top-2.5 left-4 z-10 bg-background px-2 text-[11px] font-body
                         text-muted-foreground border border-border rounded-full leading-5 flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact Me
            </span>
            <Card className="w-full pt-3 pb-2">
              <CardContent className="px-4 py-0">
                <SocialLinks />
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="mt-auto pt-8 pb-6 transition-opacity duration-700 opacity-0 animate-fadeIn [animation-delay:600ms]">
          <p className="text-xs text-muted-foreground font-body">
            &copy; {new Date().getUTCFullYear()} Faeza Raziq
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
