import React from 'react';

export function Badge({ 
  children, 
  variant = 'purple', 
  size = 'md',
  dot = false,
  className = '' 
}) {
  const variants = {
    purple: 'bg-purple-50 text-purple-700 border-purple-200/80',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    blue: 'bg-blue-50 text-blue-700 border-blue-200/80',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    dark: 'bg-slate-900 text-white border-slate-800',
    glass: 'bg-white/80 backdrop-blur-md text-slate-800 border-slate-200/80 shadow-2xs'
  };

  const sizes = {
    sm: 'text-[10px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3.5 py-1 tracking-wide',
    lg: 'text-sm px-4 py-1.5'
  };

  const dotColors = {
    purple: 'bg-brand-purple',
    green: 'bg-emerald-500',
    blue: 'bg-blue-500',
    amber: 'bg-amber-500',
    slate: 'bg-slate-400',
    dark: 'bg-emerald-400',
    glass: 'bg-brand-purple'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase border transition-all ${variants[variant] || variants.purple} ${sizes[size] || sizes.md} ${className}`}>
      {dot && (
        <span className="flex h-1.5 w-1.5 relative">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant] || 'bg-brand-purple'}`}></span>
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant] || 'bg-brand-purple'}`}></span>
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export function SectionHeader({
  badge,
  badgeVariant = 'purple',
  title,
  highlight,
  highlightGradient = 'from-brand-purple via-indigo-600 to-brand-green',
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-14 sm:mb-20 ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} dot>{badge}</Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className={`bg-gradient-to-r ${highlightGradient} bg-clip-text text-transparent`}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
