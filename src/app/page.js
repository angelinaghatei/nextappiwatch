import Navbar from "./components/Navbar";
import ColorPicker from "./components/ColorPicker";
import WatchDisplay from "./components/WatchDisplay";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#b0bfd4" }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero section */}
      <main className="flex flex-1 items-center justify-between px-16 py-10 relative">
        {/* Left: Text + CTA */}
        <div className="flex flex-col gap-8 max-w-md">
          <h1 className="text-5xl font-bold text-white leading-tight">
            The Perfect Moment
            <span className="font-light block">Between Past And</span>
            <span className="font-light">Future.</span>
          </h1>
          <button className="border-2 border-white text-white rounded-full px-10 py-3 w-fit text-sm">
            Buy Now
          </button>
        </div>

        {/* Center: Watch image + thumbnails */}
        <div className="flex-1 flex justify-center">
          <WatchDisplay />
        </div>

        {/* Right: Color dots */}
        <div className="flex flex-col justify-center">
          <ColorPicker />
        </div>

        {/* Bottom left: Slide counter */}
        <div className="absolute bottom-8 left-16 flex items-center gap-3 text-white text-sm">
          <span>←</span>
          <span>1</span>
          <span>→</span>
        </div>
      </main>
    </div>
  );
}
