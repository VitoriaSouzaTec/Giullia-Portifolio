import { Mail, MapPin, Send, FileText } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">

        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-12 border-2 border-secondary glow-secondary text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text-secondary">
            Parcerias & Colaborações
          </h2>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Interessado em trabalhar comigo? Solicite meu mídia kit completo com estatísticas e cases de sucesso.
          </p>

          <a
            href="/midiakit2025.pdf" 
            download ="midiakit2025.pdf"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-full text-lg font-semibold glow-secondary hover-glow-secondary transition-all inline-flex items-center gap-2"
          >
            <FileText size={24} />
            BAIXAR MÍDIA KIT
          </a>
        </div>

        <section
          className="
            mt-10 px-6 py-16 rounded-xl border 
            bg-[hsl(230_35%_7%)] 
            border-[hsl(var(--border))] 
            shadow-[0_0_25px_hsl(var(--glow-primary)/0.25)]
          "
          style={{
            background:
              "linear-gradient(135deg, hsl(230 35% 7%) 0%, hsl(250 40% 12%) 50%, hsl(230 35% 7%) 100%)",
          }}
        >
          {/* Título */}
          <h2 className="text-4xl font-bold text-center mb-8 text-[hsl(var(--foreground))] font-sans">
            Entre em contato
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Info */}
            <div className="md:w-1/3 space-y-8 font-serif">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-[hsl(var(--primary))]" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] font-sans">
                    Email
                  </h3>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">
                    giullia.albertini151617@gmail.com
                  </span>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start gap-4">
                <MapPin className="text-[hsl(var(--primary))]" size={22} />
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] font-sans">
                    Localização
                  </h3>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">
                    Brasil – Fortaleza
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/xrbryjek"
              method="POST"
              className="md:w-2/3 space-y-5"
            >
              {/* Nome + Email */}
              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  required
                  className="
                    w-full h-12 px-4 rounded-md 
                    border border-[hsl(var(--border))] 
                    bg-[hsl(var(--input))] 
                    placeholder-[hsl(var(--muted-foreground))] 
                    text-[hsl(var(--foreground))] 
                    focus:ring-1 focus:ring-[hsl(var(--primary))] 
                    transition-all shadow-sm
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  required
                  className="
                    w-full h-12 px-4 rounded-md 
                    border border-[hsl(var(--border))] 
                    bg-[hsl(var(--input))] 
                    placeholder-[hsl(var(--muted-foreground))] 
                    text-[hsl(var(--foreground))] 
                    focus:ring-1 focus:ring-[hsl(var(--primary))] 
                    transition-all shadow-sm
                  "
                />
              </div>

              {/* Assunto */}
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                required
                className="
                  w-full h-12 px-4 rounded-md 
                  border border-[hsl(var(--border))] 
                  bg-[hsl(var(--input))] 
                  placeholder-[hsl(var(--muted-foreground))] 
                  text-[hsl(var(--foreground))] 
                  focus:ring-1 focus:ring-[hsl(var(--primary))] 
                  transition-all shadow-sm
                "
              />

              {/* Mensagem */}
              <textarea
                name="message"
                placeholder="Sua Mensagem..."
                rows={6}
                required
                className="
                  w-full p-4 rounded-md 
                  border border-[hsl(var(--border))] 
                  bg-[hsl(var(--input))] 
                  placeholder-[hsl(var(--muted-foreground))] 
                  text-[hsl(var(--foreground))] 
                  focus:ring-1 focus:ring-[hsl(var(--primary))] 
                  transition-all shadow-sm resize-none
                "
              ></textarea>

              {/* Botão */}
              <button
                type="submit"
                className="
                  inline-flex items-center gap-2 
                  px-6 py-3 rounded-md font-medium 
                  bg-[hsl(var(--primary))] 
                  text-[hsl(var(--primary-foreground))] 
                  shadow-[0_0_12px_hsl(var(--glow-primary)/0.5)] 
                  hover:shadow-[0_0_20px_hsl(var(--glow-primary))] 
                  hover:scale-[1.02] 
                  transition-all
                  font-sans
                "
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}