import profileImage from "@/assets/profile.jpeg";
import { FaInstagram, FaTiktok, FaTwitch, FaYoutube, FaDiscord,  } from 'react-icons/fa';

const ProfileHeader = () => {
  const socialIcons = [
    { icon: FaInstagram, url: "https://www.instagram.com/giullia.albertini/", color: "text-secondary" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@fenix151617", color: "text-secondary" },
    { icon: FaTwitch, url: "https://www.twitch.tv/fenix151617", color: "text-secondary" },
    { icon: FaYoutube, url: "https://www.youtube.com/channel/UC4EMD28iH0gL1GG4ZIRNFrw", color: "text-secondary" },
    { icon: FaDiscord, url: "https://discord.com/invite/HTuudQVGzz", color: "text-secondary" },
  ];

  return (
    <header className="relative pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image with Neon Glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full border-glow-primary animate-glow-pulse" />
            <img src= {profileImage}  alt="Giullia Albertini" className="w-48 h-48 rounded-full object-cover border-4 border-primary relative z-10" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-4xl font-bold mb-4 glow-text-secondary tracking-tight">
          GIULLIA ALBERTINI
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text text-primary glow-text-primary font-light mb-8">
          Médica Veterinária | Criadora de Conteúdo | Gamer | Modelo
        </p>
         <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                className={`${social.color} hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={28} strokeWidth={2} />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold glow-primary hover-glow-primary transition-all">Mais Sobre mim 
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;