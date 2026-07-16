const BASE_URL = "https://api.api-onepiece.com/v2";

function normalizeCharacter(character) {
  return {
    id: character.id,
    name: character.name || "Personaje desconocido",
    crew: character.crew?.name || "Sin tripulación",
    role: character.job || "Rol desconocido",
    devilFruit: character.fruit?.name || "Sin fruta",
    bounty: character.bounty || "Desconocida",
    age: character.age || "Desconocida",
    size: character.size || "Desconocida",
    status: character.status || "Desconocido",
    image: `https://placehold.co/300x400?text=${encodeURIComponent(
      character.name || "Personaje"
    )}`,
  };
}

function normalizeCrew(crew) {
  return {
    id: crew.id,
    title: crew.name || "Tripulación desconocida",
    subtitle: crew.roman_name || "Sin nombre alternativo",
    description: crew.description || "Sin descripción disponible.",
    detailOne: `Estado: ${crew.status || "Desconocido"}`,
    detailTwo: `Integrantes: ${crew.number || "Desconocido"}`,
  };
}

function normalizeFruit(fruit) {
  return {
    id: fruit.id,
    title: fruit.name || "Fruta desconocida",
    subtitle: fruit.roman_name || "Sin nombre romano",
    description: fruit.description || "Sin descripción disponible.",
    detailOne: `Tipo: ${fruit.type || "Desconocido"}`,
    detailTwo: "",
  };
}

function normalizeArc(arc) {
  return {
    id: arc.id,
    title: arc.title || arc.name || "Arco desconocido",
    subtitle: arc.saga?.title || "Saga desconocida",
    description: arc.description || "Sin descripción disponible.",
    detailOne: `Saga: ${arc.saga?.title || "Desconocida"}`,
    detailTwo: `Episodios: ${arc.saga?.saga_episode || "Desconocido"}`,
  };
}

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters/en`);

  if (!response.ok) {
    throw new Error("Error al obtener personajes");
  }

  const data = await response.json();

  console.log("Personajes API:", data);

  return data.map(normalizeCharacter);
}

export async function getCrews() {
  const response = await fetch(`${BASE_URL}/crews/en`);

  if (!response.ok) {
    throw new Error("Error al obtener tripulaciones");
  }

  const data = await response.json();

  console.log("Tripulaciones API:", data);

  return data.map(normalizeCrew);
}

export async function getFruits() {
  const response = await fetch(`${BASE_URL}/fruits/en`);

  if (!response.ok) {
    throw new Error("Error al obtener frutas");
  }

  const data = await response.json();

  console.log("Frutas API:", data);

  return data.map(normalizeFruit);
}

export async function getArcs() {
  const response = await fetch(`${BASE_URL}/arcs/en`);

  if (!response.ok) {
    throw new Error("Error al obtener arcos");
  }

  const data = await response.json();

  console.log("Arcos API:", data);

  return data.map(normalizeArc);
}

export async function searchCharactersByName(name) {
  const response = await fetch(
    `${BASE_URL}/characters/en/search/?name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    throw new Error("Error al buscar personajes");
  }

  const data = await response.json();

  return data.map(normalizeCharacter);
}