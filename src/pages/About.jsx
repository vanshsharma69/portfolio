import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Languages,
} from "lucide-react";

const translations = {
  en: {
    name: "Vansh Sharma",
    role: "Full Stack Developer | Open Source Contributor | UI/UX Enthusiast 🚀",
    bio: `👋 Hi, I'm Vansh Sharma — a passionate Full Stack Developer and Computer Science student at GLA University. 
I love transforming complex problems into elegant digital solutions using React.js, Next.js, Node.js, and MongoDB. 

I've architected and deployed production-grade web apps that scale efficiently and deliver smooth user experiences. 
My projects span healthcare platforms, bug tracking tools, and e-commerce systems — blending logic, design, and impact.

I actively contribute to open-source projects under Google Developer Group, collaborate with global teams, 
and consistently enhance accessibility and performance standards in every project I build.`,
    contact: "Contact Me",
    country: "Asia / India",
    english: "English",
    hindi: "Hindi",
    kannada: "Kannada",
    experience_link: "💼 Experience",
    studies: "🎓 Education",
    tech_skills: "🧠 Technical Skills",
    intro: "👋 About Me",

    experiences: [
      {
        company: "Just Charge Technologies",
        role: "Full Stack Developer (React.js, Next.js, MongoDB)",
        duration: "Apr 2025 – Nov 2025",
        details: [
          "Architected and deployed 3+ production web apps improving page load speed by 25%.",
          "Integrated Firebase Auth & MongoDB Atlas for secure user onboarding with JWT sessions.",
          "Resolved 30+ UI/UX defects and enforced WCAG accessibility, reducing support tickets by 15%.",
          "Collaborated in Agile sprints with designers and backend teams, shipping features 20% faster via CI/CD.",
        ],
      },
      {
        company: "Google Developer Group (Open Source)",
        role: "Frontend Developer (React.js, Tailwind CSS)",
        duration: "Feb 2025 – Apr 2025",
        details: [
          "Contributed to LeetJump — a coding practice & leaderboard platform under GDG.",
          "Implemented Dark Mode, improved responsiveness, and fixed layout inconsistencies.",
          "Collaborated via GitHub PRs & issue tracking, following open-source contribution workflows.",
        ],
      },
    ],

    education: {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      university: "GLA University, Mathura",
      duration: "2023 – 2027",
      details:
        "CPI: 7.51 / 10.0 | Coursework: Data Structures & Algorithms, Machine Learning, Advanced DBMS, Operating Systems, Computer Networks.",
    },

    skills: {
      categories: [
        {
          title: "Frontend Development",
          list: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
        },
        {
          title: "Backend & Databases",
          list: ["Node.js", "Express.js", "MongoDB", "Firebase", "PostgreSQL"],
        },
        {
          title: "Other Tools & Platforms",
          list: ["Git", "Vercel", "Render", "Docker (basic)", "Figma", "Postman"],
        },
      ],
    },

    achievements: [
      "🏆 Runner-up at CodePunk Hackathon 2024 (200+ teams).",
      "🥈 2nd Place at SynaHack 2025 (Galgotias University).",
      "🎯 Finalist at Spectra 3.0 Hackathon 2025.",
      "💡 Solved 300+ coding problems on LeetCode.",
    ],
  },

  hi: {
    name: "वंश शर्मा",
    role: "फुल स्टैक डेवलपर | ओपन सोर्स योगदानकर्ता | यूआई/यूएक्स उत्साही 🚀",
    bio: `👋 नमस्ते, मैं वंश शर्मा हूँ — एक उत्साही फुल स्टैक डेवलपर और GLA विश्वविद्यालय का कंप्यूटर साइंस छात्र। 
मुझे React.js, Next.js, Node.js और MongoDB का उपयोग करके जटिल समस्याओं को सुंदर डिजिटल समाधानों में बदलना पसंद है। 

मैंने कई प्रोडक्शन-ग्रेड वेब ऐप्स विकसित और डिप्लॉय किए हैं जो तेज़, स्केलेबल और उपयोगकर्ता-अनुकूल हैं। 
मेरे प्रोजेक्ट्स हेल्थकेयर प्लेटफॉर्म, बग ट्रैकिंग सिस्टम और ई-कॉमर्स ऐप्स से लेकर हैं — जहाँ मैं डिज़ाइन और लॉजिक को जोड़कर सार्थक समाधान बनाता हूँ।

मैं Google Developer Group के तहत ओपन सोर्स प्रोजेक्ट्स में योगदान देता हूँ और हर प्रोजेक्ट में परफॉर्मेंस व एक्सेसिबिलिटी सुधारता हूँ।`,
    contact: "संपर्क करें",
    country: "एशिया / भारत",
    english: "अंग्रेज़ी",
    hindi: "हिंदी",
    kannada: "कन्नड़",
    experience_link: "💼 अनुभव",
    studies: "🎓 शिक्षा",
    tech_skills: "🧠 तकनीकी कौशल",
    intro: "👋 मेरे बारे में",

    experiences: [
      {
        company: "जस्ट चार्ज टेक्नोलॉजीज",
        role: "फुल स्टैक डेवलपर (React.js, Next.js, MongoDB)",
        duration: "अप्रैल 2025 – नवंबर 2025",
        details: [
          "3+ वेब ऐप्स विकसित किए जिनकी लोड स्पीड में 25% सुधार हुआ।",
          "Firebase Auth और MongoDB Atlas के साथ सुरक्षित लॉगिन इंटीग्रेशन किया।",
          "UI/UX में 30+ सुधार किए और एक्सेसिबिलिटी बढ़ाई जिससे सपोर्ट टिकट्स 15% कम हुए।",
          "Agile टीमों के साथ मिलकर काम करते हुए फीचर्स को 20% तेज़ी से डिलीवर किया।",
        ],
      },
      {
        company: "Google Developer Group (ओपन सोर्स)",
        role: "फ्रंटएंड डेवलपर (React.js, Tailwind CSS)",
        duration: "फरवरी 2025 – अप्रैल 2025",
        details: [
          "LeetJump प्लेटफॉर्म पर योगदान दिया — एक कोडिंग प्रैक्टिस और लीडरबोर्ड प्लेटफॉर्म।",
          "डार्क मोड और रेस्पॉन्सिवनेस सुधार किया तथा UI बग्स को ठीक किया।",
          "GitHub PRs के माध्यम से ओपन सोर्स प्रोजेक्ट्स पर सहयोग किया।",
        ],
      },
    ],

    education: {
      degree: "बैचलर ऑफ टेक्नोलॉजी (कंप्यूटर साइंस एंड इंजीनियरिंग)",
      university: "GLA विश्वविद्यालय, मथुरा",
      duration: "2023 – 2027",
      details:
        "CPI: 7.51 / 10.0 | विषय: डेटा स्ट्रक्चर, मशीन लर्निंग, DBMS, ऑपरेटिंग सिस्टम, कंप्यूटर नेटवर्क।",
    },

    skills: {
      categories: [
        {
          title: "फ्रंटएंड डेवलपमेंट",
          list: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
        },
        {
          title: "बैकएंड और डेटाबेस",
          list: ["Node.js", "Express.js", "MongoDB", "Firebase", "PostgreSQL"],
        },
        {
          title: "अन्य टूल्स और प्लेटफॉर्म्स",
          list: ["Git", "Vercel", "Render", "Docker (बेसिक)", "Figma", "Postman"],
        },
      ],
    },

    achievements: [
      "🏆 CodePunk Hackathon 2024 में रनर-अप (200+ टीमों में)।",
      "🥈 SynaHack 2025 (गलगोटियास यूनिवर्सिटी) में दूसरा स्थान।",
      "🎯 Spectra 3.0 Hackathon 2025 में फाइनलिस्ट।",
      "💡 LeetCode पर 300+ समस्याएँ हल कीं।",
    ],
  },

  kn: {
    name: "ವಂಶ್ ಶರ್ಮಾ",
    role: "ಫುಲ್ ಸ್ಟಾಕ್ ಡೆವಲಪರ್ | ಓಪನ್ ಸೋರ್ಸ್ ಕೊಡುಗೆಯುಗಳು | ಯುಐ/ಯುಎಕ್ಸ್ ಆಸಕ್ತ 🚀",
    bio: `👋 ನಮಸ್ಕಾರ, ನಾನು ವಂಶ್ ಶರ್ಮಾ — GLA ವಿಶ್ವವಿದ್ಯಾಲಯದ ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಉತ್ಸಾಹಿ ಫುಲ್ ಸ್ಟಾಕ್ ಡೆವಲಪರ್. 
React.js, Next.js, Node.js ಮತ್ತು MongoDB ಬಳಸಿಕೊಂಡು ಸಂಕೀರ್ಣ ಸಮಸ್ಯೆಗಳನ್ನು ಸುಂದರ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳಾಗಿ ರೂಪಿಸಲು ನಾನು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ.

ನಾನು ಪ್ರೊಡಕ್ಷನ್ ಮಟ್ಟದ ವೆಬ್ ಆ್ಯಪ್ಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿ, ಕಾರ್ಯಕ್ಷಮತೆಯ ಮತ್ತು ಸ್ಕೇಲಬಿಲಿಟಿಯುಳ್ಳ ಅನುಭವವನ್ನು ಒದಗಿಸಿದ್ದೇನೆ. 
ನನ್ನ ಯೋಜನೆಗಳು ಆರೋಗ್ಯಪಾಲನಾ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು, ಬಗ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಉಪಕರಣಗಳು ಮತ್ತು ಇ-ಕಾಮರ್ಸ್ ವ್ಯವಸ್ಥೆಗಳವರೆಗೆ ವ್ಯಾಪಿಸುತ್ತವೆ.

ನಾನು Google Developer Group ಅಡಿಯಲ್ಲಿ ಓಪನ್‌ಸೋರ್ಸ್ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಕೊಡುಗೆ ನೀಡುತ್ತೇನೆ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಪ್ರಾಜೆಕ್ಟ್‌ನಲ್ಲಿ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಬಳಕೆದಾರ ಅನುಭವವನ್ನು ಸುಧಾರಿಸುತ್ತೇನೆ.`,
    contact: "ಸಂಪರ್ಕಿಸಿ",
    country: "ಆಷಿಯಾ / ಭಾರತ",
    english: "ಇಂಗ್ಲಿಷ್",
    hindi: "ಹಿಂದಿ",
    kannada: "ಕನ್ನಡ",
    experience_link: "💼 ಅನುಭವ",
    studies: "🎓 ಶಿಕ್ಷಣ",
    tech_skills: "🧠 ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳು",
    intro: "👋 ನನ್ನ ಬಗ್ಗೆ",

    experiences: [
      {
        company: "Just Charge Technologies",
        role: "ಫುಲ್ ಸ್ಟಾಕ್ ಡೆವಲಪರ್ (React.js, Next.js, MongoDB)",
        duration: "ಏಪ್ರಿಲ್ 2025 – ನವೆಂಬರ್ 2025",
        details: [
          "3+ ವೆಬ್ ಆ್ಯಪ್‌ಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿ, ಪುಟ ಲೋಡ್ ವೇಗವನ್ನು 25% ಹೆಚ್ಚಿಸಲಾಗಿದೆ.",
          "Firebase Auth ಮತ್ತು MongoDB Atlas ಮೂಲಕ ಸುರಕ್ಷಿತ ಲಾಗಿನ್ ವ್ಯವಸ್ಥೆ ಅನುಷ್ಟಾನಗೊಳಿಸಲಾಗಿದೆ.",
          "30+ UI/UX ಬಗ್‌ಗಳನ್ನು ಸರಿಪಡಿಸಿ, ಪ್ರವೇಶಾರ್ಹತೆಯನ್ನು ಹೆಚ್ಚಿಸಲಾಗಿದೆ.",
          "Agile ತಂಡಗಳೊಂದಿಗೆ ಕೆಲಸಮಾಡಿ, ವೈಶಿಷ್ಟ್ಯಗಳ ವಿತರಣೆಯನ್ನು 20% ವೇಗಗೊಳಿಸಲಾಗಿದೆ.",
        ],
      },
      {
        company: "Google Developer Group (ಓಪನ್‌ಸೋರ್ಸ್)",
        role: "ಫ್ರಂಟ್‌ಎಂಡ್ ಡೆವಲಪರ್ (React.js, Tailwind CSS)",
        duration: "ಫೆಬ್ರವರಿ 2025 – ಏಪ್ರಿಲ್ 2025",
        details: [
          "LeetJump ಯೋಜನೆಯಲ್ಲಿ ಕೊಡುಗೆ — ಕೋಡಿಂಗ್ ಪ್ರಾಕ್ಟೀಸ್ ಮತ್ತು ಲೀಡರ್ಬೋರ್ಡ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
          "ಡಾರ್ಕ್ ಮೋಡ್ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯಾಶೀಲತೆಯನ್ನು ಸುಧಾರಿಸಲಾಗಿದೆ.",
          "GitHub ಮೂಲಕ ಓಪನ್‌ಸೋರ್ಸ್ ಕೊಡುಗೆ ಕಾರ್ಯಪ್ರವಾಹಗಳಲ್ಲಿ ಸಹಕರಿಸಲಾಗಿದೆ.",
        ],
      },
    ],

    education: {
      degree: "ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಬಿ.ಟೆಕ್",
      university: "GLA ವಿಶ್ವವಿದ್ಯಾಲಯ, ಮಥುರಾ",
      duration: "2023 – 2027",
      details:
        "CPI: 7.51 / 10.0 | ವಿಷಯಗಳು: ಡೇಟಾ ಸ್ಟ್ರಕ್ಚರ್, ಮಷಿನ್ ಲರ್ನಿಂಗ್, ಡಿಬಿಎಂಎಸ್, ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್‌ಗಳು, ಕಂಪ್ಯೂಟರ್ ನೆಟ್‌ವರ್ಕ್‌ಗಳು.",
    },

    skills: {
      categories: [
        {
          title: "ಫ್ರಂಟ್‌ಎಂಡ್ ಡೆವಲಪ್ಮೆಂಟ್",
          list: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
        },
        {
          title: "ಬ್ಯಾಕ್‌ಎಂಡ್ ಮತ್ತು ಡೇಟಾಬೇಸ್‌ಗಳು",
          list: ["Node.js", "Express.js", "MongoDB", "Firebase", "PostgreSQL"],
        },
        {
          title: "ಇತರೆ ಉಪಕರಣಗಳು ಮತ್ತು ವೇದಿಕೆಗಳು",
          list: ["Git", "Vercel", "Render", "Docker (ಮೂಲಭೂತ)", "Figma", "Postman"],
        },
      ],
    },

    achievements: [
      "🏆 CodePunk Hackathon 2024 ನಲ್ಲಿ ರನ್ನರ್-ಅಪ್ (200+ ತಂಡಗಳಲ್ಲಿ).",
      "🥈 SynaHack 2025 (Galgotias University) ನಲ್ಲಿ 2ನೇ ಸ್ಥಾನ.",
      "🎯 Spectra 3.0 Hackathon 2025 ನಲ್ಲಿ ಫೈನಲಿಸ್ಟ್.",
      "💡 LeetCode ನಲ್ಲಿ 300+ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ.",
    ],
  },
};

