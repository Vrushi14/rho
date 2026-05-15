// import { motion } from "framer-motion";
// import { MessageCircle, Send, Play, Camera } from "lucide-react";

// const socials = [
//   { icon: MessageCircle, label: "WhatsApp", href: "#", color: "bg-green-500 hover:bg-green-600" },
//   { icon: Send, label: "Telegram", href: "#", color: "bg-sky-500 hover:bg-sky-600" },
//   { icon: Play, label: "YouTube", href: "#", color: "bg-red-500 hover:bg-red-600" },
//   { icon: Camera, label: "Instagram", href: "#", color: "bg-pink-500 hover:bg-pink-600" },
// ];

// const FloatingSocial = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 1 }}
//       className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
//     >
//       {socials.map((s) => (
//         <a
//           key={s.label}
//           href={s.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           title={s.label}
//           aria-label={s.label}
//           className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-primary-foreground shadow-lg transition-all hover:scale-110`}
//         >
//           <s.icon className="w-[18px] h-[18px]" />
//         </a>
//       ))}
//     </motion.div>
//   );
// };

// export default FloatingSocial;
import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "#", color: "bg-green-500 hover:bg-green-600" },
  { icon: FaTelegramPlane, label: "Telegram", href: "#", color: "bg-sky-500 hover:bg-sky-600" },
  { icon: FaYoutube, label: "YouTube", href: "#", color: "bg-red-500 hover:bg-red-600" },
  { icon: FaInstagram, label: "Instagram", href: "#", color: "bg-pink-500 hover:bg-pink-600" },
];

const FloatingSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.label}
          aria-label={s.label}
          className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white shadow-lg transition-all hover:scale-110`}
        >
          <s.icon className="w-[18px] h-[18px]" />
        </a>
      ))}
    </motion.div>
  );
};

export default FloatingSocial;