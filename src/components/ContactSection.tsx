import { Mail, Phone, FileText } from "lucide-react";
const ContactSection = () => {
  return <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Media Kit CTA */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-12 border-2 border-secondary glow-secondary text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text-secondary">
            Parcerias & Colaborações
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Interessado em trabalhar comigo? Solicite meu mídia kit completo com estatísticas, cases de sucesso e propostas de valor.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-full text-lg font-semibold glow-secondary hover-glow-secondary transition-all inline-flex items-center gap-2">
            <FileText size={24} />
            SOLICITAR MÍDIA KIT
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <a href="mailto:contato@giullialbertini.com" className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover-glow-primary transition-all flex items-center gap-4 group">
            <div className="text-primary">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Profissional</p>
              <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                giullia.albertini151617@gmail.com
              </p>
            </div>
          </a>

          
        </div>
      </div>
    </section>;
};
export default ContactSection;