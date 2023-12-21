// navigationTypes.ts
export type RootStackParamList = {
    StackHome: undefined;
    CarDetails: undefined;
    NewsDetails: { news: NewsItem };
  };
  
  export type NewsItem = {
    title: string;
    description: string;
    images: number[];
    date: string;
  };