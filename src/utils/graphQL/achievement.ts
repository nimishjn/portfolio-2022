import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchAchievementData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      achievementConnection {
        edges {
          node{
            fromDate
            toDate
            title
            orgName
            imageURL
            description
            url
            featured
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.achievementConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
