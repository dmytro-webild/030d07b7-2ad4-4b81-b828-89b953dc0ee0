export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/retreats', label: 'Retreats', pageFile: 'RetreatsPage' },
  { path: '/venue', label: 'Venue & Stay', pageFile: 'VenuePage' },
  { path: '/about', label: 'About', pageFile: 'AboutPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
];
