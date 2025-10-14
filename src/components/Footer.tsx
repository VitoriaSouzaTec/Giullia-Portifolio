

const Footer = () => {


  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-4xl mx-auto">
    
        {/* Copyright */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Giullia Albertini. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Criadora de Conteúdo • Médica Veterinária • Gamer • Modelo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
