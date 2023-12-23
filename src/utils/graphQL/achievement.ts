import axios from 'axios';

export const fetchAchievementData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
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
