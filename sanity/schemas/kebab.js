import { GiKebabSpit as icon } from 'react-icons//gi';

export default {
  // Computer Name
  name: 'kebab',
  // visible title
  title: 'Döner Kebab',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Kebab Name',
      type: 'string',
      description: 'Name of the Kebab restaurant',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
