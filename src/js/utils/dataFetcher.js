const dataFetcher = async function(url=null){

  const reponse = await fetch(url);
  const toDoJSON = await response.json()

  return toDoJSON;
}

export {dataFetcher}