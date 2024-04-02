import _ from 'lodash';
export function pagination(items,currentpage,pagesize){
const startIndex= (currentpage-1)*pagesize;
return _(items).slice(startIndex).take(pagesize).value();
} 