export type CultureEntry = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  imageUrl: string | null;
  imageAlt: string;
  placeholderEmoji: string;
};

export type Country = {
  slug: string;
  name: string;
  flagEmoji: string;
  accentColor: string;
};
