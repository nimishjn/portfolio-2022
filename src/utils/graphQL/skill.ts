import axios from 'axios';

export const fetchSkillData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
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
