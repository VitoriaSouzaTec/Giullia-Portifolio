const AboutSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20 glow-primary">
          {/* O título da seção permanece o mesmo, forte e conceitual */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary glow-text-primary">A Essência: Conteúdo, Ciência e Autenticidade</h2>
          
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            
            {/* Parágrafo 1: Apresentação e Experiência Digital */}
            <p className="text-lg">
              Eu sou **Giullia Albertini**, <span className="text-secondary font-semibold">criadora de conteúdo</span> com mais de <span className="text-primary font-semibold">oito anos de experiência</span> no universo digital. Minha especialidade é a produção de vídeos de <span className="text-secondary">humor, estilo de vida, streams de games</span> e análise de tendências.
            </p>
            
            {/* Parágrafo 2: Carreira Profissional (Veterinária) */}
            <p className="text-lg">
              Paralelamente, dedico-me aos estudos com minha paixão incondicional pelo mundo animal, e em breve iniciarei minha carreira como <span className="text-primary font-semibold">Médica Veterinária</span>, unindo ciência e cuidado.
            </p>
            
            {/* Parágrafo 3: Missão e Autenticidade */}
            <p className="text-lg">
              Minha missão é clara: criar <span className="text-secondary font-semibold">conexões autênticas</span> e inspirar a comunidade, provando que é totalmente possível conciliar as paixões de ser <span className="text-primary">Gamer</span>, <span className="text-secondary">Criadora de Conteúdo</span> e <span className="text-primary">Veterinária</span>, sempre mantendo a minha essência e autenticidade.
            </p>
            
            {/* Destaque para Marcas */}
            <div className="pt-6 mt-6 border-t border-primary/20">
              <p className="text-xl font-semibold text-primary glow-text-primary">
                Destaque para Marcas: Histórico comprovado com mais de <span className="text-secondary">+40 parcerias de sucesso</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;