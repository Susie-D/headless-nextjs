export type LogoWallQuery = {
  assetCollection: {
    items: {
      url: string;
      title: string;
      width: number;
      height: number;
    }[];
  };
};

export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subtitle: string;
      preTitle: string;
      callToActionsCollection: {
        items: {
          link: string;
          label: string;
        }[];
      };
    }[];
  };
};
