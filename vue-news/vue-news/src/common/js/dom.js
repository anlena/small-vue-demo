export function attachImageUrl(url) {
  if (url !== void 0) {
    let reg = /http\w{0,1}:\/\/p/g
    return url.replace(reg, 'https://images.weserv.nl/?url=p')
  }
}