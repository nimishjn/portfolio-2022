import axios from 'axios';

export const fetchTestimonialData = async () => {
	const response = await axios.post('http://localhost:4001/graphql', {
		query: `#graphql
    {
      testimonialConnection {
        edges {
          node{
            name
            designation
            linkedin
            company
            companyURL
            relation
            testimonialURL
            message
            date
            id
          }
        }
      }
    }`,
	});
	const data = response?.data?.data?.testimonialConnection?.edges?.map(
		(edge: any) => ({ ...edge.node, id: crypto.randomUUID().slice(0, 8) })
	);
  return data;
};
