export type ContentForCustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string;
      slug: string;
      customer: {
        logo: {
          url: string;
          width: number;
          height: number;
        };
        name: string;
      };
      body: {
        json: JSON
      };
    }[]
  };
};

export type HeaderNavigationQuery = {
  navigationCollection: {
    items: {
      name: string;
      linksCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};

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
