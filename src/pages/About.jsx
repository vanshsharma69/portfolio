import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Languages,
  GraduationCap,
  Wrench,
} from 'lucide-react';

const translations = {
  en: {
    name: 'Vansh Sharma',
    role: 'Full-Stack Developer & Problem Solver 🚀',
    bio: "👨‍💻 I'm a Computer Science student at GLA University with a passion for crafting apps and websites using Flutter & React. I'm driven by logic, design, and solving meaningful problems. My curiosity pushes me to explore new technologies while building clean, user-focused digital experiences.",
    contact: 'Contact Me',
    work_ex_1: 'Built a cutting-edge healthcare app in Flutter for seamless patient appointment management.',
    work_ex_2: 'Integrated Firebase Authentication for secure login and data protection.',
    work_ex_3: 'Created highly responsive UI screens with clean and reusable Flutter components.',
    work_ex_4: 'Turned client requirements into working cross-platform UI/UX experiences.',
    experience1_title: 'Pregrad',
    experience1_role: 'Android App Development Intern',
    experience2_title: 'Freelance Projects',
    experience2_role: 'Flutter Frontend Developer',
    education: 'Education',
    education1_title: 'GLA University',
    education1_detail: 'Pursuing B.Tech in Computer Science & Engineering (2021–2025)',
    education2_title: 'St. Francis Inter College',
    education2_detail: 'Completed 10th & 12th grade – Science stream',
    skills: 'Technical Skills',
    app_development: 'App Development',
    web_development: 'Web Development',
    dsa: 'Data Structures & Algorithms',
    skill1: 'Flutter',
    skill2: 'Kotlin',
    skill3: 'React JS',
    skill4: 'Node JS',
    skill5: 'Express JS',
    skill6: 'Java (DSA)',
    skill7: 'Algorithms',
    country: 'Asia / India',
    english: 'English',
    hindi: 'Hindi',
    intro: '👋 Introduction',
    experience_link: '💼 Work Experience',
    studies: '🎓 Studies',
    tech_skills: '🧠 Technical Skills',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  hi: {
    name: 'वंश शर्मा',
    role: 'फुल-स्टैक डेवलपर और समस्या समाधानकर्ता 🚀',
    bio: "👨‍💻 मैं GLA विश्वविद्यालय में कंप्यूटर साइंस का छात्र हूँ, जो Flutter और React का उपयोग करके ऐप्स और वेबसाइट्स बनाने का शौक रखते हैं। मैं तर्क, डिज़ाइन और समस्याओं के समाधान के प्रति प्रेरित हूँ। मेरी जिज्ञासा मुझे नई तकनीकों की खोज के लिए प्रेरित करती है और मैं उपयोगकर्ता-केंद्रित डिजिटल अनुभवों का निर्माण करता हूँ।",
    contact: 'संपर्क करें',
    work_ex_1: 'Flutter में सहज रोगी अपॉइंटमेंट प्रबंधन के लिए एक अत्याधुनिक हेल्थकेयर ऐप बनाया।',
    work_ex_2: 'सुरक्षित लॉगिन और डेटा संरक्षण के लिए Firebase प्रमाणीकरण को एकीकृत किया।',
    work_ex_3: 'स्वच्छ और पुन: उपयोग योग्य Flutter कंपोनेंट्स के साथ उच्च उत्तरदायी UI स्क्रीन बनाए।',
    work_ex_4: 'क्लाइंट आवश्यकताओं को क्रॉस-प्लैटफ़ॉर्म UI/UX अनुभवों में बदल दिया।',
    experience1_title: 'प्रीग्रैड',
    experience1_role: 'एंड्रॉइड ऐप डेवलपमेंट प्रशिक्षु',
    experience2_title: 'फ्रीलांस प्रोजेक्ट्स',
    experience2_role: 'Flutter फ्रंटएंड डेवलपर',
    education: 'शिक्षा',
    education1_title: 'GLA विश्वविद्यालय',
    education1_detail: 'कंप्यूटर साइंस और इंजीनियरिंग में B.Tech कर रहा हूँ (2021-2025)',
    education2_title: 'सेंट फ्रांसिस इंटर कॉलेज',
    education2_detail: '10वीं और 12वीं कक्षा पूरी की - विज्ञान प्रवाह',
    skills: 'तकनीकी कौशल',
    app_development: 'ऐप डेवलपमेंट',
    web_development: 'वेब डेवलपमेंट',
    dsa: 'डेटा स्ट्रक्चर और एल्गोरिदम',
    skill1: 'फ़्लटर',
    skill2: 'कोटलिन',
    skill3: 'रिएक्ट जेएस',
    skill4: 'नोड जेएस',
    skill5: 'एक्सप्रेस जेएस',
    skill6: 'जावा (DSA)',
    skill7: 'एल्गोरिदम',
    country: 'एशिया / भारत',
    english: 'अंग्रेज़ी',
    hindi: 'हिंदी',
    intro: '👋 परिचय',
    experience_link: '💼 कार्य अनुभव',
    studies: '🎓 पढ़ाई',
    tech_skills: '🧠 तकनीकी कौशल',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'ईमेल',
  }
};

const About = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen text-white flex relative items-center py-10">
      {/* Sidebar - Visible on Desktop */}
      <aside className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-6 flex-col items-start gap-4 p-5 backdrop-blur-md">
        <nav className="flex flex-col gap-6">
          <a href="#introduction"
            className="text-lg text-white font-semibold border-l-2 border-white pl-3 hover:text-blue-400 transition-all duration-300">
            {t.intro}
          </a>
          <a href="#experience"
            className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
            {t.experience_link}
          </a>
          <a href="#studies"
            className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
            {t.studies}
          </a>
          <a href="#skills"
            className="text-lg text-gray-300 pl-3 hover:text-blue-400 transition-all duration-300">
            {t.tech_skills}
          </a>
        </nav>
      </aside>

      {/* Profile Section - Fixed on Desktop */}
      <section className="hidden md:flex fixed top-28 left-72 flex-col items-center justify-center space-y-4 animate-fade-in">
        <img
          src={require('../assets/vansh.jpg')}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white/10"
        />
        <div className="text-sm text-gray-300 flex items-center gap-2">
          <Globe size={16} />
          <span>{t.country}</span>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1 rounded-full text-sm flex items-center gap-1 ${lang === 'en' ? 'bg-white text-black' : 'bg-white/10 text-gray-300'}`}>
            <Languages size={14} /> {t.english}
          </button>
          <button
            onClick={() => setLang('hi')}
            className={`px-4 py-1 rounded-full text-sm flex items-center gap-1 ${lang === 'hi' ? 'bg-white text-black' : 'bg-white/10 text-gray-300'}`}>
            {t.hindi}
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-[28rem] px-6 sm:px-10 md:px-20 md:mt-28 overflow-y-auto md:mb-28 mb-8">

        {/* Profile Section - Mobile View */}
        <div className="md:hidden flex flex-col mb-8 justify-center items-center mt-10 animate-fade-in">
          <img
            src={require('../assets/vansh.jpg')}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/10"
          />
          <div className="text-sm text-gray-300 flex items-center gap-2 mt-3">
            <Globe size={16} />
            <span>{t.country}</span>
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1 rounded-full text-sm flex items-center gap-1 ${lang === 'en' ? 'bg-white text-black' : 'bg-white/10 text-gray-300'}`}>
              <Languages size={14} /> {t.english}
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-4 py-1 rounded-full text-sm flex items-center gap-1 ${lang === 'hi' ? 'bg-white text-black' : 'bg-white/10 text-gray-300'}`}>
              {t.hindi}
            </button>
          </div>
        </div>

        {/* Header Section */}
        <header id="introduction" className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-slide-up">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold">{t.name}</h1>
            <h2 className="text-xl sm:text-2xl text-gray-500 mt-2">{t.role}</h2>
          </div>
        </header>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-10 animate-fade-in">
          <a
            href="https://github.com/vanshsharma69"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
          >
            <Github size={16} />
            <span>{t.github}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vansh-sharma-5061762bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
          >
            <Linkedin size={16} />
            <span>{t.linkedin}</span>
          </a>

          <a
            href="mailto:01vanshsharma@gmail.com"
            className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:scale-105 transition"
          >
            <Mail size={16} />
            <span>{t.email}</span>
          </a>
        </div>

        {/* Bio Section */}
        <section className="mb-16 flex flex-col sm:items-start sm:text-left items-center text-center justify-center animate-fade-in">
          <p className="text-white max-w-3xl text-base sm:text-lg leading-relaxed">
            {t.bio}
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            📬 {t.contact}
          </Link>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 animate-slide-up">
          <h3 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-blue-400">{lang === 'en' ? 'Experience' : 'अनुभव'}</span>
          </h3>

          {/* Experience 1 */}
          <div className="shadow-md rounded-lg max-w-xl my-6 p-6 border border-white/10">
            <h1 className="text-2xl font-bold text-gray-300 mb-1">{t.experience1_title}</h1>
            <span className="text-sm text-blue-400 font-semibold">{t.experience1_role}</span>
            <ul className="list-none space-y-6 text-white mt-4">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full" />
                {t.work_ex_1}
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full" />
                {t.work_ex_2}
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="shadow-md rounded-lg max-w-xl my-6 p-6 border border-white/10">
            <h1 className="text-2xl font-bold text-gray-300 mb-1">{t.experience2_title}</h1>
            <span className="text-sm text-blue-400 font-semibold">{t.experience2_role}</span>
            <ul className="list-none space-y-6 text-white mt-4">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full" />
                {t.work_ex_3}
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 bg-blue-400 rounded-full" />
                {t.work_ex_4}
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="studies" className="mb-8 animate-fade-in">
          <h3 className="text-start text-4xl md:text-5xl font-semibold text-blue-400 mb-8">
            <GraduationCap className="inline mr-2" /> {t.education}
          </h3>
          <div className="shadow-md rounded-lg max-w-xl mb-8 p-6 border border-white/10">
            <h1 className="text-xl font-bold text-white mb-2">{t.education1_title}</h1>
            <p className="text-gray-300">{t.education1_detail}</p>
          </div>
          <div className="shadow-md rounded-lg max-w-xl my-8 p-6 border border-white/10">
            <h1 className="text-2xl font-bold text-white mb-2">{t.education2_title}</h1>
            <p className="text-white">{t.education2_detail}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="animate-slide-up">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-semibold mb-12 text-blue-400">
              <Wrench className="inline mr-2" /> {t.skills}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* App Development */}
              <div className="md:w-11/12 shadow-xl hover:shadow-blue-500/40 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] transition cursor-pointer group border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-400 transition">
                  {t.app_development}
                </h4>
                <div className="space-y-4">
                  <div className="tag">{t.skill1}</div>
                  <div className="tag">{t.skill2}</div>
                </div>
              </div>
              {/* Web Dev */}
              <div className="shadow-xl hover:shadow-purple-400/40 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] transition cursor-pointer group border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition">
                  {t.web_development}
                </h4>
                <div className="space-y-4">
                  <div className="tag">{t.skill3}</div>
                  <div className="tag">{t.skill4}</div>
                  <div className="tag">{t.skill5}</div>
                </div>
              </div>
              {/* DSA */}
              <div className="shadow-xl hover:shadow-cyan-400/60 rounded-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.03] transition cursor-pointer group border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-cyan-300 transition">
                  {t.dsa}
                </h4>
                <div className="space-y-4">
                  <div className="tag">{t.skill6}</div>
                  <div className="tag">{t.skill7}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
