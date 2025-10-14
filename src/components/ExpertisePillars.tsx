import { Gamepad2, Video, Stethoscope, Sparkles } from "lucide-react";
const pillars = [{
  title: "Gameplays e Streams",
  icon: Gamepad2,
  glowClass: "border-glow-primary hover-glow-primary",
  iconColor: "text-primary"
}, {
  title: "Estilo de Vida e Humor",
  icon: Video,
  glowClass: "border-glow-secondary hover-glow-secondary",
  iconColor: "text-secondary"
}, {
  title: "Medicina Veterinária",
  icon: Stethoscope,
  glowClass: "border-glow-primary hover-glow-primary",
  iconColor: "text-primary"
}, {
  title: "Branding e Parcerias",
  icon: Sparkles,
  glowClass: "border-glow-secondary hover-glow-secondary",
  iconColor: "text-secondary"
}];
const ExpertisePillars = () => {
  return <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text-secondary">Pilares</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return <div key={index} className={`bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 ${pillar.glowClass} transition-all cursor-pointer group`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${pillar.iconColor} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ExpertisePillars;