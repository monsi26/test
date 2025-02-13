import { useState } from "react";
import { motion } from "framer-motion";
import { X, Mail } from "lucide-react";
import gif from "../assets/cat3.gif";
import music from "../assets/music2.mp3";

export default function Test() {
  const [showLetter, setShowLetter] = useState(false);

  const letterContent = `My Baby,\n\nHappy Valentine's Day! 💜\nI just want you to know how much you mean to me. You bring so much joy, love, and happiness, Baby, kahit minsan lang tayo magkita.\n\nEvery moment with you is special, and I truly cherish our time together—lalo na yung mga 'walkathon' natin tuwing uwian. You are my sunshine and my happiness, just like your favorite flower, the sunflower. 🌻\n\nOn this special day, I just want you to know that you are deeply loved.\nI love you and I miss you so much Baby :<\n\nLove\nSimon`;
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen transition-all ">
      {showLetter && <div className="fixed inset-0 backdrop-blur-sm"></div>}

      {/* Main Box */}
      <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-300 text-center relative z-10">
        <img
          src={gif}
          alt="Cat blowing a red heart"
          className="w-45 h-45 object-cover rounded-xl mx-auto"
        />
        <h1 className="text-2xl font-bold text-black-500 mt-4">
          Happy Valentine's Day, Baby!
        </h1>

        {/* Envelope Icon */}
        <div
          className="mt-4 p-3 bg-gray-500 text-white rounded-full shadow-lg cursor-pointer transition-all hover:bg-red-600 hover:scale-105"
          onClick={() => setShowLetter(true)}
        >
          <Mail size={32} className="mx-auto" />
        </div>
      </div>

      {showLetter && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-300 w-[700px] h-[600px] flex flex-col justify-center text-left relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-all"
              onClick={() => setShowLetter(false)}
            >
              <X size={24} />
            </button>
            <div className="whitespace-pre-wrap text-gray-700 text-lg font-poppins text-left px-8 leading-relaxed">
              {letterContent}
            </div>
            <audio controls className="mt-4 mx-auto">
              <source src={music} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        </div>
      )}
    </div>
  );
}
