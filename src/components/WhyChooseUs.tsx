import { motion } from "framer-motion";
import { Shield, Zap, Users, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "100% Safe & Legal", desc: "All apps are RNG certified and legally approved for real money gaming in India." },
  { icon: Zap, title: "Instant Withdrawals", desc: "Get your winnings directly to your bank account or UPI within minutes." },
  { icon: Users, title: "10M+ Active Players", desc: "Join the largest community of Realgameappsplayers across India." },
  { icon: Award, title: "Huge Bonuses", desc: "Exclusive welcome bonuses up to ₹10,000 on top Realgameappsplatforms." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Why Choose Realgameapps?</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">We carefully review and verify every app so you can play with confidence.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
