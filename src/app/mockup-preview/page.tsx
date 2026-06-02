import HeroMockupA from "@/components/HeroMockupA";
import HeroMockupB from "@/components/HeroMockupB";
import HeroMockupC from "@/components/HeroMockupC";

export default function MockupPreview() {
  return (
    <div className="min-h-screen bg-[#fffbf8] px-8 py-16">
      <div className="mx-auto max-w-5xl space-y-20">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">Option A</p>
          <h2 className="mb-8 text-lg font-bold text-gray-700">Terminal stream — shows Beacon running</h2>
          <HeroMockupA />
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">Option B</p>
          <h2 className="mb-8 text-lg font-bold text-gray-700">Dependency graph — abstract module map</h2>
          <HeroMockupB />
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">Option C</p>
          <h2 className="mb-8 text-lg font-bold text-gray-700">Intelligence report — structured output</h2>
          <HeroMockupC />
        </div>
      </div>
    </div>
  );
}
