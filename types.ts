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
