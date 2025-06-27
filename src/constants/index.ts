export interface TopicOption {
  id: string;
  label: string;
  value: string;
}

export interface DiscussionTitle {
  id: string;
  title: string;
  category: string;
}

export interface FormData {
  selectedTopic: string;
  selectedTitle: string;
  textLength: number;
}

export const TOPICS: TopicOption[] = [
  { id: "fun", label: "Fun", value: "fun" },
  { id: "education", label: "Education", value: "education" },
  { id: "sports", label: "Sports", value: "sports" },
  { id: "news", label: "News", value: "news" },
  { id: "investment", label: "Investment", value: "investment" },
  { id: "facts", label: "Facts", value: "facts" },
];

export const DISCUSSION_TITLES: any = {
  fun: [
    { id: "board-games", title: "Board games revival", category: "fun" },
    { id: "comedy-trends", title: "Comedy trends", category: "fun" },
    { id: "amusement-parks", title: "Amusement parks", category: "fun" },
    { id: "escape-rooms", title: "Escape rooms", category: "fun" },
    {
      id: "street-performances",
      title: "Street performances",
      category: "fun",
    },
    { id: "online-challenges", title: "Online challenges", category: "fun" },
    { id: "festivals-impact", title: "Festivals impact", category: "fun" },
    { id: "crafting-movement", title: "Crafting movement", category: "fun" },
    { id: "social-gaming", title: "Social gaming", category: "fun" },
    { id: "virtual-reality", title: "Virtual reality", category: "fun" },
  ],
  education: [
    {
      id: "gamified-learning",
      title: "Gamified learning",
      category: "education",
    },
    {
      id: "education-systems",
      title: "Education systems",
      category: "education",
    },
    {
      id: "bilingual-benefits",
      title: "Bilingual benefits",
      category: "education",
    },
    {
      id: "standardized-testing",
      title: "Standardized testing",
      category: "education",
    },
    { id: "arts-in-schools", title: "Arts in schools", category: "education" },
    { id: "tech-bootcamps", title: "Tech bootcamps", category: "education" },
    {
      id: "homeschooling-dynamics",
      title: "Homeschooling dynamics",
      category: "education",
    },
    {
      id: "mentorship-importance",
      title: "Mentorship importance",
      category: "education",
    },
    {
      id: "educational-equity",
      title: "Educational equity",
      category: "education",
    },
    { id: "mobile-learning", title: "Mobile learning", category: "education" },
  ],
  sports: [
    { id: "sports-medicine", title: "Sports medicine", category: "sports" },
    { id: "team-sociology", title: "Team sociology", category: "sports" },
    { id: "olympic-economics", title: "Olympic economics", category: "sports" },
    { id: "gender-parity", title: "Gender parity", category: "sports" },
    { id: "fandom-psychology", title: "Fandom psychology", category: "sports" },
    { id: "extreme-sports", title: "Extreme sports", category: "sports" },
    { id: "sports-business", title: "Sports business", category: "sports" },
    { id: "youth-athletics", title: "Youth athletics", category: "sports" },
    { id: "data-analytics", title: "Data analytics", category: "sports" },
    { id: "doping-ethics", title: "Doping ethics", category: "sports" },
  ],
  news: [
    { id: "citizen-journalism", title: "Citizen journalism", category: "news" },
    {
      id: "whistleblower-influence",
      title: "Whistleblower influence",
      category: "news",
    },
    { id: "fake-news", title: "Fake news", category: "news" },
    {
      id: "print-media-survival",
      title: "Print media survival",
      category: "news",
    },
    { id: "social-media-news", title: "Social media news", category: "news" },
    { id: "cybersecurity-news", title: "Cybersecurity news", category: "news" },
    { id: "democratic-media", title: "Democratic media", category: "news" },
    { id: "news-deserts", title: "News deserts", category: "news" },
    { id: "news-economics", title: "News economics", category: "news" },
    {
      id: "broadcast-evolution",
      title: "Broadcast evolution",
      category: "news",
    },
  ],
  investment: [
    { id: "robo-advising", title: "Robo-advising", category: "investment" },
    {
      id: "geopolitical-impacts",
      title: "Geopolitical impacts",
      category: "investment",
    },
    { id: "index-funds", title: "Index funds", category: "investment" },
    {
      id: "real-estate-trends",
      title: "Real estate trends",
      category: "investment",
    },
    {
      id: "startup-investing",
      title: "Startup investing",
      category: "investment",
    },
    { id: "social-trading", title: "Social trading", category: "investment" },
    { id: "tax-strategies", title: "Tax strategies", category: "investment" },
    {
      id: "emerging-markets",
      title: "Emerging markets",
      category: "investment",
    },
    {
      id: "financial-literacy",
      title: "Financial literacy",
      category: "investment",
    },
    { id: "pension-futures", title: "Pension futures", category: "investment" },
  ],
  facts: [
    { id: "animal-oddities", title: "Animal oddities", category: "facts" },
    { id: "everyday-science", title: "Everyday science", category: "facts" },
    {
      id: "historical-obscurities",
      title: "Historical obscurities",
      category: "facts",
    },
    { id: "science-myths", title: "Science myths", category: "facts" },
    { id: "human-body-facts", title: "Human body facts", category: "facts" },
    {
      id: "oceanic-discoveries",
      title: "Oceanic discoveries",
      category: "facts",
    },
    { id: "space-exploration", title: "Space exploration", category: "facts" },
    { id: "ancient-tech", title: "Ancient tech", category: "facts" },
    { id: "world-laws", title: "World laws", category: "facts" },
    { id: "bizarre-news", title: "Bizarre news", category: "facts" },
  ],
};

export const TEXT_LENGTH_CONFIG = {
  min: 100,
  max: 1000,
  default: 300,
  step: 50,
  marks: [
    { value: 100, label: "100 words" },
    { value: 250, label: "250 words" },
    { value: 500, label: "500 words" },
    { value: 750, label: "750 words" },
    { value: 1000, label: "1000 words" },
  ],
};

export default {
  TOPICS,
  DISCUSSION_TITLES,
  TEXT_LENGTH_CONFIG,
};
