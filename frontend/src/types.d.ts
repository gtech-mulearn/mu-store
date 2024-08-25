interface ProductProps {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  votes: number;
}

interface AxiosResponseData {
  statusCode: number;
  response: {
    accessToken: string;
  };
}