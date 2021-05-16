
function getQueryParam() {
  const ret = {};

  // 比如说传入的url为 http://localhost:8080?name=jujuxiaer&age=18
  // 通过const queryStr = windows.location.search; 就能得到queryStr的值为 ?name=jujuxiaer&age=18
  const queryStr = windows.location.search;
  // ?name=jujuxiaer&age=18
  const reg = /[?&][^?&]+=[^?&]+/g;
  const found = queryStr.match(reg);

  // found = ["?name=jujuxiaer", "&age=18"]
  if (found && found.length > 0) {
    found.forEach(item => {
      let temp = item.substring(1).split('=');
      let key = temp[0];
      let value = temp[1];
      ret[key] = value;
    })
  }

  return ret;
}