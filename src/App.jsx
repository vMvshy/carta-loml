// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Utils */
const rand = (min, max) => Math.random() * (max - min) + min;

/* ====== CONFIG EDITABLE ====== */
const CANVAS_LINK =
  "https://www.canva.com/design/DAG2w3RKm9A/svHCUSdrYPaiAJ560GicNA/edit?ui=e30";

/* 🎵 PLAYLIST (asegúrate que existan en public/music/) */
const PLAYLIST = [
  "/music/nuestracancion.mp3",
  "/music/segunda.mp3",
];

const BASE = [
  { url: "/imagenes/AxJ-Bar.png", rotate: -8, x: "6%", y: "8%", z: 1 },
  { url: "/imagenes/AxJ-City.png", rotate: 7, x: "70%", y: "12%", z: 2 },
  { url: "/imagenes/Kuromi.jpg", rotate: 12, x: "10%", y: "65%", z: 2 },
  { url: "/imagenes/duocar.png", rotate: -5, x: "72%", y: "62%", z: 1 },
];

const LETTER_PAGES = [
  {
    title: "Lo que siento por ti",
    text: `Sabes... siempre le doy las gracias a Dios por haberte conocido, desde que llegaste a mi vida todo cambio para mejor. Hay algo en ti que simplemente no puedo explicar... tal vez es tu forma de reirte, o la manera en que haces sentir que todo esta bien con solo hablarme... es como esa sensacion de estar justo donde debo estar... como si tu forma de ser tuviera ese "algo" que hace que todo tenga sentido, algo que no sabria describir, pero que me atrapa cada dia... no me hace falta mucho cuando estas tu, literalmente tu presencia es mas que suficiente para que cualquier dia que pase contigo se vuelva especial, y aunque no lo creas, pienso en ti mas de lo que puedes imaginar

Me encanta cuando te emocionas contando algo y se nota en tu voz, ya sea un chisme, una anecdota o cualquier otra cosa que te pase en el dia, y lo unico que hago es escucharte. Se que te lo he dicho muchas veces pero te lo vuelvo a repetir... me encanta tu voz... no se como explicarlo, pero tienes ese algo hipnotizante por asi decirlo, y me derrito cada vez que me hablas... por eso me rio cuando me cuentas cualquier cosa o me dices algo bonito... tienes la habilidad de sacar mi niño interior... y tus ojos... uyyy jsjsjsjs la primera vez que los vi por camara bofff me obsesione contigo jsjsjsjs tienes esa aura coqueta alrededor de ti amoor, y solo desearia poder despertarme todos los dias y ver esos ojos hermosos que tienes... por eso los tengo de wallpaper en el celular, porque siento que realmente me estas mirando y eso solo me motiva mas y mas a seguir mejorando por nuestro futuro...

Me encanta cuando te enojas por tonterias y luego terminas riendote, cuando bromeamos entre los dos y te pones de coqueta conmigo, como me haces reir y sonreir (aunque no lo puedas ver) de una forma que no creia posible...`,
    leftImages: ["/imagenes/Abishy-maincra.png"],
    rightImages: ["/imagenes/lomlmine.png"],
  },
  {
    title: "",
    text: `Gracias por darme la oportunidad de estar en tu vida... gracias por aceptarme como soy y no juzgarme por cualquier tonteria que haga... gracias por confiar en mi y darme la oportunidad de presenciar o conocer tus debilidades, que te sientas tan comoda conmigo al punto de llorar y que sepas que nunca te juzgaria por eso... asi que, desde el fondo de mi corazon te lo digo... gracias por existir 💜

Eres un angel en carne humana que Diosito me dio la oportunidad de conocer cuando mas lo necesitaba, porque creeme que no estaba bien aunque no se notara... y por eso te valoro mucho mas de lo que te imaginas... nunca pienses que me cansare de ti, eso es lo ultimo que tengo en mente... no me atreveria a perder esta oportunidad de haberte conocido por el simple hecho de un sentimiento, eso lo veo como algo estupido e inmaduro, y es un error que muchas parejas cometen porque "no sienten nada" despues de un tiempo al estar repitiendo lo mismo... solo miran el lado emocional y no piensan a futuro o en como arreglar las cosas... yo si quiero un futuro contigo preciosa, y luchare todo lo que pueda para que todo lo que hemos soñado alguna vez se vuelva realidad...`,
    leftImages: ["/imagenes/AxJ-Duo.png"],
    rightImages: ["/imagenes/mylovegta.png"],
  },
  {
    title: "Eres mi lugar seguro",
    text: `Te quiero dar las gracias por ser simplemente tu, por dedicarme tiempo y perdonarme por las tonterias que a veces hago o digo, tienes una presencia unica, radiante y tranquila a un punto que solo me atraes mas y mas... y solo quiero pasar tiempo contigo. No importa lo que pase, tu siempre logras calmar mis pensamientos sin ni siquiera intentarlo y es una de las razones por las que te adoro, te convertiste en mi lugar seguro y eso no lo cambio por nada en este mundo...

A veces me pongo a pensar en como empezo todo... y me doy cuenta de que lo nuestro se fue dando poco a poco, sin presion, sin planes, solo con ganas... y eso para mi lo hace aun mas real`,
    leftImages: ["/imagenes/mineloml.png"],
    rightImages: ["/imagenes/mylovemaincra.png"],
  },
  {
    title: "AMO TODO DE TI",
    text: `Quiero que sepas que realmente te amo... Amo la paz que me das cuando hablo contigo, como si todo el ruido o caos en mi cabeza se apagara y solo estuvieras tu... Amo como haces que lo mas simple se sienta especial, amo lo transparente que eres conmigo, amo tu risa, literal, podria escucharla todo el dia y nunca me cansaria.
Amo cuando me dices "tonto" con esa voz tuya, porque se que lo haces con cariño, amo cuando me dices que me extrañas, amo lo facil que se me hace confiar en ti, amo tu forma de pensar, lo madura y fuerte que eres.
Amo que, aun con tus miedos, sigas siendo tu misma, amo tu forma de querer, tan unica y sincera. Amo como tu presencia cambia mi humor sin esfuerzo, amo cuando te haces la seria aveces cuando te estoy molestando.
AMO TODO DE TI, incluso las cosas pequeñas que quiza tu no notas, y sobre todo lo hermosa que se ve tu alma cuando te expresas conmigo...
Keren, realmente estoy enamorado de ti, y te lo estoy dejando saber atravez de esta pequeñita carta para ti amor, porque te mereces mucho mas... queria tomarme mas tiempo preparando todo y hacerte algo incluso mejor... pero esperar tanto tiempo guardandome todo esto que siento, y mas sabiendo que queria darte un detallito asi como lo has hecho tu, solo me mataba por dentro jsjsjsj
Sinceramente pensaba tener esto listo para el 23 pero se me paso el tiempo jeje, asi que perdoname amor, queria hacerte algo especial para ese dia, pero al final no hice nada... aunque me la pase contigo, y eso fue lo mas importante, mi parte favorita del dia, asi que... aqui voy jejje`,
    leftImages: ["/imagenes/ABISHYMC.png"],
    rightImages: ["/imagenes/bibi.png"],
  },
  {
    // slide propuesta 💍
    title: "KEREN ABIGAIL CARDONA VIDEA💜",
    text: `Despues de todo esto que te dije creo que ya no hace falta adivinarlo jajaja, pero igual te lo digo claro…
Keren, ya creo que es hora de que lo nuestro se vuelva oficial.
Quiero seguir haciendote reir, apoyarte, y con Diosito, vivir todo eso que siempre hablamos, pero de verdad, juntos.
Seguir creciendo contigo, y seguir creando momentos que solo tengan sentido contigo, porque no me imagino todo esto con nadie mas... Así que amor… desde el fondo de mi corazón, con todo lo que siento por ti…`,
    isProposal: true,
    isProposalTitle: true, // <- título glowing
    leftImages: ["/imagenes/AxJ-DuoSupra.png"],
    rightImages: ["/imagenes/LOML2.png"],
  },
  {
    // último slide
    title: "Para ti, solo para ti",
    text: "Cuando termines, toca el corazoncito 💜",
    isFinal: true,
    leftImages: [],
    rightImages: [],
  },
];
/* ====== FIN CONFIG ====== */

