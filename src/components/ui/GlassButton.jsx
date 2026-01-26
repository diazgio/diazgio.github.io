import { motion } from 'framer-motion';

const GlassButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-6 py-3
    backdrop-blur-md rounded-xl font-medium
    transition-all duration-300 cursor-pointer
  `;

  const variants = {
    primary: `
      bg-accent border border-accent text-white
      hover:bg-accent-dark hover:shadow-glow-lg
    `,
    outline: `
      bg-accent/20 border border-accent/40 text-white
      hover:bg-accent/40 hover:border-accent hover:shadow-glow
    `,
    ghost: `
      bg-white/5 border border-white/10 text-white
      hover:bg-white/10 hover:border-white/20
    `,
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noreferrer' : undefined } : {};

  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...linkProps}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </Component>
  );
};

export default GlassButton;
