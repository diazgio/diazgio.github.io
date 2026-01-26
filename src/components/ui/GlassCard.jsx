import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  ...props
}) => {
  const baseClasses = `
    bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl
    shadow-glass transition-all duration-300
  `;

  const hoverClasses = hover ? `
    hover:bg-white/10 hover:border-white/20
    hover:shadow-glow hover:scale-[1.02]
  ` : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
