import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

const Logo = ({ className, showTagline = false, light = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* 3D Box Icon Mockup inspired by the image */}
      <div className="relative w-10 h-10 shrink-0">
        {/* The main face of the box */}
        <div className="absolute inset-0 bg-white border-[2.5px] border-black rounded-[2px] flex items-center justify-center z-20">
          <span className="text-xl font-black text-black tracking-tighter">M</span>
        </div>
        
        {/* The 3D depth part (top and right) */}
        <div className="absolute top-0 left-0 w-full h-full"> 
          {/* Right face */}
          <div className="absolute top-[-4px] left-[4px] w-full h-full bg-gradient-to-b from-[#60a5fa] to-[#2563eb] rounded-[2px] opacity-40 z-10"></div>
          {/* Top face */}
          <div className="absolute top-[-4px] left-[4px] w-full h-full bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] rounded-[2px] opacity-60 z-0 scale-105 origin-bottom-left"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <span className={cn(
          "text-2xl font-display font-bold tracking-tight leading-none",
          light ? "text-white" : "text-brand-text"
        )}>
          MakeMyPages
        </span>
        {showTagline && (
          <span className={cn(
            "text-[10px] font-medium tracking-[0.2em] uppercase mt-1",
            light ? "text-white/60" : "text-brand-text-secondary"
          )}>
            Build. Brand. Grow.
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
