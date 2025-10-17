export type TemplateItem = {
  id: string;
  slug: string;
  title: string;
  category: 'Resume' | 'Invoice' | 'Proposal' | 'Other';
  description: string;
  features: string[];
  price: number;
  etsy_url?: string;
  cover_img: string;
  gallery: string[];
  tools: string[]; // e.g. ["Canva","Google Docs"]
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  body_md: string;
  tags: string[];
  created_at: string;
};
