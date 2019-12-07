const context = require.context("./Assets/img/bank", true, /.png$/);

const obj = [];

context.keys().forEach(key => {
  obj.push(context(key));
});
export default obj;
