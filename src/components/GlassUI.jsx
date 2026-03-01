/**
 * Glass UI Components - Glassmorphism Design System
 * Composants réutilisables avec effet verre dépoli
 */

/**
 * GlassButton - Bouton avec effet glassmorphism
 * @param {Object} props
 * @param {'glass'|'gradient'|'outline'} props.variant - Style du bouton
 * @param {'sm'|'md'|'lg'} props.size - Taille du bouton
 * @param {string} props.className - Classes CSS additionnelles
 * @param {Function} props.onClick - Fonction de clic
 * @param {React.ReactNode} props.children - Contenu du bouton
 * @param {React.ReactNode} props.icon - Icône optionnelle
 * @param {boolean} props.disabled - Bouton désactivé
 */
export function GlassButton({
  variant = 'glass',
  size = 'md',
  className = '',
  onClick,
  children,
  icon,
  disabled = false,
  ...props
}) {
  const baseStyles = '!p-2 inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 select-none touch-manipulation';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantStyles = {
    glass: `
      bg-white/80 backdrop-blur-[10px]
      border-2 border-white/90
      text-slate-700
      shadow-[0_4px_16px_rgba(0,0,0,0.08)]
      hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]
      active:scale-98
    `,
    gradient: `
      bg-gradient-to-br from-blue-500 to-blue-600
      border-none
      text-white
      shadow-[0_4px_16px_rgba(59,130,246,0.4)]
      hover:scale-105 hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)]
      active:scale-98
    `,
    outline: `
      bg-transparent
      border-2 border-slate-300/50
      text-slate-700
      backdrop-blur-[8px]
      hover:border-blue-500 hover:text-blue-500
      active:scale-98
    `,
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

/**
 * GlassContainer - Conteneur avec effet glassmorphism
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu
 * @param {string} props.className - Classes CSS additionnelles
 * @param {number} props.blur - Intensité du flou (10-20)
 * @param {number} props.opacity - Opacité du fond (0.4-0.9)
 */
export function GlassContainer({
  children,
  className = '',
  blur = 12,
  opacity = 0.4,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border border-white/60 ${className}`}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * GlassCard - Carte avec effet glassmorphism
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu
 * @param {boolean} props.selected - État sélectionné
 * @param {Function} props.onClick - Fonction de clic
 * @param {string} props.borderColor - Couleur de bordure quand sélectionné
 * @param {string} props.className - Classes CSS additionnelles
 */
export function GlassCard({
  children,
  selected = false,
  onClick,
  borderColor = '#3B82F6',
  className = '',
  ...props
}) {
  return (
    <div
      className={`
        relative flex flex-col items-center justify-start gap-2
        px-4 py-5 min-h-[160px] md:min-h-[180px]
        rounded-2xl cursor-pointer transition-all duration-300 ease-out select-none
        ${selected ? 'shadow-[0_8px_32px_rgba(59,130,246,0.3),0_0_0_1px_rgba(255,255,255,0.5)_inset]' : 'shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)_inset]'}
        ${className}
      `}
      onClick={onClick}
      style={{
        background: selected
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
          : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: selected ? `3px solid ${borderColor}` : '3px solid rgba(203, 213, 225, 0.4)',
        transform: selected ? 'translateY(-4px) scale(1.02)' : 'none',
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.6) inset';
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset';
          e.currentTarget.style.transform = 'none';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * StepIndicator - Indicateur de progression avec glassmorphism
 * @param {Object} props
 * @param {number} props.currentStep - Étape actuelle
 * @param {Array<{label: string}>} props.steps - Liste des étapes
 * @param {string} props.className - Classes CSS additionnelles
 */
export function StepIndicator({ currentStep, steps, className = '' }) {
  return (
    <GlassContainer blur={12} opacity={0.4} className={`flex items-start justify-center mb-6 !px-3 !py-2 ${className}`}>
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center">
          {idx > 0 && (
            <div
              className="w-12 h-0.5 mx-2"
              style={{
                background: idx < currentStep ? '#3B82F6' : '#E2E8F0',
              }}
            />
          )}
          <div className="flex flex-col items-center min-w-[70px]">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all ${
                idx < currentStep ? 'bg-blue-500 text-white' : 'bg-white text-slate-400'
              }`}
              style={{
                border: idx < currentStep ? '2px solid #3B82F6' : '2px solid #E2E8F0',
              }}
            >
              {idx + 1}
            </div>
            <div
              className={`text-xs font-bold mt-1 ${
                idx === currentStep - 1 ? 'text-blue-600' : 'text-slate-500'
              }`}
            >
              {step.label}
            </div>
          </div>
        </div>
      ))}
    </GlassContainer>
  );
}

/**
 * GlassCheckbox - Checkbox avec style glassmorphism
 * @param {Object} props
 * @param {boolean} props.checked - État coché
 * @param {Function} props.onChange - Fonction de changement
 * @param {string} props.color - Couleur quand coché
 * @param {string} props.className - Classes CSS additionnelles
 */
export function GlassCheckbox({
  checked = false,
  onChange,
  color = '#3B82F6',
  className = '',
  ...props
}) {
  return (
    <div
      className={`absolute top-3 right-3 w-6 h-6 rounded flex items-center justify-center text-sm font-black transition-all duration-200 cursor-pointer ${className}`}
      style={{
        backgroundColor: checked ? color : 'transparent',
        border: checked ? 'none' : '2px solid rgba(148, 163, 184, 0.5)',
        color: checked ? 'white' : 'transparent',
      }}
      onClick={onChange}
      {...props}
    >
      {checked && <span>✓</span>}
    </div>
  );
}

/**
 * GlassBadge - Badge coloré avec style glassmorphism
 * @param {Object} props
 * @param {string} props.children - Contenu
 * @param {string} props.color - Couleur de fond
 * @param {string} props.className - Classes CSS additionnelles
 */
export function GlassBadge({ children, color = '#3B82F6', className = '' }) {
  return (
    <div
      className={`absolute top-3 left-3 !px-2 py-1 rounded-md text-sm font-black text-white ${className}`}
      style={{
        backgroundColor: color,
        boxShadow: `0 2px 8px ${color}40`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * ProgressDots - Points de progression
 * @param {Object} props
 * @param {number} props.total - Nombre total de points
 * @param {number} props.active - Nombre de points actifs
 * @param {string} props.color - Couleur des points actifs
 * @param {string} props.className - Classes CSS additionnelles
 */
export function ProgressDots({ total = 6, active = 0, color = '#3B82F6', className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-1 mt-2 ${className}`}>
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: i < active ? color : '#CBD5E1',
          }}
        />
      ))}
    </div>
  );
}
