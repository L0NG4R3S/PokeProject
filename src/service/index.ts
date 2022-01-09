export const uppercaseFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
}

export const formatText = (text: string) => {
  const formatedN = text.replace(/\n/g, " ");
  const formatedF = formatedN.replace(/\f/g, " ");
  const formatedPokemon = formatedF.replace(/POKéMON/g, "Pokémon");
  return formatedPokemon;
}