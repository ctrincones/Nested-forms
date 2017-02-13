import _ from 'lodash';
import { CategoriesData } from './../../FormData';

export default (attributesList, itemId) => {
  let categoriesLength = [];
  let lastCategoryArray;
  const categoriesWithLength = CategoriesData.map((value) => {
    const categoryArray = _.filter(attributesList,
      { category: value.category });
    const newVal = value;
    newVal.length = categoryArray.length;
    newVal.items = categoryArray;
    return newVal;
  });
  categoriesWithLength.reverse();
  categoriesWithLength.every((categoryItem) => {
    if (categoryItem.length > 0) {
      lastCategoryArray = categoryItem.items;
      return false;
    }
    return true;
  });
  const lastItemInLastCategory = lastCategoryArray[lastCategoryArray.length - 1];
  return lastItemInLastCategory.id === itemId;
};
