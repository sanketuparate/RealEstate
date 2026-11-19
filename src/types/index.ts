export interface GalleryItem {
  id: string;
  category: 'living' | 'suites' | 'kitchen' | 'wellness';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highResImage: string;
  gridSpan: string; // e.g., 'lg:col-span-8' or 'lg:col-span-4'
  height: string;
}

export interface WalkthroughStage {
  id: number;
  navLabel: string;
  badge: string;
  sub: string;
  title: string;
  desc: string;
  note: string;
  img: string;
}

export interface LightboxData {
  isOpen: boolean;
  image: string;
  title: string;
  description: string;
}
