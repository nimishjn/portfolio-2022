import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchExperienceData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      experienceConnection {
        edges {
          node{
            fromDate
            toDate
            positionHeld
            orgName
            orgLocation
            imageURL
            description
            skills {
              skill {
                ...on Skill {
                  name
                  icon
                  bgcolor
                  link
                  category
                }
              }
            }
            url
            featured
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.experienceConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
	return data;
};
