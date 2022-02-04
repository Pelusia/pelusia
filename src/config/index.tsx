export const projectTitleWidth = {
  xs: 376,
  sm: 376,
  md: 376,
  lg: 376,
  xl: 376,
  0: undefined,
};

export const breakpoints = (vw: number) => {
  if (typeof window !== 'undefined') {
    const vw = window.innerWidth;
    let b = 'xs';
    if (vw < 768) {
      b = 'sm';
    } else if (vw < 992) {
      b = 'md';
    } else if (vw < 1200) {
      b = 'lg';
    } else if (vw < 1440) {
      b = 'xl';
    }
    return b;
  }
  return 0;
};
