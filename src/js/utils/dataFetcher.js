const dataFetcher = async function(url=null){

  const reponse = await fetch(url);
  const payload = await response.json()

  return payload;
}

export {dataFetcher}