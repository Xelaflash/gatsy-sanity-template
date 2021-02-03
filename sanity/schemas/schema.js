import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import kebab from './kebab';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([kebab]),
});
