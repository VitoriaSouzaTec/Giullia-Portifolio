const AboutSection = () => {
  return <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20 glow-primary">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary glow-text-primary">A Essência: Conteúdo, Veterinária e Autenticidade</h2>
          
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Fala guys, eu sou Giullia Albertini uma <span className="text-secondary font-semibold">criadora de conteúdo</span> com <span className="text-primary font-semibold">8 anos de experiência</span> no digital. Me garanto em fazer vídeos de humor, estilo de vida, streams de games e tendências.
            </p>
            
            <p className="text-lg">
              Estudo, o que eu mais amo no mundo animais. Logo logo inicio minha carreira como  <span className="text-secondary font-semibold">Médica Veterinária</span>.
            </p>
            
            <p className="text-lg">
              Minha missão é criar <span className="text-primary font-semibold">conexões reais</span> e inspirar a comunidade, provando que é possível ser <span className="text-secondary">Gamer</span>, <span className="text-primary">Criadora</span> e <span className="text-secondary">Profissional da Ciência</span> sempre mantendo meu jeito autentico.
            </p>
            
            <div className="pt-6 mt-6 border-t border-primary/20">
              <p className="text-xl font-semibold text-primary glow-text-primary">Destaque para Marcas: Histórico comprovado com mais de +40 parcerias de sucesso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;