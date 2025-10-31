// @ts-nocheck
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ========= utils ========= */
const rand = (min, max) => Math.random() * (max - min) + min;

/* ========= CONFIG EDITABLE ========= */
const CANVAS_LINK =
  "https://open.spotify.com/playlist/7uyh0SmhIhVU5413Pd7hG1?si=e99208a142654935&pt=f66f539485c2a7270bfd4910ccd77f96";

const PLAYLIST = ["/music/llegaste-tu.mp3", "/music/solamente-tu.mp3", "/music/solo-para-ti.mp3"];

const STICKER_SRCS = [
  "/stickers/kuromi-heart.png",
  "/stickers/kuromi-cute.png",
  "/stickers/harry-fly.png",
];

const BASE = [
  { url: "/imagenes/AxJ-Bar.png", rotate: -8, x: "6%", y: "8%", z: 1 },
  { url: "/imagenes/AxJ-City.png", rotate: 7, x: "70%", y: "12%", z: 2 },
  { url: "/imagenes/Kuromi.jpg", rotate: 12, x: "10%", y: "65%", z: 2 },
  { url: "/imagenes/duocar.png", rotate: -5, x: "72%", y: "62%", z: 1 },
];

/* ========= PÁGINAS DE LA CARTA ========= */
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
    text: `Quiero que sepas que realmente te amo... Pero como no amarte cuando amo la paz que siento cuando hablo contigo, como si todo el ruido o caos en mi cabeza se apagara y solo estuvieras tu... Como haces que lo mas simple se sienta especial, y lo transparente que eres conmigo. Amo tu risa, literal, podria escucharla todo el dia y nunca me cansaria...

Amo cuando me dices "tonto" con esa voz tuya, porque se que lo haces con cariño, amo cuando me dices que me extrañas, amo lo facil que se me hace confiar en ti, amo tu forma de pensar, lo madura y fuerte que eres.

Amo que, aun con tus miedos, sigas siendo tu misma, amo tu forma de querer, tan unica y sincera, como tu presencia cambia mi humor sin esfuerzo, y como te haces la seria aveces cuando te estoy molestando.

AMO TODO DE TI, incluso las cosas pequeñas que quiza tu no notas, y sobre todo lo hermosa que se ve tu alma cuando te expresas conmigo...

Keren, estoy enamorado de ti, y te lo estoy dejando saber atravez de esta pequeñita carta para ti amor, porque te mereces mucho mas... queria tomarme mas tiempo preparando todo y hacerte algo incluso mejor... pero esperar tanto tiempo guardandome todo esto que siento, y mas sabiendo que queria darte un detallito asi como lo has hecho tu, solo me mataba por dentro jsjsjsj

Sinceramente pensaba tener esto listo para el 23 pero se me paso el tiempo jeje, asi que perdoname amor, queria hacerte algo especial para ese dia, pero al final no hice nada... aunque me la pase contigo, y eso fue lo mas importante, mi parte favorita del dia, asi que... aqui voy jejje`,
    leftImages: ["/imagenes/ABISHYMC.png"],
    rightImages: ["/imagenes/bibi.png"],
  },
  {
    title: "KEREN ABIGAIL CARDONA VIDEA💜",
    text: `Despues de todo esto que te dije creo que ya no hace falta adivinarlo jajaja, pero igual te lo digo claro…
Keren, quiero que seas mi compañera, mi mejor amiga, mi todo... 
Que sigas siendo esa persona especial en mi vida que me hace querer ser mejor cada dia, y que me inspira a seguir adelante, incluso en los dias mas dificiles...
Quiero seguir haciendote reir, apoyarte, y con Diosito, vivir todo eso que siempre hablamos, pero de verdad, juntos.
Seguir creciendo contigo, y seguir creando momentos que solo tengan sentido contigo, porque no me imagino todo esto con nadie mas...
No se en que momento llegaste a importarme tanto, pero aqui estoy, completamente seguro de lo que quiero contigo... y es por eso que hoy te pregunto...`,
    isProposal: true,
    isProposalTitle: true,
    leftImages: ["/imagenes/AxJ-DuoSupra.png"],
    rightImages: ["/imagenes/LOML2.png"],
  },
  {
    title: "Un pequeño detalle 💜",
    text: "Busca una pequeña sopresa por la pantalla.",
    isFinal: true,
    leftImages: [],
    rightImages: [],
  },
];

