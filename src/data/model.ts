export interface EIP {
  id: number;
  title: string;
  status: string;
  authors: {
    name: string;
    email?: string;
    nick?: string;
    url?: string;
  }[];
}
