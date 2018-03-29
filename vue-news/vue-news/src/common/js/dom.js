export function attachImageUrl(url) {
  if (url !== void 0) {
    let reg = /http\w{0,1}:\/\/p/g
    return url.replace(reg, 'https://images.weserv.nl/?url=p')
  }
}

export function addClass(){
  if(hasClass(el,className)){
    return;
  }
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}