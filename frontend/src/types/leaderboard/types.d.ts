interface Item {
  name: string;
  upvote: number;
  image: string;
  rank: number;
  description: string;
  owner: string;
  contributers: string[{
    muid: string;
    image: string;
  }];
}