/* ========================= */
/*   COMPONENTES VISUALES   */
/* ========================= */

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

/* ⭐ fondo estrellas fijas */
function StarField() {
  const stars = Array.from({ length: 120 }).map(() => ({
    id: crypto.randomUUID(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    s: 0.6 + Math.random() * 1.2,
    d: 1.2 + Math.random() * 1.6,
    o: Math.random(),
  }));

  return (
    <div className="starfield-layer">
      {stars.map((st) => (
        <motion.span
          key={st.id}
          className="bgStarDot"
          style={{ left: `${st.x}vw`, top: `${st.y}vh`, scale: st.s }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: st.d,
            repeat: Infinity,
            delay: st.o,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* stickers flotando */
function StickerLayer() {
  const stickersRef = useRef(
    Array.from({ length: 8 }).map(() => {
      const src =
        STICKER_SRCS[Math.floor(Math.random() * STICKER_SRCS.length)];
      return {
        id: crypto.randomUUID(),
        xStart: rand(0, 100),
        yStart: rand(0, 100),
        driftX: rand(-15, 15),
        driftY: rand(-15, 15),
        rot0: rand(-8, 8),
        rot1: rand(-14, 14),
        size: rand(40, 70),
        dur: rand(8, 12),
        delay: rand(0, 4),
        src,
      };
    })
  );

  return (
    <div className="stickers-layer">
      {stickersRef.current.map((st) => (
        <motion.img
          key={st.id}
          src={st.src}
          className="sticker"
          style={{
            left: `${st.xStart}vw`,
            top: `${st.yStart}vh`,
            width: st.size + "px",
            height: "auto",
          }}
          initial={{ x: 0, y: 0, rotate: st.rot0, opacity: 0.3 }}
          animate={{
            x: [0, st.driftX, 0],
            y: [0, st.driftY, 0],
            rotate: [st.rot0, st.rot1, st.rot0],
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: st.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: st.delay,
          }}
        />
      ))}
    </div>
  );
}

/* collage flotante */
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
    <div className="collage" style={{ zIndex: 1 }}>
      {BASE.map((p, i) => (
        <motion.div
          key={i}
          className="frame"
          style={{
            left: p.x,
            top: p.y,
            zIndex: p.z,
            rotate: p.rotate,
          }}
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
function MusicControl({ audioRef, onPrevTrack, onNextTrack }) {
  const [open, setOpen] = useState(false);
  const [vol, setVol] = useState(0.5);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
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

  const onTogglePlayPause = async () => {
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
      <button className="btn" onClick={() => setOpen((o) => !o)}>
        🎵
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="panel"
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
              style={{ width: "110px" }}
            />
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                marginTop: "8px",
                justifyContent: "center",
              }}
            >
              <button
                className="btn"
                style={{ padding: "6px 10px" }}
                onClick={onPrevTrack}
              >
                {"<"}
              </button>

              <button
                className="btn"
                style={{ padding: "6px 10px" }}
                onClick={onTogglePlayPause}
              >
                {playing ? "||" : "▶"}
              </button>

              <button
                className="btn"
                style={{ padding: "6px 10px" }}
                onClick={onNextTrack}
              >
                {">"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* CAPA CELEBRATION 45s */
function CelebrationLayer({ show }) {
  const petals = Array.from({ length: 16 }).map(() => ({
    id: crypto.randomUUID(),
    left: rand(0, 100),
    size: rand(24, 40),
    delay: rand(0, 2),
    dur: rand(6, 9),
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
          {petals.map((p) => (
            <motion.div
              key={p.id}
              className={`float-thing ${
                p.kind === "tulip" ? "tulip-shape" : "heart-shape"
              }`}
              style={{
                left: `${p.left}vw`,
                width: p.size,
                height: p.size,
              }}
              initial={{ y: "-10vh", rotate: p.rotateStart, opacity: 0 }}
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

          <div className="celebration-glow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====================== */
/*  GAME 1: drag hearts   */
/* ====================== */

function GameHearts({ onDone }) {
  const [placed, setPlaced] = useState([]);
  const hearts = [
    { id: "h1", color: "#e879f9" },
    { id: "h2", color: "#a78bfa" },
    { id: "h3", color: "#c084fc" },
  ];

  function handleDragStart(e, id) {
    e.dataTransfer.setData("heart-id", id);
  }

  function handleDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("heart-id");
    if (!id) return;
    if (!placed.includes(id)) {
      const newPlaced = [...placed, id];
      setPlaced(newPlaced);
      if (newPlaced.length === hearts.length) {
        setTimeout(() => {
          onDone?.();
        }, 800);
      }
    }
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div className="game-card drag-wrapper">
      <div className="game-title">1 / 3 — Corazones al sobre 💌</div>
      <div className="game-desc">
        Arrastra los 3 corazoncitos dentro del sobre. Cuando entren todos,
        pasas al siguiente...
      </div>

      <div className="drag-zone">
        <div className="drag-hearts">
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              className={`drag-heart piece ${
                placed.includes(h.id) ? "drag-heart-done" : ""
              }`}
              draggable={!placed.includes(h.id)}
              onDragStart={(e) => handleDragStart(e, h.id)}
              style={{
                color: h.color,
                opacity: placed.includes(h.id) ? 0.3 : 1,
              }}
              animate={{
                y: [0, -6, 0],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div
          className="drop-target"
          onDragOver={allowDrop}
          onDrop={handleDrop}
        >
          <div className="drop-envelope-top" />
          <div className="drop-body">
            <div className="drop-msg">
              <div className="drop-text">Ponlos aquí 💜</div>
              <div className="drop-count">
                {placed.length} / {hearts.length}
              </div>
            </div>
          </div>
          <div className="drop-glow" />
        </div>
      </div>
    </div>
  );
}

/* ====================== */
/*  GAME 2: adivinanza    */
/* ====================== */

function GameRiddle({ onCorrect }) {
  const [answered, setAnswered] = useState(false);
  const [wrong, setWrong] = useState(false);

  const options = [
    "Tu carita hermosa",
    "Tu voz",
    "Tus ojitos",
    "Todo", // correcta
  ];

  function pick(opt) {
    if (opt === "Todo") {
      setAnswered(true);
      setWrong(false);
      setTimeout(() => {
        onCorrect?.();
      }, 900);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 1200);
    }
  }

  return (
    <div className="game-card riddle-wrapper">
      <div className="game-title">2 / 3 — Adivina ✨</div>

      <div className="game-question">¿Qué es lo que más amo de ti?</div>

      <div className="riddle-options">
        {options.map((o) => (
          <button
            key={o}
            className={`riddle-btn ${answered ? "riddle-disabled" : ""}`}
            onClick={() => !answered && pick(o)}
          >
            {o}
          </button>
        ))}
      </div>

      <div
        className={`riddle-feedback ${
          answered ? "riddle-correct" : wrong ? "riddle-wrong" : ""
        }`}
      >
        {answered
          ? "Obvioooooooo💜"
          : wrong
          ? "Nop, intenta otra vez preciosa 😌"
          : "Elige una opción"}
      </div>
    </div>
  );
}

/* ====================== */
/*  GAME 3: AHORCADO LOVE */
/* ====================== */

function GameHangman({ onFinishAll }) {
  
  const rounds = [
    {
      word: "IMÁN",
      displayWord: "IMÁN",
      hint: "Lo que me llevó hacia ti.",
    },
    {
      word: "UNIVERSO",
      displayWord: "UNIVERSO",
      hint: "Donde caben nuestros planes.",
    },
    {
      word: "SOLAMENTE TÚ",
      displayWord: "SOLAMENTE TÚ",
      hint: "Mi centro.",
    },
  ];

  const normalize = (s) =>
    s
      .toUpperCase()
      .replace(/Á/g, "A")
      .replace(/É/g, "E")
      .replace(/Í/g, "I")
      .replace(/Ó/g, "O")
      .replace(/Ú/g, "U")
      .replace(/Ü/g, "U")
      .replace(/Ñ/g, "Ñ");

  const [roundIndex, setRoundIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [fails, setFails] = useState(0);
  const [streakFails, setStreakFails] = useState(0);
  const [finishedAll, setFinishedAll] = useState(false);

  const current = rounds[roundIndex];
  const targetNorm = normalize(current.word);
  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

  const revealed = current.displayWord
    .split("")
    .map((ch) => {
      if (ch === " ") return " ";
      const norm = normalize(ch);
      return guessedLetters.includes(norm) ? ch : "_";
    })
    .join("");

  const isComplete = !revealed.includes("_");

  useEffect(() => {
    if (isComplete && !finishedAll) {
      if (roundIndex < rounds.length - 1) {
        const t = setTimeout(() => {
          setRoundIndex((i) => i + 1);
          setGuessedLetters([]);
          setFails(0);
          setStreakFails(0);
        }, 1200);
        return () => clearTimeout(t);
      } else {
        // terminó TODO
        const t = setTimeout(() => {
          setFinishedAll(true);
          onFinishAll?.(); // dispara overlay final
        }, 1200);
        return () => clearTimeout(t);
      }
    }
  }, [
    isComplete,
    roundIndex,
    rounds.length,
    finishedAll,
    onFinishAll,
    setRoundIndex,
    setGuessedLetters,
    setFails,
    setStreakFails,
  ]);

  function revealRandomLetter() {
    const chars = current.displayWord.split("");
    const hiddenCandidates = [];
    chars.forEach((ch) => {
      if (ch === " ") return;
      const norm = normalize(ch);
      if (!guessedLetters.includes(norm)) {
        hiddenCandidates.push(norm);
      }
    });
    if (hiddenCandidates.length === 0) return;
    const pick =
      hiddenCandidates[Math.floor(Math.random() * hiddenCandidates.length)];
    setGuessedLetters((prev) => [...prev, pick]);
  }

  function guess(letter) {
    if (finishedAll) return;
    if (guessedLetters.includes(letter)) return;

    if (targetNorm.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      setStreakFails(0);
    } else {
      const newFails = fails + 1;
      const newStreak = streakFails + 1;
      setFails(newFails);
      setStreakFails(newStreak);

      if (newStreak >= 3) {
        setTimeout(() => {
          revealRandomLetter();
          setStreakFails(0);
        }, 400);
      }
    }
  }

  return (
  <div className="games-wrapper">
    {/* Cuadro con los juegos */}
    <div className={`game-card hang-wrapper ${finishedAll ? 'hidden' : ''}`}>
      {!finishedAll ? (
        <>
          <div className="game-title">
            3 / 3 — Palabra {roundIndex + 1} de {rounds.length}
          </div>

          <div className="hang-hint-row">
            <div className="hang-hint-label">Pista:</div>
            <div className="hang-hint-text">{current.hint}</div>
          </div>

          <div className="hang-word">
            {revealed.split("").map((ch, i) => (
              <span
                key={i}
                className={`hang-char ${ch === " " ? "hang-space" : ""}`}
              >
                {ch}
              </span>
            ))}
          </div>

          <div className="hang-tries">Fallos: {fails}</div>

          <div className="hang-letters">
            {alphabet.map((ltr) => (
              <button
                key={ltr}
                className={`hang-letter-btn ${
                  guessedLetters.includes(ltr) ? "hang-used" : ""
                }`}
                onClick={() => guess(ltr)}
                disabled={guessedLetters.includes(ltr)}
              >
                {ltr}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="hang-final">
          {/* Ya no mostramos nada de los juegos aquí */}
        </div>
      )}
    </div>

  </div>
);


}

/* ========================= */
/* FINAL CONSTELLATION OVERLAY */
/* =========================
   cambios:
   - NO se cierra con click en toda la pantalla
   - quitamos la polyline (línea blanca)
   - las estrellas del corazón parpadean y parecen parte del mismo cielo
   - texto principal más grande/golpe visual
   - bloque extra abajo para explicar el significado
*/

function FinalConstellationOverlay({ visible }) {
  // puntos del corazón (formato % en un box virtual 100x70)
  const HEART_POINTS = [
    { x: 46, y: 38 },
    { x: 44.5, y: 35.5 },
    { x: 43, y: 33 },
    { x: 41.5, y: 31.5 },
    { x: 40, y: 30.5 },
    { x: 38.5, y: 30 },
    { x: 37, y: 30 },
    { x: 35.5, y: 30.5 },
    { x: 34, y: 31.5 },
    { x: 32.8, y: 33 },
    { x: 31.8, y: 35 },
    { x: 31.3, y: 37.5 },
    { x: 31.5, y: 40 },
    { x: 32.2, y: 42.5 },
    { x: 33.5, y: 45 },
    { x: 35.2, y: 47.5 },
    { x: 37.2, y: 50 },
    { x: 39.4, y: 52.5 },
    { x: 41.8, y: 55 },
    { x: 44.2, y: 57.5 },
    { x: 46.6, y: 60 },
    { x: 49, y: 62.5 },
    { x: 50, y: 63.5 }, // punta
    { x: 51, y: 62.5 },
    { x: 53.4, y: 60 },
    { x: 55.8, y: 57.5 },
    { x: 58.2, y: 55 },
    { x: 60.6, y: 52.5 },
    { x: 62.8, y: 50 },
    { x: 64.8, y: 47.5 },
    { x: 66.5, y: 45 },
    { x: 67.8, y: 42.5 },
    { x: 68.5, y: 40 },
    { x: 68.7, y: 37.5 },
    { x: 68.2, y: 35 },
    { x: 67.2, y: 33 },
    { x: 66, y: 31.5 },
    { x: 64.5, y: 30.5 },
    { x: 63, y: 30 },
    { x: 61.5, y: 30 },
    { x: 60, y: 30.5 },
    { x: 58.5, y: 31.5 },
    { x: 57, y: 33 },
    { x: 55.5, y: 35.5 },
    { x: 54, y: 38 },
    { x: 50, y: 39.5 },
    { x: 46, y: 38 },
  ];

  // estrellas de fondo (galaxia general)
  const bgStars = useRef(
    Array.from({ length: 180 }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 0.4 + Math.random() * 1.2,
      d: 1.2 + Math.random() * 1.8,
      o: Math.random() * 1.5,
    }))
  ).current;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="final-constellation-layer"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background:
              "radial-gradient(circle at 50% 40%, rgba(20,0,40,.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 80%)",
            pointerEvents: "none",
            color: "#fff",
            textAlign: "center",
            fontFamily: "inherit",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* todas las estrellitas random del universo */}
          {bgStars.map((st) => (
            <motion.span
              key={st.id}
              style={{
                position: "fixed",
                left: `${st.x}vw`,
                top: `${st.y}vh`,
                width: "2px",
                height: "2px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 6px rgba(255,255,255,.8),0 0 20px rgba(167,139,250,.4)",
                opacity: 0.9,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, st.s, 1],
              }}
              transition={{
                duration: st.d,
                repeat: Infinity,
                ease: "easeInOut",
                delay: st.o,
              }}
            />
          ))}

          {/* corazón hecho con estrellas parpadeando */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "150vw",  // Aumentamos el tamaño del corazón
              maxWidth: "2000px",  // Máxima anchura del corazón
              minWidth: "300px",
              aspectRatio: "1 / 0.8",
              transform: "translate(-50%, -50%)",
            }}
          >
            {HEART_POINTS.map((p, idx) => (
              <motion.span
                key={idx}
                style={{
                  position: "absolute",
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  boxShadow:
                    "0 0 8px rgba(255,255,255,.9),0 0 24px rgba(232,121,249,.8),0 0 48px rgba(167,139,250,.6)",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 1.5,
                }}
              />
            ))}

            {/* Botón K + J en el CENTRO del corazón */}
            <motion.a
              href={CANVAS_LINK}
              target="_blank"
              rel="noreferrer"
              style={{
                position: "absolute",
                left: "48%",
                top: "48%", // Ajustado más abajo de la punta
                transform: "translate(-50%, -50%)",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "14px",
                color: "#fff",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(124,58,237,1) 0%, rgba(59,7,100,1) 60%)",
                border: "1px solid rgba(255,255,255,.4)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,.9), 0 0 20px rgba(255,255,255,.8), 0 0 60px rgba(167,139,250,.8)",
                padding: "10px 14px",
                borderRadius: "10px",
                lineHeight: 1,
                pointerEvents: "auto",
              }}
              animate={{
                boxShadow: [
                  "0 0 12px rgba(255,255,255,.9), 0 0 32px rgba(232,121,249,.8), 0 0 80px rgba(124,58,237,.6)",
                  "0 0 4px rgba(255,255,255,.5), 0 0 16px rgba(232,121,249,.5), 0 0 40px rgba(124,58,237,.4)",
                  "0 0 12px rgba(255,255,255,.9), 0 0 32px rgba(232,121,249,.8), 0 0 80px rgba(124,58,237,.6)",
                ],
                textShadow: [
                  "0 0 8px rgba(255,255,255,1),0 0 24px rgba(232,121,249,.8)",
                  "0 0 4px rgba(255,255,255,.6),0 0 12px rgba(232,121,249,.4)",
                  "0 0 8px rgba(255,255,255,1),0 0 24px rgba(232,121,249,.8)",
                ],
                scale: [1, 1.07, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              K + J
            </motion.a>
          </div>

          {/* título/frase arriba - más grande, más glow */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              right: 0,
              fontWeight: 700,
              fontSize: "26px", // Aumentado el tamaño
              lineHeight: 1.4,
              textShadow:
                "0 0 20px rgba(255,255,255,.9),0 0 30px rgba(167,139,250,1),0 0 80px rgba(232,121,249,.8)",
            }}
          >
            <div>Un imán en medio del universo...</div>
            <div>Solamente tú.</div>
          </div>

          {/* significado / explicación debajo */}
          <div
            className="final-meaning"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "12vh", // Ajustado un poco más arriba
              transform: "translateX(-50%)",
              width: "90vw",
              maxWidth: "500px",
              fontSize: "15px", // Aumentada la fuente
              lineHeight: 1.5,
              fontWeight: 400,
              color: "rgba(255,255,255,.9)",
              textShadow:
                "0 0 6px rgba(255,255,255,.6),0 0 20px rgba(167,139,250,.7),0 0 40px rgba(232,121,249,.4)",
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            Un imán, porque, sin importar lo que pase, siempre me atraes hacia ti con tu forma de ser. En medio del universo, porque aunque haya tantas cosas a mi alrededor, tú eres mi foco, mi centro, mi todo. Y solamente tú… porque no hay lugar en mi vida para nadie más, solo para ti. ILYSM! 💜
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


/* ====================== */
/* WRAPPER GENERAL JUEGOS */
/* ====================== */

function GamesHub({ onAllDone }) {
  const [phase, setPhase] = useState(1); // 1 drag, 2 riddle, 3 hangman

  return (
    <div className="games-wrapper">
      {phase === 1 && (
        <GameHearts
          onDone={() => {
            setPhase(2);
          }}
        />
      )}

      {phase === 2 && (
        <GameRiddle
          onCorrect={() => {
            setPhase(3);
          }}
        />
      )}

      {phase === 3 && (
        <GameHangman
          onFinishAll={() => {
            onAllDone?.();
          }}
        />
      )}
    </div>
  );
}

/* ====================== */
/*       CARTA / LOVE     */
/* ====================== */

function EnvelopeLetter({ onAcceptedYes }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [noPos, setNoPos] = useState({ left: "60%", top: "40%" });
  const [acceptedPopup, setAcceptedPopup] = useState(false);

  const current = LETTER_PAGES[page];

  const flee = () => {
    const newLeft = `${rand(20, 70).toFixed(1)}%`;
    const newTop = `${rand(20, 60).toFixed(1)}%`;
    setNoPos({ left: newLeft, top: newTop });
  };

  const sayYes = () => {
    setAcceptedPopup(true);
    onAcceptedYes?.();
  };

  const floatingHearts = Array.from({ length: 20 }).map(() => ({
    id: crypto.randomUUID(),
    left: rand(5, 95),
    delay: rand(0, 1.5),
    dur: rand(2.2, 4.2),
    size: rand(16, 26),
  }));

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

          {/* glow dentro */}
          <div className="paper-shadow" />

          {/* carta */}
          <AnimatePresence>
            {open && (
              <motion.div
                key={page}
                className="letter"
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
                            rotate: `${(Math.random() * 10 - 5).toFixed(
                              2
                            )}deg`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div className="letter-content">
                    <TitleBlock />

                    <p className="letter-text">{current.text}</p>

                    {/* PREGUNTA */}
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
                      <div className="final-action-hint">
                        <em style={{ opacity: 0.7 }}>
                          
                        </em>
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
                            rotate: `${(Math.random() * 10 - 5).toFixed(
                              2
                            )}deg`,
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

          {/* SELLO */}
          {!open && (
            <motion.div
              className="wax-seal"
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 2, 0],
              }}
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

      {/* OVERLAY "dijo que sí" */}
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
              <div className="yes-title">
                Jeje sabia que dirias que si... (No tenias opcion)💜
              </div>
              <p className="yes-desc">
                AHORA ERES TODAAA MIAAAAA MUAJAJAJAJAJJA TE AMOOOOOOOOO
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

/* ====================== */
/* confetti helper        */
/* ====================== */

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

/* corazones que siguen el mouse */
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

/* Portal inicial */
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

  const openPortal = () => {
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
          style={{ left: `${st.x}vw`, top: `${st.y}vh`, scale: st.s }}
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
          animate={{
            y: ["-10vh", "110vh"],
            rotate: [0, 45, -25, 0],
          }}
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

      <button
        type="button"
        aria-label="abrir"
        className="portalCore no-jump"
        onClick={openPortal}
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

/* ================= */
/*      APP         */
/* ================= */

export default function App() {
  useMouseHearts();

  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);

  // portal bloqueando
  const [showGift, setShowGift] = useState(true);

  // lluvia 45s cuando dice que sí
  const [showCelebration, setShowCelebration] = useState(false);

  // aparece el ? después que ella dice que sí
  const [secretQ, setSecretQ] = useState(null); // { x, y, visible }

  // pantalla de juegos
  const [showGames, setShowGames] = useState(false);
  const [finishedAll, setFinishedAll] = useState(false);

  // overlay final corazón gigante
  const [showFinalOverlay, setShowFinalOverlay] = useState(false);

  // soltar el “?” en posición aleatoria
  const dropSecretQuestion = () => {
    const x = rand(8, 88); // vw
    const y = rand(12, 80); // vh
    setSecretQ({ x, y, visible: true });
  };

  // cargar / reproducir canción actual cuando cambie trackIndex
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.src = PLAYLIST[trackIndex];
    a.play().catch(() => {});
  }, [trackIndex]);

  // cuando termina la canción -> próxima
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

  // celebración 45s cuando ella dice que sí 💜 + mostrar "?"
  const triggerCelebration = () => {
    setShowCelebration(true);
    dropSecretQuestion(); // aparece el "?"

    setTimeout(() => {
      setShowCelebration(false);
    }, 45000);
  };

  // siguiente / anterior canción
  const nextTrack = () => {
    setTrackIndex((i) => {
      const n = i + 1;
      return n >= PLAYLIST.length ? 0 : n;
    });
  };
  const prevTrack = () => {
    setTrackIndex((i) => {
      const n = i - 1;
      return n < 0 ? PLAYLIST.length - 1 : n;
    });
  };

  // click en el "?" misterioso -> mostrar juegos y ocultar carta
  const onSecretClick = () => {
    setShowGames(true);
  };

  // cuando termina TODO el juego del ahorcado -> mostrar overlay final
  const onGamesAllDone = () => {
    // marcamos que terminaron TODOS los juegos para ocultar la capa de juegos
    setFinishedAll(true);
    setShowFinalOverlay(true);
  };

  return (
    <>
      {/* fondo morado base */}
      <div className="bg-base" />

      {/* estrellas permanentes */}
      <StarField />

      {/* STAGE principal (carta y todo) - se oculta si showGames === true */}
      {!showGames && (
        <div
          className={`stage ${showGift ? "conceal" : ""} ${
            showCelebration ? "celebration" : ""
          }`}
        >
          {/* stickers flotando atrás */}
          <StickerLayer />

          {/* collage encima */}
          <Collage />

          {/* control música flotante */}
          <MusicControl
            audioRef={audioRef}
            onPrevTrack={prevTrack}
            onNextTrack={nextTrack}
          />

          {/* contenido central */}
          <main className="container">
            <div className="row" style={{ marginBottom: 16 }}>
              <div className="badge">♡ Gracias por existir</div>
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 2, -1, 0],
                }}
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
              <EnvelopeLetter onAcceptedYes={triggerCelebration} />
            </div>

            <div className="footer">
              <div className={`love ${showCelebration ? "love-glow" : ""}`}>
                TE AMO KEREN
              </div>
            </div>
          </main>
        </div>
      )}

      {/* ? secreto — aparece después que dice que sí */}
      {!showGames && secretQ?.visible && (
        <motion.button
          type="button"
          aria-label="Sorpresita secreta"
          className="hidden-qmark"
          style={{
            left: `${secretQ.x}vw`,
            top: `${secretQ.y}vh`,
          }}
          initial={{ opacity: 0.08, scale: 0.95 }}
          animate={{
            opacity: [0.1, 0.25, 0.12],
            y: [0, -3, 0],
            scale: [0.95, 1.02, 0.95],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={onSecretClick}
        >
          ?
          <span className="sr-only">Ábreme si me encuentras</span>
        </motion.button>
      )}

      {/* lluvia de flores/corazones cuando dice que sí */}
      <CelebrationLayer show={showCelebration} />

      {/* Portal sorpresa inicial */}
      <AnimatePresence>
        {showGift && (
          <StarlitPortalOverlay
            audioRef={audioRef}
            onClose={() => setShowGift(false)}
          />
        )}
      </AnimatePresence>

      {/* === CAPA JUEGOS === */}
      {showGames && !finishedAll && (
  <div className={`games-bg-layer ${finishedAll ? 'hidden' : ''}`}>
    <StickerLayer />
    <Collage />
    <GamesHub onAllDone={onGamesAllDone} />
  </div>
)}

      {/* overlay final fullscreen con constelación corazón y "K + J" */}
      <FinalConstellationOverlay visible={showFinalOverlay} />

      {/* audio escondido */}
      <audio ref={audioRef} preload="auto" />
    </>
  );
}
