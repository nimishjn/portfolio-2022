import axios from 'axios';
import { tinaAxiosInstance } from 'utils/axiosInstance';

export const fetchSkillData = async () => {
	const response = await tinaAxiosInstance.post('/api/tina/gql', {
		query: `#graphql
    {
      skillConnection {
        edges {
          node{
            name
            icon
            bgcolor
            link
            category
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.skillConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
