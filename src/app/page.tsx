"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const PHONE_RO = "0745047570";
const EMAIL = "housefenster@gmail.com";
const HERO_LOCAL = "/hero-housefenster.png"; // ✅ acum e PNG real

function waLink(phoneRo: string) {
  const normalized = phoneRo.replace(/\s+/g, "").replace(/^0/, "");
  const text =
    "Salut, sunt interesat(ă) de montaj/reparații termopan. Îți trimit o poză și locația — îmi spui te rog un preț orientativ și când poți veni?";
  return `https://wa.me/40${normalized}?text=${encodeURIComponent(text)}`;
}

type Service = { icon: string; title: string; text: string };
type TimelineItem = { no: number; title: string; text: string };
type FAQ = { q: string; a: string };

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);
  const [imgOk, setImgOk] = useState(true);

  const services: Service[] = useMemo(
    () => [
      { icon: "⚙️", title: "Reglaje profesionale (iarnă/vară)", text: "Ajustări pentru închidere perfectă, eliminare curent, reducere zgomot și uzură." },
      { icon: "🧩", title: "Înlocuire garnituri de etanșare", text: "Schimbăm garnituri uzate pentru etanșare mai bună și pierderi mai mici de căldură." },
      { icon: "🔧", title: "Schimbare feronerie / piese", text: "Înlocuim piese defecte (mânere, balamale, mecanisme) pentru siguranță și durabilitate." },
      { icon: "🪟", title: "Montaj ferestre & uși termopan", text: "Montaj corect, fixare profesională și finisaje curate pentru rezultat premium." },
      { icon: "🦟", title: "Plase țânțari / rulouri", text: "Soluții de confort: plase, rulouri și accesorii potrivite locuinței tale." },
      { icon: "⚡", title: "Mentenanță & intervenții rapide", text: "Rezolvăm rapid: nu se închide, se freacă, bate vântul, scârțâie, se lasă canatul." },
    ],
    []
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
      { no: 1, title: "Ne scrii pe WhatsApp", text: "Trimiți poză + locație + ce problemă are termopanul." },
      { no: 2, title: "Primești estimare", text: "Îți dăm un preț orientativ și un interval pentru intervenție." },
      { no: 3, title: "Venim la tine", text: "Intervenție curată, rapidă, cu atenție la detalii." },
      { no: 4, title: "Testăm împreună", text: "Verificăm închiderea și etanșarea, pe loc." },
    ],
    []
  );

  const faqs: FAQ[] = useMemo(
    () => [
      { q: "Cât durează o intervenție?", a: "De obicei 20–60 min, în funcție de problemă (reglaj, garnituri, feronerie)." },
      { q: "Se poate face reglaj iarnă/vară la orice termopan?", a: "În majoritatea cazurilor, da — depinde de tipul de feronerie. Verificăm pe loc." },
      { q: "Dacă trebuie schimbată o piesă?", a: "Îți spunem exact ce piesă e necesară și opțiunile. Montajul se face rapid, curat." },
      { q: "Cum primesc ofertă rapid?", a: "Cel mai simplu: WhatsApp cu o poză + localitate + ce se întâmplă (curent, nu se închide, etc.)." },
    ],
    []
  );

  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return (
    <main>
      <div className="auroraWrap" aria-hidden="true">
        <div className="aurora" />
      </div>

      {/* NAV */}
      <div className="nav">
        <div className="container">
          <div className="navInner">
            <div className="brand">
              <div className="brandLogo">
                <Image
                  src="/logo-housefenster.png"
                  alt="House Fenster logo"
                  width={34}
                  height={34}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div>
                <div className="brandTitle">House Fenster</div>
                <div className="brandSub">Montaj & Reparații Termopane</div>
              </div>
            </div>

            <div className="navLinks">
              <a className="link" href="#servicii">Servicii</a>
              <a className="link" href="#proces">Proces</a>
              <a className="link" href="#faq">FAQ</a>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <a className="btn ghost hideMobile" href={`tel:${PHONE_RO}`}>Sună</a>
              <a className="btn primary" href={waLink(PHONE_RO)} target="_blank" rel="noreferrer noopener">
                WhatsApp <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="grid">
            {/* LEFT */}
            <motion.div
              className="card heroLeft"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="heroBgGlow" />
              <span className="badge"><i /> Intervenții rapide • Montaj & reparații termopane</span>

              <h1 className="h1">
                Termopane care se închid perfect.
                <br />
                <span style={{ opacity: 0.92 }}>Reglaje, garnituri, feronerie, montaj.</span>
              </h1>

              <p className="sub">
                Rezolvăm rapid problemele uzuale: curent, zgomot, frecare, închidere grea.
                Trimite o poză pe WhatsApp și îți spunem imediat ce se poate face.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                <a className="btn primary" href={waLink(PHONE_RO)} target="_blank" rel="noreferrer noopener">
                  Cere ofertă pe WhatsApp <span aria-hidden>→</span>
                </a>
                <a className="btn" href={`tel:${PHONE_RO}`}>Sună acum</a>
                <a className="btn" href={`mailto:${EMAIL}`}>Email</a>
              </div>

              <div className="pills">
                <span className="pill"><b>✔</b> Reglaje iarnă/vară</span>
                <span className="pill"><b>✔</b> Garnituri & etanșare</span>
                <span className="pill"><b>✔</b> Feronerie / piese</span>
                <span className="pill"><b>✔</b> Plase țânțari</span>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="card heroRight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              {imgOk ? (
                <motion.div style={{ position: "absolute", inset: 0, y: imgY }}>
                  <Image
                    src={HERO_LOCAL}
                    alt="Montaj și reparații termopane"
                    fill
                    priority
                    sizes="(max-width: 920px) 92vw, 520px"
                    style={{ objectFit: "cover", transform: "scale(1.04)" }}
                    onError={() => setImgOk(false)}
                  />
                </motion.div>
              ) : (
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(76,195,255,.20), rgba(255,211,106,.14), rgba(0,0,0,.35))" }} />
              )}

              <div className="heroImgOverlay" />

              <div style={{ position: "absolute", left: 16, right: 16, bottom: 16 }}>
                <div className="card" style={{ background: "rgba(0,0,0,.25)", borderColor: "rgba(255,255,255,.14)", padding: 16 }}>
                  <div className="kicker">Contact rapid</div>
                  <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontWeight: 900 }}>Eugen Drăghici</div>
                      <div className="small" style={{ marginTop: 2 }}>House Fenster</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 900 }}>{PHONE_RO}</div>
                      <div className="small" style={{ marginTop: 2 }}>{EMAIL}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hr" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="servicii">
        <div className="container">
          <div className="kicker">Servicii</div>
          <h2 className="h2">Ce facem pentru tine</h2>
          <p className="sub">Totul simplu: ne trimiți o poză, îți spunem ce e de făcut și venim pregătiți.</p>

          <div className="grid cards3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="icon">{s.icon}</div>
                <div className="cardTitle">{s.title}</div>
                <div className="small">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="proces" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="kicker">Proces</div>
          <h2 className="h2">Cum lucrăm</h2>
          <p className="sub">Timeline simplu. Fără bătăi de cap.</p>

          <div className="timeline">
            {timeline.map((t) => (
              <div key={t.title} className="tItem">
                <div className="tDot">{t.no}</div>
                <div className="tBody">
                  <b>{t.title}</b>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="kicker">Întrebări</div>
          <h2 className="h2">FAQ</h2>
          <p className="sub">Răspunsuri scurte. Dacă ai altceva, scrie direct pe WhatsApp.</p>

          <div className="grid faqGrid">
            {faqs.map((f, idx) => (
              <div key={f.q} className="card">
                <button className="faqBtn" onClick={() => setOpen(open === idx ? null : idx)} aria-expanded={open === idx} type="button">
                  {f.q}
                  <span>{open === idx ? "–" : "+"}</span>
                </button>
                {open === idx && <div className="small" style={{ marginTop: 10 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <b style={{ color: "rgba(255,255,255,.88)" }}>House Fenster</b> — demo landing page pentru portofoliu.
              <div style={{ marginTop: 6 }}>Contact: {PHONE_RO} • {EMAIL}</div>
            </div>
            <div className="small" style={{ marginTop: 0 }}>
              Realizat de Advance Fortify (demo).
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div className="stickyCta" role="region" aria-label="Contact rapid">
        <div className="stickyRow">
          <div className="stickyText">
            <b>Ai o problemă cu termopanul?</b> Trimite poză + locație pe WhatsApp și îți răspundem rapid.
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <a className="btn ghost" href={`tel:${PHONE_RO}`}>Sună</a>
            <a className="btn primary" href={waLink(PHONE_RO)} target="_blank" rel="noreferrer noopener">
              WhatsApp <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
