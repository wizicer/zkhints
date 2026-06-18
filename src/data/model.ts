export interface EIP {
  id: number;
  title: string;
  translations?: {
    title?: {
      ja?: string;
    };
  };
  status: string;
  star?: boolean;
  flag?: "new" | "update";
  erc?: boolean;
  authors: {
    name: string;
    email?: string;
    nick?: string;
    url?: string;
  }[];
}
