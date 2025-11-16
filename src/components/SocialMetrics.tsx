import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

type Demographic = { label: string; value: number };

const instagram = {
  followers: "91,8k",
  viewsLastMonth: "462,6k",
  topCities: [
    { label: "Fortaleza", value: 52.5 },
    { label: "São Paulo", value: 11.3 },
    { label: "Rio de Janeiro", value: 9.8 },
    { label: "Outros", value: 26.4 },
  ],
  topCountries: [{ label: "Brasil", value: 99.5 }, { label: "Portugal", value: 0.1 }],
  ages: [
    { label: "25-34", value: 44.3 },
    { label: "18-24", value: 29.1 },
    { label: "35-44", value: 18.7 },
  ],
  male: 51,
  female: 49,
  storiesAvg: "2-10k",
};

const tiktok = {
  followers: "1.1M",
  viewsLastMonth: "294k",
  male: 67,
  female: 32,
  ages: [
    { label: "18-24", value: 49.3 },
    { label: "25-34", value: 36.8 },
    { label: "35-44", value: 8 },
  ],
  topCountries: [{ label: "Brasil", value: 97.9 }, { label: "Portugal", value: 0.6 }],
};

function PercentBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-[hsl(var(--muted))] rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all bg-[hsl(var(--primary))]"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm text-[hsl(var(--muted-foreground))]">
      <span>{label}</span>
      <span className="font-medium text-[hsl(var(--foreground))]">{value}</span>
    </div>
  );
}

export default function SocialMetrics() {
  return (
    <section className="py-16 px-4  text-[hsl(var(--foreground))]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[hsl(var(--primary))]">
          Métricas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instagram Card */}
          <article className="border rounded-xl p-6 bg-[hsl(var(--card))] border-[hsl(var(--border))]">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--sidebar-accent))] shadow-sm">
                <AiOutlineInstagram size={32} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Instagram</p>
                <p className="text-lg font-semibold">{instagram.followers} seguidores</p>
              </div>
            </div>

            <div className="space-y-3">
              <StatRow label="Visualizações (último mês)" value={instagram.viewsLastMonth} />
              <StatRow label="Stories (média)" value={instagram.storiesAvg} />

              {/* Gênero */}
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Gênero</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] mb-1">
                      <span>Homens</span>
                      <span className="font-medium">{instagram.male}%</span>
                    </div>
                    <PercentBar value={instagram.male} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] mb-1">
                      <span>Mulheres</span>
                      <span className="font-medium">{instagram.female}%</span>
                    </div>
                    <PercentBar value={instagram.female} />
                  </div>
                </div>
              </div>
             
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Faixas etárias principais</p>
                <div className="space-y-2">
                  {instagram.ages.map((a) => (
                    <div key={a.label} className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span>{a.label}</span>
                        <span className="font-medium">{a.value}%</span>
                      </div>
                      <PercentBar value={a.value} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cidades */}
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Principais cidades</p>
                <ul className="text-sm space-y-1">
                  {instagram.topCities.map((c) => (
                    <li key={c.label} className="flex justify-between">
                      <span>{c.label}</span>
                      <span className="font-medium">{c.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Países</p>
                <div className="flex gap-2 flex-wrap">
                  {instagram.topCountries.map((c) => (
                    <span
                      key={c.label}
                      className="text-xs px-2 py-1 rounded-full border border-[hsl(var(--border))]"
                    >
                      {c.label} • {c.value}%
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* TikTok Card */}
          <article className="border rounded-xl p-6 bg-[hsl(var(--card))] border-[hsl(var(--border))]">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--sidebar-accent))] shadow-sm">
                <SiTiktok size={32} className="text-[hsl(var(--secondary))]" />
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">TikTok</p>
                <p className="text-lg font-semibold">{tiktok.followers} seguidores</p>
              </div>
            </div>

            <div className="space-y-3">
              <StatRow label="Visualizações (último mês)" value={tiktok.viewsLastMonth} />

              {/* Gênero */}
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Gênero</p>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div>
                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] mb-1">
                      <span>Homens</span>
                      <span className="font-medium">{tiktok.male}%</span>
                    </div>
                    <PercentBar value={tiktok.male} />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] mb-1">
                      <span>Mulheres</span>
                      <span className="font-medium">{tiktok.female}%</span>
                    </div>
                    <PercentBar value={tiktok.female} />
                  </div>
                </div>
              </div>

              {/* Idades */}
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Faixas etárias</p>
                <div className="space-y-2">
                  {tiktok.ages.map((a) => (
                    <div key={a.label} className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span>{a.label}</span>
                        <span className="font-medium">{a.value}%</span>
                      </div>
                      <PercentBar value={a.value} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Países</p>
                <div className="flex gap-2 flex-wrap">
                  {tiktok.topCountries.map((c) => (
                    <span
                      key={c.label}
                      className="text-xs px-2 py-1 rounded-full border border-[hsl(var(--border))]"
                    >
                      {c.label} • {c.value}%
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
