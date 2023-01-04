import axios from 'axios';

export const getImages = async (nextRequest, prevPage) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      q: nextRequest,
      page: prevPage,
      key: '31232052-ebca7977e423ff0aad3113109',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return data;
};