/* Tulip */
const Tulip = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
    <defs>
      <linearGradient id="tg1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="tg2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#84cc16" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <path
      d="M32 24c0 18-3 24-3 30 0 2 2 2 2 0 0-6 3-12 3-30 0-2-2-2-2 0z"
      fill="url(#tg2)"
    />
    <path
      d="M29 38c-8 0-12 6-12 12 6-2 11-5 12-12z"
      fill="#22c55e"
      opacity="0.8"
    />
    <path
      d="M35 36c8 0 12 6 12 12-6-2-11-5-12-12z"
      fill="#22c55e"
      opacity="0.7"
    />
    <path
      d="M32 8c-6 0-12 6-12 14 0 7 5 10 12 10s12-3 12-10C44 14 38 8 32 8z"
      fill="url(#tg1)"
    />
    <path
      d="M20 22c6-1 8-4 12-10 4 6 6 9 12 10-2 5-8 8-12 8s-10-3-12-8z"
      fill="#6d28d9"
      opacity="0.5"
    />
  </svg>
);

/* Collage */
function Collage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) =>
      setMouse({
        x: e.clientX / innerWidth - 0.5,
        y: e.clientY / innerHeight - 0.5,
      });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="collage">
      {BASE.map((p, i) => (
        <motion.div
          key={i}
          className="frame"
          style={{ left: p.x, top: p.y, zIndex: p.z, rotate: p.rotate }}
          animate={{
            y: [0, -6, 0],
            rotate: [p.rotate, p.rotate + 1.2, p.rotate],
            x: `calc(${p.x} + ${mouse.x * (p.z * 2)}px)`,
          }}
          transition={{
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={p.url} alt="recuerdo" />
        </motion.div>
      ))}
    </div>
  );
}

