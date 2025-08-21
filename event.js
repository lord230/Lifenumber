// event.js — clean, reduced-to-1–9, detailed descriptions + compatibility

(function () {
  const form = document.getElementById("numForm");
  const nameEl = document.getElementById("printName");
  const resultBox = document.getElementById("resultBox");

  const mulankTitle = document.getElementById("mulankTitle");
  const mulankDesc = document.getElementById("mulankDesc");
  const mulankMeta = document.getElementById("mulankMeta");
  const mulankCompat = document.getElementById("mulankCompat");

  const bhagyankTitle = document.getElementById("bhagyankTitle");
  const bhagyankDesc = document.getElementById("bhagyankDesc");
  const bhagyankMeta = document.getElementById("bhagyankMeta");
  const bhagyankCompat = document.getElementById("bhagyankCompat");

  // ----- Helpers -----
  function reduceToSingleDigit(n) {
    // accept number or string
    if (typeof n === "string") n = n.replace(/\D/g, "");
    n = Number(n);
    if (!Number.isFinite(n)) return 0;

    while (n > 9) {
      n = n
        .toString()
        .split("")
        .reduce((sum, d) => sum + Number(d), 0);
    }
    return n;
  }

  function metaItem(label, value) {
    return `
      <div class="meta">
        <b>${label}</b>
        <div>${value || "—"}</div>
      </div>
    `;
  }

  function list(arr) {
    return (arr && arr.length) ? arr.join(", ") : "—";
  }

//   // ----- Data: Mulank 1–9 -----
//   const MOOLANK = {
//     1: {
//       heading: "Mulank 1 — Leadership & Initiative",
//       desc:
//         "Derived from the day of birth, Mulank 1 signals originality, self-reliance, and a natural drive to lead. You prefer to set direction rather than follow, and you thrive when goals are clear and the stakes are meaningful.",
//       meta: { Planet: "Sun", "Lucky Colors": "Red, Saffron", "Favourable Day": "Sunday", Metal: "Gold", Gemstone: "Ruby" }
//     },
//     2: {
//       heading: "Mulank 2 — Harmony & Diplomacy",
//       desc:
//         "Mulank 2 emphasizes sensitivity, balance, and cooperation. You read people well, build bridges, and calm tense situations. Your empathy is a strength when paired with clear boundaries.",
//       meta: { Planet: "Moon", "Lucky Colors": "White, Cream", "Favourable Day": "Monday", Metal: "Silver", Gemstone: "Pearl" }
//     },
//     3: {
//       heading: "Mulank 3 — Expression & Optimism",
//       desc:
//         "Creative and communicative, Mulank 3 channels ideas into words, art, and teaching. You energize groups with enthusiasm; structure helps you convert inspiration into finished outcomes.",
//       meta: { Planet: "Jupiter", "Lucky Colors": "Yellow, Purple", "Favourable Day": "Thursday", Metal: "Tin", Gemstone: "Yellow Sapphire" }
//     },
//     4: {
//       heading: "Mulank 4 — Structure & Discipline",
//       desc:
//         "Practical and systematic, Mulank 4 excels at building reliable foundations. You bring order to complexity and deliver consistently when plans are clear and realistic.",
//       meta: { Planet: "Rahu (trad.)", "Lucky Colors": "Grey, Deep Blue", "Favourable Day": "Saturday", Metal: "Iron", Gemstone: "Hessonite" }
//     },
//     5: {
//       heading: "Mulank 5 — Adaptability & Movement",
//       desc:
//         "Versatile and curious, Mulank 5 loves variety, travel, and dynamic environments. Short, focused sprints and clear priorities help you avoid scattering energy.",
//       meta: { Planet: "Mercury", "Lucky Colors": "Green, Turquoise", "Favourable Day": "Wednesday", Metal: "Alloy", Gemstone: "Emerald" }
//     },
//     6: {
//       heading: "Mulank 6 — Care & Aesthetics",
//       desc:
//         "Responsible and refined, Mulank 6 nurtures people and environments. You set high standards for harmony and beauty; balance giving with self-care for sustainability.",
//       meta: { Planet: "Venus", "Lucky Colors": "Rose, Pastel Green", "Favourable Day": "Friday", Metal: "Copper", Gemstone: "Diamond/White Sapphire" }
//     },
//     7: {
//       heading: "Mulank 7 — Insight & Analysis",
//       desc:
//         "Reflective and inquisitive, Mulank 7 seeks depth, truth, and mastery. You excel in research and strategy; sharing your insights broadens your impact.",
//       meta: { Planet: "Ketu (trad.)", "Lucky Colors": "Indigo, Violet", "Favourable Day": "Saturday/Monday", Metal: "Alloy", Gemstone: "Cat’s Eye" }
//     },
//     8: {
//       heading: "Mulank 8 — Stewardship & Power",
//       desc:
//         "Ambitious and enduring, Mulank 8 leads complex operations and institutions. Fairness, patience, and systems-thinking compound long-term results.",
//       meta: { Planet: "Saturn", "Lucky Colors": "Black, Navy", "Favourable Day": "Saturday", Metal: "Lead", Gemstone: "Blue Sapphire (expert guidance)" }
//     },
//     9: {
//       heading: "Mulank 9 — Courage & Service",
//       desc:
//         "Passionate and protective, Mulank 9 channels high energy into meaningful causes. Discipline and pacing help you sustain impact without burnout.",
//       meta: { Planet: "Mars", "Lucky Colors": "Crimson, Brick Red", "Favourable Day": "Tuesday", Metal: "Iron", Gemstone: "Red Coral" }
//     }
//   };

//   // ----- Data: Bhagyank 1–9 -----
//   const BHAGYANK = {
//     1: {
//       heading: "Bhagyank 1 — Path of Leadership",
//       desc:
//         "Your life path emphasizes self-definition, responsibility, and courageous beginnings. You are called to take initiative and craft original solutions.",
//       meta: { Keywords: "Leadership, Initiative", "Lucky Color": "Red", "Favourable Day": "Sunday" }
//     },
//     2: {
//       heading: "Bhagyank 2 — Path of Partnership",
//       desc:
//         "A destiny of harmony-building and collaboration. You thrive where diplomacy, support, and relationship skills are valued.",
//       meta: { Keywords: "Partnership, Diplomacy", "Lucky Color": "White", "Favourable Day": "Monday" }
//     },
//     3: {
//       heading: "Bhagyank 3 — Path of Expression",
//       desc:
//         "A life of communication and creativity. You inspire through teaching, art, or public voice when you pair talent with discipline.",
//       meta: { Keywords: "Expression, Creativity", "Lucky Color": "Yellow", "Favourable Day": "Thursday" }
//     },
//     4: {
//       heading: "Bhagyank 4 — Path of Structure",
//       desc:
//         "You build systems others rely on. Steady effort and clear methods turn plans into lasting realities.",
//       meta: { Keywords: "Stability, Discipline", "Lucky Color": "Green", "Favourable Day": "Wednesday" }
//     },
//     5: {
//       heading: "Bhagyank 5 — Path of Freedom",
//       desc:
//         "Experience, travel, and change shape your growth. Focused curiosity converts variety into wisdom.",
//       meta: { Keywords: "Freedom, Change", "Lucky Color": "Orange", "Favourable Day": "Wednesday" }
//     },
//     6: {
//       heading: "Bhagyank 6 — Path of Care",
//       desc:
//         "Service, beauty, and responsibility guide your journey. Healthy boundaries sustain your generous nature.",
//       meta: { Keywords: "Responsibility, Harmony", "Lucky Color": "Indigo", "Favourable Day": "Friday" }
//     },
//     7: {
//       heading: "Bhagyank 7 — Path of Wisdom",
//       desc:
//         "You search for truth beneath appearances. Sharing insights publicly multiplies your contribution.",
//       meta: { Keywords: "Wisdom, Analysis", "Lucky Color": "Violet", "Favourable Day": "Saturday" }
//     },
//     8: {
//       heading: "Bhagyank 8 — Path of Stewardship",
//       desc:
//         "Material mastery and ethical power feature strongly. Build legacies that uplift people, not just metrics.",
//       meta: { Keywords: "Power, Achievement", "Lucky Color": "Black", "Favourable Day": "Saturday" }
//     },
//     9: {
//       heading: "Bhagyank 9 — Path of Service",
//       desc:
//         "Humanitarian action and principled completion define your arc. Pace yourself to serve sustainably.",
//       meta: { Keywords: "Compassion, Completion", "Lucky Color": "Blue", "Favourable Day": "Tuesday" }
//     }
//   };

// ----- Data: Mulank 1–9 -----
const MOOLANK = {
  1: {
    heading: "Mulank 1 — Leadership & Initiative",
    desc: `
    Mulank 1 is ruled by the Sun, the source of light and vitality. Individuals born with this number embody confidence, originality, and independence. 
    They are natural pioneers who prefer to lead rather than follow. Their strength lies in innovation, determination, and the ability to inspire others with their vision. 
    However, they must guard against arrogance, impatience, or becoming overly self-centered. Success for Mulank 1 comes when they learn to balance individuality with teamwork, 
    and use their leadership to uplift rather than dominate.`,
    meta: { Planet: "Sun", "Lucky Colors": "Red, Saffron", "Favourable Day": "Sunday", Metal: "Gold", Gemstone: "Ruby" }
  },
  2: {
    heading: "Mulank 2 — Harmony & Diplomacy",
    desc: `
    Mulank 2, ruled by the Moon, symbolizes balance, cooperation, and emotional intelligence. 
    People with this number are sensitive, nurturing, and diplomatic, often playing the role of peacemakers in relationships. 
    They value connection and are intuitive, understanding the emotions of others deeply. 
    However, they may struggle with indecision, mood swings, or over-dependence on others. Their destiny lies in mastering balance between emotional sensitivity and practical action, 
    and using their gifts of harmony to heal and connect communities.`,
    meta: { Planet: "Moon", "Lucky Colors": "White, Cream", "Favourable Day": "Monday", Metal: "Silver", Gemstone: "Pearl" }
  },
  3: {
    heading: "Mulank 3 — Expression & Optimism",
    desc: `
    Mulank 3 is governed by Jupiter, the planet of wisdom and expansion. These individuals are optimistic, expressive, and full of creative energy. 
    They are born communicators who shine in teaching, writing, or any field where ideas and inspiration are shared. 
    Their charm makes them popular, but their challenge lies in maintaining focus and discipline, as they may scatter energy across too many pursuits. 
    Mulank 3 flourishes when they combine creativity with responsibility, using their words and talents to guide and inspire others.`,
    meta: { Planet: "Jupiter", "Lucky Colors": "Yellow, Purple", "Favourable Day": "Thursday", Metal: "Tin", Gemstone: "Yellow Sapphire" }
  },
  4: {
    heading: "Mulank 4 — Structure & Discipline",
    desc: `
    Ruled by Rahu (North Node), Mulank 4 represents stability, practicality, and discipline. 
    These individuals excel at organization, planning, and creating systems that last. Their strength is in persistence and reliability, making them trusted workers and builders. 
    However, they may sometimes feel restricted, face sudden upheavals, or struggle with rigid thinking. 
    Mulank 4’s lesson is to embrace flexibility while maintaining order, and to use their discipline not just for personal security but for the benefit of society.`,
    meta: { Planet: "Rahu (trad.)", "Lucky Colors": "Grey, Deep Blue", "Favourable Day": "Saturday", Metal: "Iron", Gemstone: "Hessonite" }
  },
  5: {
    heading: "Mulank 5 — Adaptability & Movement",
    desc: `
    Mercury governs Mulank 5, symbolizing freedom, curiosity, and versatility. These individuals thrive on change, travel, and dynamic environments. 
    They are quick thinkers, adaptable, and excellent communicators who embrace new experiences. 
    Their challenge is restlessness, inconsistency, or difficulty committing to one path. 
    Mulank 5 succeeds when they channel their adventurous spirit into meaningful goals, transforming their curiosity into wisdom and flexibility into strength.`,
    meta: { Planet: "Mercury", "Lucky Colors": "Green, Turquoise", "Favourable Day": "Wednesday", Metal: "Alloy", Gemstone: "Emerald" }
  },
  6: {
    heading: "Mulank 6 — Care & Aesthetics",
    desc: `
    Ruled by Venus, Mulank 6 signifies love, beauty, and responsibility. These individuals are natural caretakers, drawn to creating harmony in relationships and environments. 
    They value aesthetics, comfort, and justice, often excelling in art, service, or leadership roles where nurturing is key. 
    Their challenge lies in over-sacrificing for others or becoming overly concerned with appearances. 
    Their life path calls for balancing giving with self-care and using their sense of beauty to uplift both people and surroundings.`,
    meta: { Planet: "Venus", "Lucky Colors": "Rose, Pastel Green", "Favourable Day": "Friday", Metal: "Copper/Silver", Gemstone: "Diamond/White Sapphire" }
  },
  7: {
    heading: "Mulank 7 — Insight & Analysis",
    desc: `
    Ketu (South Node) rules Mulank 7, symbolizing spiritual insight, reflection, and analysis. 
    These individuals are seekers of truth, drawn to philosophy, research, and spiritual studies. 
    Their sharp mind and intuition help them uncover hidden realities, making them excellent researchers, strategists, or spiritual guides. 
    Their challenges include loneliness, skepticism, or over-detachment from worldly matters. 
    Their destiny lies in sharing their wisdom with others and balancing solitude with meaningful relationships.`,
    meta: { Planet: "Ketu (trad.)", "Lucky Colors": "Indigo, Violet", "Favourable Day": "Saturday/Monday", Metal: "Alloy", Gemstone: "Cat’s Eye" }
  },
  8: {
    heading: "Mulank 8 — Stewardship & Power",
    desc: `
    Saturn governs Mulank 8, representing discipline, responsibility, and karmic balance. These individuals often face struggles early in life, but through patience and persistence, 
    they rise to positions of authority and influence. They are strong, resilient, and capable of handling large responsibilities. 
    Their challenges may involve delays, restrictions, or harsh lessons. However, they are destined for long-term success when they embrace discipline, fairness, and service-oriented leadership.`,
    meta: { Planet: "Saturn", "Lucky Colors": "Black, Navy", "Favourable Day": "Saturday", Metal: "Lead", Gemstone: "Blue Sapphire (expert guidance)" }
  },
  9: {
    heading: "Mulank 9 — Courage & Service",
    desc: `
    Mulank 9 is ruled by Mars, the planet of energy, courage, and passion. These individuals are warriors at heart, channeling strength into service, protection, and humanitarian causes. 
    They are fearless, compassionate, and action-driven, often fighting for justice or helping the vulnerable. 
    Their challenges may include impulsiveness, anger, or burnout. Their path is to master discipline, patience, and endurance, ensuring their fiery energy is used for sustainable, meaningful impact.`,
    meta: { Planet: "Mars", "Lucky Colors": "Crimson, Brick Red", "Favourable Day": "Tuesday", Metal: "Iron", Gemstone: "Red Coral" }
  }
};

// ----- Data: Bhagyank 1–9 -----
const BHAGYANK = {
  1: {
    heading: "Bhagyank 1 — Path of Leadership",
    desc: `
    People with Bhagyank 1 are destined to become leaders, innovators, and trailblazers. Their life path pushes them toward independence, confidence, and taking initiative. 
    They are courageous in beginnings and must trust their instincts to carve unique paths. 
    Their destiny is fulfilled when they learn to balance leadership with humility and use their strength to uplift others rather than dominate.`,
    meta: { Keywords: "Leadership, Initiative", "Lucky Color": "Red", "Favourable Day": "Sunday" }
  },
  2: {
    heading: "Bhagyank 2 — Path of Partnership",
    desc: `
    Bhagyank 2 emphasizes relationships, diplomacy, and cooperation. Life brings opportunities for teamwork, partnerships, and nurturing connections. 
    They succeed when they embrace harmony, empathy, and balance. Their challenge is indecision or dependency, but they shine when they cultivate inner strength while maintaining compassion.`,
    meta: { Keywords: "Partnership, Diplomacy", "Lucky Color": "White", "Favourable Day": "Monday" }
  },
  3: {
    heading: "Bhagyank 3 — Path of Expression",
    desc: `
    A destiny of communication, creativity, and teaching. Bhagyank 3 individuals are destined to inspire others with their ideas, art, or leadership in education. 
    Life rewards them when they combine talent with discipline, using their expressive gifts responsibly. 
    Their challenge is inconsistency, but their success comes through focused self-expression that uplifts others.`,
    meta: { Keywords: "Expression, Creativity", "Lucky Color": "Yellow", "Favourable Day": "Thursday" }
  },
  4: {
    heading: "Bhagyank 4 — Path of Structure",
    desc: `
    Bhagyank 4 individuals are builders and organizers. Their destiny is to create reliable systems, foundations, and long-lasting achievements. 
    They often face restrictions or slow progress, but their patience and discipline lead to steady success. 
    Their life path is about turning ideas into structured realities that serve generations.`,
    meta: { Keywords: "Stability, Discipline", "Lucky Color": "Green", "Favourable Day": "Wednesday" }
  },
  5: {
    heading: "Bhagyank 5 — Path of Freedom",
    desc: `
    Bhagyank 5 represents change, travel, and adaptability. Their destiny involves exploring life through varied experiences, communication, and expansion. 
    They are natural explorers who thrive in dynamic environments. Their challenge is inconsistency, but success comes when they learn to focus their curiosity into purposeful directions.`,
    meta: { Keywords: "Freedom, Change", "Lucky Color": "Orange", "Favourable Day": "Wednesday" }
  },
  6: {
    heading: "Bhagyank 6 — Path of Care",
    desc: `
    The destiny of Bhagyank 6 revolves around responsibility, love, and service. They are called to nurture families, communities, and create beauty and harmony in life. 
    They may face burdens of over-responsibility but thrive when they balance giving with self-care. Their mission is to build loving, stable environments that reflect balance and compassion.`,
    meta: { Keywords: "Responsibility, Harmony", "Lucky Color": "Indigo", "Favourable Day": "Friday" }
  },
  7: {
    heading: "Bhagyank 7 — Path of Wisdom",
    desc: `
    Bhagyank 7 individuals are seekers of truth and wisdom. Their path is often solitary, requiring deep introspection, study, and spiritual growth. 
    They succeed when they balance inner reflection with sharing insights publicly. Challenges include detachment or skepticism, but their destiny is to be guides, philosophers, or truth-seekers.`,
    meta: { Keywords: "Wisdom, Analysis", "Lucky Color": "Violet", "Favourable Day": "Saturday" }
  },
  8: {
    heading: "Bhagyank 8 — Path of Stewardship",
    desc: `
    Bhagyank 8 represents karma, responsibility, and power. Life often presents tests and struggles, teaching patience, discipline, and resilience. 
    Their destiny is to master material and ethical power, becoming leaders who create systems that benefit society. Though challenges may be heavy, their path is one of legacy and justice.`,
    meta: { Keywords: "Power, Achievement", "Lucky Color": "Black", "Favourable Day": "Saturday" }
  },
  9: {
    heading: "Bhagyank 9 — Path of Service",
    desc: `
    Bhagyank 9 individuals are destined for humanitarian service, compassion, and completion of cycles. Their life path involves protecting others, fighting for justice, and leading with love. 
    They must manage impulsive energy and learn patience. Their destiny is fulfilled when they dedicate themselves to causes larger than themselves, creating a lasting legacy of service.`,
    meta: { Keywords: "Compassion, Completion", "Lucky Color": "Blue", "Favourable Day": "Tuesday" }
  }
};

  // ----- Compatibility (concise) -----
  const COMPAT = {
    moolank: {
      1: { best: [3,5,6], good: [2,9], challenging: [7,8] },
      2: { best: [6,8], good: [1,4], challenging: [5,7,9] },
      3: { best: [1,5,6,9], good: [2], challenging: [7,8] },
      4: { best: [1,8], good: [2,7], challenging: [3,5,9] },
      5: { best: [3,6,7,9], good: [1], challenging: [4,8] },
      6: { best: [2,3,5,9], good: [1], challenging: [7,8] },
      7: { best: [5,7], good: [4,8], challenging: [1,3,6,9] },
      8: { best: [1,4,8], good: [2,7], challenging: [3,5,9] },
      9: { best: [1,3,5,6,9], good: [2,4], challenging: [7,8] }
    },
    bhagyank: {
      1: { best: [3,4,8,9], good: [2,6], challenging: [7] },
      2: { best: [6,8], good: [1,4], challenging: [7,9] },
      3: { best: [1,5,6,9], good: [2], challenging: [7,8] },
      4: { best: [1,8], good: [2,7], challenging: [3,5,9] },
      5: { best: [3,6,7,9], good: [1], challenging: [4,8] },
      6: { best: [2,3,5,9], good: [1], challenging: [7,8] },
      7: { best: [5,7], good: [4,8], challenging: [1,3,6,9] },
      8: { best: [1,4,8], good: [2,7], challenging: [3,5,9] },
      9: { best: [1,3,5,6,9], good: [2,4], challenging: [7,8] }
    }
  };

  function compatText(table, n) {
    const row = table[n] || {};
    return `
      Best alignment: ${list(row.best)} | Good harmony: ${list(row.good)} | Potentially challenging: ${list(row.challenging)}.
    `;
  }

  // ----- Submit Handler -----
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const first = document.getElementById("firstName").value.trim();
    const last  = document.getElementById("lastName").value.trim();
    const dob   = document.getElementById("dob").value;

    if (!first || !dob) {
      alert("Please enter at least your first name and your date of birth.");
      return;
    }

    const [yyyy, mm, dd] = dob.split("-").map(n => parseInt(n, 10));
    const mulank = reduceToSingleDigit(dd);
    const bhagyank = reduceToSingleDigit(dd + mm + yyyy);

    // Name
    nameEl.textContent = `${first} ${last}`.trim();

    // Mulank
    const m = MOOLANK[mulank];
    mulankTitle.textContent = "Mulank";
    mulankDesc.textContent = `Your Mulank is ${mulank}. ${m ? m.desc : ""}`;
    mulankMeta.innerHTML = m
      ? Object.entries(m.meta).map(([k, v]) => metaItem(k, v)).join("")
      : "";
    mulankCompat.innerHTML = compatText(COMPAT.moolank, mulank);

    // Bhagyank
    const b = BHAGYANK[bhagyank];
    bhagyankTitle.textContent = "Bhagyank";
    bhagyankDesc.textContent = `Your Bhagyank is ${bhagyank}. ${b ? b.desc : ""}`;
    bhagyankMeta.innerHTML = b
      ? Object.entries(b.meta).map(([k, v]) => metaItem(k, v)).join("")
      : "";
    bhagyankCompat.innerHTML = compatText(COMPAT.bhagyank, bhagyank);

    // Reveal + smooth scroll
    resultBox.style.display = "block";
    resultBox.style.opacity = "0";
    resultBox.style.transition = "opacity .6s ease";
    requestAnimationFrame(() => { resultBox.style.opacity = "1"; });
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
