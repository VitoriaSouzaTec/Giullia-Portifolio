import { FaInstagram, FaTiktok, FaTwitch, FaYoutube, FaDiscord,  } from 'react-icons/fa';

const socialLinks = [
  {
    platform: "Instagram",
    icon: FaInstagram,
    text: "Conteúdo",
    url: "https://www.instagram.com/giullia.albertini/",
    glowClass: "border-glow-primary hover-glow-primary",
    bgColor: "bg-primary/10",
  },
  {
    platform: "FaYouTube",
    icon: FaYoutube,
    text: "Gameplays & Reacts",
    url: "https://www.youtube.com/channel/UC4EMD28iH0gL1GG4ZIRNFrw",
    glowClass: "border-glow-secondary hover-glow-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    platform: "TikTok",
    icon: FaTiktok,
    text: "Clips & Humor",
    url: "https://www.tiktok.com/@fenix151617",
    glowClass: "border-glow-primary hover-glow-primary",
    bgColor: "bg-primary/10",
  },
  {
    platform: "Discord",
    icon: FaDiscord,
    text: "Bora x1",
    url: "https://discord.com/invite/HTuudQVGzz",
    glowClass: "border-glow-secondary hover-glow-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    platform: "Twitch",
    icon: FaTwitch,
    text: "Jogos e Transmissões",
    url: "https://www.twitch.tv/fenix151617",
    glowClass: "border-glow-primary hover-glow-primary",
    bgColor: "bg-primary/10",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text-primary">
          Conecte-se Comigo
        </h2>
        
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                className={`block ${link.bgColor} ${link.glowClass} border-2 rounded-xl p-6 transition-all group`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-foreground group-hover:scale-110 transition-transform">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {link.platform}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {link.text}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
