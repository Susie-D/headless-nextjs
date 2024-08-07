import { HeroQuery } from '@/types';
import { contentGqlFetcher } from './fetch';

export const getContentForHero = async () => {
  const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
                title
                subtitle
                preTitle
                callToActionsCollection {
                items {
                    link
                    label
                    }
                }
            }
        }
    }
    `;
  const data = await contentGqlFetcher<HeroQuery>({ query }); 
  if (!data) {
    throw Error('oops')
  }
  return data;
};
