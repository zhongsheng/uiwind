window.ready = function (fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

window.get_id = function (name) {
    return document.getElementById(name)
}

export function GetFetch(url, headers={}) {
    return fetch(url, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    })
}
