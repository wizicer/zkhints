export interface EIP {
  id: number;
  title: string;
  status: string;
  star: boolean;
  authors: {
    name: string;
    email?: string;
    nick?: string;
    url?: string;
  }[];
}
