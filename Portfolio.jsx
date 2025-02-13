import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserSecret, FaShieldAlt, FaNetworkWired, FaPython, FaGlobe, FaBug, FaSkull, FaSearch, FaLock } from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => setShowMainContent(true), 3000);
    }, 4000);
  }, []);

  return (
    <div className={`min-h-screen font-mono transition-all duration-500 ${darkMode ? "bg-black text-green-400" : "bg-white text-gray-900"}`}>
      {!showMainContent ? (
        <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 text-2xl overflow-hidden">
          <motion.div 
            className="font-mono text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <p className="text-4xl font-bold">NO SYSTEM IS SECURE, SO IM HERE</p>
          </motion.div>
          {loading && (
            <div className="mt-5 w-64 bg-gray-700 rounded-full h-6 overflow-hidden relative">
              <motion.div 
                className="h-full bg-green-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
              />
              <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm mt-7 text-green-400">VIRUS IS LOADING, BE PATIENT KINDLY</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <header className="p-10 flex flex-col items-center text-center shadow-lg border-b border-green-500 animate-fade-in">
            <motion.h1 
              className="text-5xl font-extrabold text-red-500 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0, x: -50 }}
              transition={{ duration: 1 }}
            >
              <FaUserSecret className="text-6xl" /> Abdullah Awad
            </motion.h1>
            <motion.h2 
              className="text-2xl text-green-300 mt-2"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0, x: -50 }}
              transition={{ duration: 1 }}
            >
              Cyber Security Engineer
            </motion.h2>
          </header>
          
          <div className="absolute top-5 right-5">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-green-500 text-black rounded-lg shadow-md hover:bg-green-600 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
          
          <section className="p-10 text-center bg-gray-900 border-t border-b border-green-500">
            <h2 className="text-3xl font-bold text-green-500">Skills</h2>
            <motion.ul 
              className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[
                { name: "Penetration Testing", icon: <FaShieldAlt /> },
                { name: "Network Security", icon: <FaNetworkWired /> },
                { name: "Python for Hacking", icon: <FaPython /> },
                { name: "Web Security", icon: <FaGlobe /> },
                { name: "Malware Analysis", icon: <FaBug /> },
                { name: "Forensic Investigation", icon: <FaSearch /> },
                { name: "Bug Hunting", icon: <FaSkull /> },
                { name: "Reverse Engineering", icon: <FaLock /> },
                { name: "Cryptography", icon: <FaLock /> }
              ].map((skill, index) => (
                <motion.li 
                  key={index} 
                  className="bg-gray-800 p-3 rounded-lg shadow-md border border-green-500 cursor-pointer hover:bg-green-600 transition flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon} {skill.name}
                </motion.li>
              ))}
            </motion.ul>
          </section>
          
          <section className="p-10 text-center bg-gray-800 border-t border-b border-green-500">
            <h2 className="text-3xl font-bold text-green-500">About Me</h2>
            <motion.p 
              className="text-green-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              طالب يدرس تخصص علوم الحاسوب قسم الأمن السيبراني، قام بالعديد من المهمات السيبرانية، 
              حضر العديد من الندوات والمحاضرات والدورات التدريبية في المجال السيبراني.
              شخص لديه شغف كبير بمجال الأمن السيبراني ويسعى دائماً لتطوير مهاراته.
            </motion.p>
          </section>
          
          <section className="p-10 text-center">
            <h2 className="text-3xl font-bold text-green-500">Contact Me</h2>
            <motion.p 
              className="text-green-300 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Reach out for security consulting and collaborations.
            </motion.p>
            <motion.p 
              className="mt-4 text-2xl bg-green-500 text-black py-2 px-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              01002740178
            </motion.p>
          </section>
        </>
      )}
    </div>
  );
};

export default Portfolio;
