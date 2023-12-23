import axios from 'axios';

export const fetchOtherData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
		query: `#graphql
    {
      otherConnection {
        edges {
          node{
            fromDate
            toDate
            title
            type
            imageURL
            description
            url
            techStack
            featured
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.otherConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