/* Música */
function MusicControl({ audioRef }) {
  const [open, setOpen] = useState(false);
  const [vol, setVol] = useState(0.5);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = vol;
  }, [vol, audioRef]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const onToggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
      } catch {}
    } else {
      a.pause();
    }
  };

  return (
    <div className="controls">
      <button
        className="btn"
        onClick={() => {
          setOpen((o) => !o);
          onToggle();
        }}
      >
        🎵 <strong></strong>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="panel glass"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            🔊{" "}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={vol}
              onChange={(e) => setVol(parseFloat(e.target.value))}
            />
            <button className="btn" onClick={onToggle}>
              {playing ? "Pausa" : "Reproducir"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========= CAPA DE CELEBRACIÓN (45s) ========= */
function CelebrationLayer({ show }) {
  // generamos tulipanes flotando y corazoncitos
  const petals = Array.from({ length: 16 }).map(() => ({
    id: crypto.randomUUID(),
    left: rand(0, 100), // vw %
    size: rand(24, 40), // px
    delay: rand(0, 2), // s
    dur: rand(6, 9), // s
    rotateStart: rand(-20, 20),
    rotateEnd: rand(-60, 60),
    kind: Math.random() < 0.5 ? "tulip" : "heart",
  }));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="celebration-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* lluvia romántica */}
          {petals.map((p) => (
            <motion.div
              key={p.id}
              className={`float-thing ${p.kind === "tulip" ? "tulip-shape" : "heart-shape"}`}
              style={{
                left: `${p.left}vw`,
                width: p.size,
                height: p.size,
              }}
              initial={{
                y: "-10vh",
                rotate: p.rotateStart,
                opacity: 0,
              }}
              animate={{
                y: "110vh",
                rotate: p.rotateEnd,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* glow suave arriba de todo */}
          <div className="celebration-glow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ========== Carta dentro de un sobre con slides ========== */
function EnvelopeLetter({ onAcceptedYes }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  // botón "no" que huye
  const [noPos, setNoPos] = useState({ left: "60%", top: "40%" });

  // overlay romántico "ahora eres toda miaa 💜"
  const [acceptedPopup, setAcceptedPopup] = useState(false);

  const current = LETTER_PAGES[page];

  const flee = () => {
    const newLeft = `${rand(20, 70).toFixed(1)}%`;
    const newTop = `${rand(20, 60).toFixed(1)}%`;
    setNoPos({ left: newLeft, top: newTop });
  };

  const sayYes = () => {
    // mostramos overlay interno
    setAcceptedPopup(true);
    // avisamos al App que active el modo celebración de 45s
    onAcceptedYes?.();
  };

  // corazones flotando para el overlay "sí"
  const floatingHearts = Array.from({ length: 20 }).map(() => ({
    id: crypto.randomUUID(),
    left: rand(5, 95),
    delay: rand(0, 1.5),
    dur: rand(2.2, 4.2),
    size: rand(16, 26),
  }));

  // bloque del título (normal / especial glowing para la propuesta)
  const TitleBlock = () => {
    if (!current.title && !current.isProposalTitle) return null;

    if (current.isProposalTitle) {
      return (
        <div className="proposal-title-wrap">
          <motion.div
            className="proposal-title-glow"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168,85,247,.4)",
                "0 0 32px rgba(236,72,153,.6)",
                "0 0 20px rgba(168,85,247,.4)",
              ],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="proposal-name-row">
              <motion.span
                className="proposal-heart-mini"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤
              </motion.span>

              <span className="proposal-name-text">{current.title}</span>

              <motion.span
                className="proposal-heart-mini"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                ❤
              </motion.span>
            </div>

            <div className="proposal-subtext"></div>
          </motion.div>
        </div>
      );
    }

    return <h3 className="letter-title">{current.title}</h3>;
  };

  return (
    <>
      <div className="letter-wrap">
        <div
          className={`envelope ${open ? "open" : ""}`}
          onClick={() => !open && setOpen(true)}
        >
          {/* tapa */}
          <motion.div
            className="flap"
            initial={false}
            animate={{ rotateX: open ? 180 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          {/* sombra papel */}
          <div className="paper-shadow" />

          <AnimatePresence>
            {open && (
              <motion.div
                key={page}
                className="letter glass"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="letter-inner">
                  {/* IZQUIERDA */}
                  <div className="letter-side left">
                    <div className="slot">
                      {current.leftImages?.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt="recuerdo"
                          className="letter-photo"
                          style={{
                            rotate: `${(Math.random() * 10 - 5).toFixed(2)}deg`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div className="letter-content">
                    <TitleBlock />

                    <p className="letter-text">{current.text}</p>

                    {/* PREGUNTA: ¿QUIERES SER MI NOVIA? */}
                    {current.isProposal && (
                      <div className="proposal-area">
                        <div className="proposal-question">
                          ¿Quieres ser mi novia? 💜
                        </div>

                        <div className="proposal-buttons-box">
                          {/* SÍ */}
                          <button onClick={sayYes} className="btn-yes">
                            Sí 💜
                          </button>

                          {/* NO (huye) */}
                          <button
                            onMouseEnter={flee}
                            onMouseDown={flee}
                            onTouchStart={flee}
                            className="btn-no"
                            style={{
                              left: noPos.left,
                              top: noPos.top,
                            }}
                          >
                            No 💔
                          </button>
                        </div>

                        <div className="proposal-hint">
                          (pista: solo hay una respuesta correcta 😌)
                        </div>
                      </div>
                    )}

                    {/* SLIDE FINAL */}
                    {current.isFinal && (
                      <div className="final-action">
                        <a
                          className="heart-link"
                          href={CANVAS_LINK}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="heart" aria-hidden>
                            ❤
                          </span>
                          <span className="msg">
                            Haz click cuando termines
                          </span>
                          <span className="mini-hearts" aria-hidden>
                            ❤ ❤ ❤
                          </span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* DERECHA */}
                  <div className="letter-side right">
                    <div className="slot">
                      {current.rightImages?.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt="recuerdo"
                          className="letter-photo"
                          style={{
                            rotate: `${(Math.random() * 10 - 5).toFixed(2)}deg`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* NAV SLIDES */}
                <div className="letter-nav">
                  <button
                    className="btn"
                    onClick={() =>
                      setPage(
                        (v) =>
                          (v - 1 + LETTER_PAGES.length) %
                          LETTER_PAGES.length
                      )
                    }
                  >
                    ◀
                  </button>

                  <div className="dots">
                    {LETTER_PAGES.map((_, idx) => (
                      <div
                        key={idx}
                        className="dot"
                        style={{
                          background:
                            idx === page
                              ? "#f5d0fe"
                              : "rgba(255,255,255,.35)",
                        }}
                      />
                    ))}
                  </div>

                  <button
                    className="btn"
                    onClick={() =>
                      setPage((v) => (v + 1) % LETTER_PAGES.length)
                    }
                  >
                    ▶
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SELLO (antes de abrir) */}
          {!open && (
            <motion.div
              className="wax-seal"
              animate={{ scale: [1, 1.06, 1], rotate: [0, 2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>❤</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* OVERLAY CUANDO DICE SÍ */}
      <AnimatePresence>
        {acceptedPopup && (
          <motion.div
            className="yes-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setAcceptedPopup(false)}
          >
            <div className="yes-hearts-layer">
              {floatingHearts.map((h) => (
                <div
                  key={h.id}
                  className="yes-heart piece"
                  style={{
                    left: `${h.left}%`,
                    width: h.size + "px",
                    height: h.size + "px",
                    animationDelay: `${h.delay}s`,
                    animationDuration: `${h.dur}s`,
                  }}
                />
              ))}
            </div>

            <div className="yes-card">
              <div className="yes-title">Ahora eres toda miaa 💜</div>
              <p className="yes-desc">
                Jeje sabia que dirias que si... TE AMOOOOOOOOO
                <br />
                Prometo cuidarte, hacerte reír y darte todo el amor que te
                mereces 💜💜💜
              </p>
              <div className="yes-mini-hint">
                (toca para seguir leyendo la carta)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Confetti */
function useConfetti() {
  const layerRef = useRef(null);
  useEffect(() => {
    const el = document.createElement("div");
    el.className = "confettiLayer";
    document.body.appendChild(el);
    layerRef.current = el;
    return () => el.remove();
  }, []);
  const burst = (x, y, count = 32) => {
    const colors = ["#fde68a", "#f0abfc", "#c4b5fd", "#a78bfa", "#e879f9"];
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      const pick = Math.random();
      let shape = "square";
      if (pick < 0.35) shape = "heart";
      else if (pick < 0.7) shape = "circle";
      d.className = "confetti";
      if (shape === "circle") d.classList.add("circle");
      if (shape === "heart") d.classList.add("piece");
      const c = colors[Math.floor(Math.random() * colors.length)];
      d.style.background = c;
      d.style.color = c;
      d.style.left = x + "px";
      d.style.top = y + "px";
      d.style.setProperty("--dx", rand(-120, 120) + "px");
      d.style.setProperty("--dy", rand(-220, -80) + "px");
      d.style.setProperty("--r", rand(-90, 90) + "deg");
      d.style.setProperty("--s", rand(0.7, 1.2));
      d.style.setProperty("--t", rand(0.9, 1.4) + "s");
      layerRef.current.appendChild(d);
      setTimeout(() => d.remove(), 1600);
    }
  };
  return burst;
}

/* Corazones del mouse */
function useMouseHearts() {
  useEffect(() => {
    const layer = document.createElement("div");
    layer.className = "heartsLayer";
    document.body.appendChild(layer);
    let count = 0;
    const onMove = (e) => {
      if (++count % 2) return;
      const h = document.createElement("div");
      h.className = "heart";
      h.style.left = e.clientX + "px";
      h.style.top = e.clientY + "px";
      h.style.color = "#a855f7";
      h.innerHTML =
        '<div class="piece" style="width:18px;height:18px;color:#a855f7;"></div>';
      layer.appendChild(h);
      setTimeout(() => h.remove(), 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      layer.remove();
    };
  }, []);
}

/* -------- Portal estrellado (regalo inicial) -------- */
function StarlitPortalOverlay({ audioRef, onClose }) {
  const [opening, setOpening] = useState(false);
  const burst = useConfetti();

  const stars = useRef(
    Array.from({ length: 110 }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 0.6 + Math.random() * 1.2,
      d: 1.2 + Math.random() * 1.6,
      o: Math.random(),
    }))
  ).current;

  const petals = useRef(
    Array.from({ length: 22 }).map(() => ({
      id: crypto.randomUUID(),
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      delay: Math.random() * 6,
      dur: 8 + Math.random() * 5,
    }))
  ).current;

  const open = () => {
    if (opening) return;
    setOpening(true);
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    burst(cx, cy, 42);
    for (let i = 0; i < 18; i++) {
      burst(cx + rand(-12, 12), cy + rand(-12, 12), 1);
    }
    try {
      if (audioRef.current?.src) audioRef.current.play().catch(() => {});
    } catch {}
    setTimeout(() => onClose?.(), 900);
  };

  return (
    <motion.div
      className="portalOverlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {stars.map((st) => (
        <motion.span
          key={st.id}
          className="starDot"
          style={{
            left: `${st.x}vw`,
            top: `${st.y}vh`,
            scale: st.s,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: st.d,
            repeat: Infinity,
            delay: st.o,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: ["-10vh", "110vh"], rotate: [0, 45, -25, 0] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      <motion.div
        className="portalHalo"
        animate={{
          rotate: opening ? 45 : 0,
          scale: opening ? 1.25 : 1,
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Botón circular para abrir el regalo */}
      <button
        type="button"
        aria-label="abrir"
        className="portalCore no-jump"
        onClick={open}
      >
        <motion.svg
          viewBox="0 0 64 64"
          className="heartLock"
          initial={false}
          animate={
            opening
              ? {
                  scale: [1, 0.9, 0],
                  rotate: [0, -10, 20],
                  opacity: [1, 1, 0],
                }
              : { scale: 1 }
          }
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          <defs>
            <linearGradient id="hl" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            d="M32 12c-7 0-13 5-13 12 0 14 13 18 13 28 0-10 13-14 13-28 0-7-6-12-13-12z"
            fill="url(#hl)"
          />
          <circle cx="32" cy="28" r="4.2" fill="#3b0764" />
        </motion.svg>
        <div className="ring"></div>
      </button>

      <div className="portalFog" />
    </motion.div>
  );
}

/* App */
export default function App() {
  useMouseHearts();

  const audioRef = useRef(null);

  // estado playlist
  const [trackIndex, setTrackIndex] = useState(0);

  // regalo inicial tapado
  const [showGift, setShowGift] = useState(true);

  // CELEBRACIÓN de "sí" (45s)
  const [showCelebration, setShowCelebration] = useState(false);

  // cada vez que cambie trackIndex -> actualizar src y reproducir
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.src = PLAYLIST[trackIndex];
    a.play().catch(() => {});
  }, [trackIndex]);

  // cuando una canción termina -> ir a la siguiente / loop
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const handleEnded = () => {
      setTrackIndex((prev) => {
        const next = prev + 1;
        return next >= PLAYLIST.length ? 0 : next;
      });
    };

    a.addEventListener("ended", handleEnded);
    return () => {
      a.removeEventListener("ended", handleEnded);
    };
  }, []);

  // función que el sobre llama cuando ella dice "Sí 💜"
  const triggerCelebration = () => {
    setShowCelebration(true);

    // apagamos celebración después de 45 segundos
    setTimeout(() => {
      setShowCelebration(false);
    }, 45000); // 45,000 ms = 45s
  };

  return (
    <>
      {/* Fondo base */}
      <div className="bg">
        <div className="gradient"></div>
      </div>
      <div className="dots"></div>

      {/* stage: se pone en modo celebration cuando showCelebration=true */}
      <div
        className={`stage ${showGift ? "conceal" : ""} ${
          showCelebration ? "celebration" : ""
        }`}
      >
        <Collage />
        <MusicControl audioRef={audioRef} />

        <main className="container">
          <div className="row" style={{ marginBottom: 16 }}>
            <div className="badge">♡ Gracias por existir</div>
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 2, -1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Tulip size={44} />
            </motion.div>
          </div>

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Para mi niña hermosa
          </motion.h1>
          <p className="lead">Una pequeña muestra del amor que te tengo</p>

          <div style={{ marginTop: 24 }}>
            {/* le pasamos el callback del SÍ */}
            <EnvelopeLetter onAcceptedYes={triggerCelebration} />
          </div>

          <div className="footer">
            <div className={`love ${showCelebration ? "love-glow" : ""}`}>
              TE AMO KEREN
            </div>
          </div>
        </main>
      </div>

      {/* capa visual extra de celebración (tulipanes, brillos) */}
      <CelebrationLayer show={showCelebration} />

      {/* Portal sorpresa encima (bloquea hasta que lo abra) */}
      <AnimatePresence>
        {showGift && (
          <StarlitPortalOverlay
            audioRef={audioRef}
            onClose={() => setShowGift(false)}
          />
        )}
      </AnimatePresence>

      {/* Audio player (sin loop directo porque hacemos playlist manual) */}
      <audio ref={audioRef} preload="auto" />
    </>
  );
}
