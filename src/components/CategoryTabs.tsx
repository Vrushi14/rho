import { motion } from "framer-motion";
import { categories } from "@/data/rummyApps";

interface CategoryTabsProps {
  active: string;
  onChange: (id: string) => void;
}

const CategoryTabs = ({ active, onChange }: CategoryTabsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className="relative px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors"
        >
          {active === cat.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-hero rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className={`relative z-10 ${active === cat.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