const About = () => {
  const [lang, setLang] = useState("en");
  const [activeSection, setActiveSection] = useState("introduction");
  const t = translations[lang];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="min-h-screen text-white flex relative py-10 bg-black">
      {/* Sidebar */}
      <aside className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-6 flex-col gap-4 p-5 backdrop-blur-md">
        <nav className="flex flex-col gap-6">
          {[
            { id: "introduction", label: t.intro },
            { id: "experience", label: t.experience_link },
            { id: "education", label: t.studies },
            { id: "skills", label: t.tech_skills },
            { id: "achievements", label: "🏅 Achievements" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-lg pl-3 border-l-2 transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-400 border-blue-400 font-semibold"
                  : "text-gray-300 border-transparent hover:text-blue-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Profile Section */}
      <section className="hidden md:flex fixed top-28 left-72 flex-col items-center space-y-4">
        <img
          src={require("../assets/vansh.jpg")}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white/10"
        />
        <div className="text-sm text-gray-300 flex items-center gap-2">
          <Globe size={16} />
          <span>{t.country}</span>
        </div>
        <div className=" space-y-3">
          {["en", "hi", "kn"].map((key) => (
            <button
              key={key}
              onClick={() => setLang(key)}
              className={`px-4 py-1 rounded-full text-sm flex items-center gap-1 ${
                lang === key
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              <Languages size={14} /> {translations[key].english}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-[28rem] px-6 sm:px-10 md:px-20 md:mt-28 mb-20 space-y-20">
        {/* About */}
        <section id="introduction">
          <h1 className="text-5xl sm:text-6xl font-extrabold">{t.name}</h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mt-2">{t.role}</h2>

          <p className="mt-8 text-white/90 text-lg leading-relaxed max-w-4xl whitespace-pre-line">
            {t.bio}
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="https://github.com/vanshsharma69"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
            >
              <Github size={16} /> <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-sharma-5061762bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
            >
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
            <a
              href="mailto:01vanshsharma@gmail.com"
              className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
            >
              <Mail size={16} /> <span>Email</span>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h3 className="text-4xl font-semibold text-blue-400 mb-10">
            {t.experience_link}
          </h3>
          {t.experiences.map((exp, i) => (
            <div
              key={i}
              className="shadow-lg rounded-xl p-6 mb-6 border border-white/10 hover:shadow-blue-400/20 transition"
            >
              <h2 className="text-2xl font-bold">{exp.company}</h2>
              <p className="text-blue-300 font-medium">{exp.role}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc ml-6 space-y-2 text-white/90">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="education">
          <h3 className="text-4xl font-semibold text-blue-400 mb-10">
            {t.studies}
          </h3>
          <div className="shadow-lg rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold">{t.education.university}</h2>
            <p className="text-blue-300 font-medium mt-2">
              {t.education.degree}
            </p>
            <p className="text-gray-400 mt-1">{t.education.duration}</p>
            <p className="text-white/90 mt-4">{t.education.details}</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h3 className="text-4xl font-semibold text-blue-400 mb-10">
            {t.tech_skills}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.categories.map((cat, i) => (
              <div
                key={i}
                className="p-6 border border-slate-700 rounded-xl shadow-md hover:shadow-blue-500/40 transition"
              >
                <h4 className="text-xl font-semibold text-center mb-4 text-blue-300">
                  {cat.title}
                </h4>
                <ul className="space-y-2 text-center text-white/90">
                  {cat.list.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements">
          <h3 className="text-4xl font-semibold text-blue-400 mb-10">
            🏅 Achievements
          </h3>
          <ul className="list-disc ml-6 space-y-3 text-white/90">
            {t.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <div className="flex justify-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            📬 {t.contact}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
