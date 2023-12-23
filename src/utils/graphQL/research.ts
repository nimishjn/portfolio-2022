import axios from 'axios';

export const fetchResearchData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
		query: `#graphql
    {
      researchConnection {
        edges {
          node{
            title
            img
            abstract
            link
            publisher
            date
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.researchConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
