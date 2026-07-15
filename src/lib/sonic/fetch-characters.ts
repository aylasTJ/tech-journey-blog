export type SonicTrait = {
  name: string,
  badgeUrl: string
}

export type SonicCharacter = {
  id: number,
  zoneId: number,
  name: string,
  color: string,
  backgroundColor: string,
  sprite: string,
  traits: SonicTrait[]
}

const colors: Record<string, [number, number, number]> = {
  blue: [0, 114, 255],
  orange: [255, 165, 0],
  red: [255, 0, 0],
  pink: [255, 105, 180],
  gray: [128, 128, 128],
  black: [0, 0, 0],
  purple: [128, 0, 128],
};

const toRgba = (color: string, opacity: number) => {
  const rgb = colors[color] || [100, 100, 100];
  return `rgba(${rgb.join(',')}, ${opacity})`;
};

const placeholderImage = (text: string, size = 96, background = '000000') => {
  return `https://via.placeholder.com/${size}/${background}/ffffff?text=${encodeURIComponent(text)}`;
};

const badgeImage = (name: string) => {
  return `https://via.placeholder.com/32/555555/ffffff?text=${encodeURIComponent(name.charAt(0))}`;
};

const characters: SonicCharacter[] = [
  {
    id: 1,
    zoneId: 1,
    name: 'Sonic',
    color: 'blue',
    backgroundColor: toRgba('blue', 0.15),
    sprite: placeholderImage('Sonic'),
    traits: [
      {name: 'Speed', badgeUrl: badgeImage('Speed')},
      {name: 'Hero', badgeUrl: badgeImage('Hero')}
    ]
  },
  {
    id: 2,
    zoneId: 1,
    name: 'Tails',
    color: 'orange',
    backgroundColor: toRgba('orange', 0.15),
    sprite: placeholderImage('Tails'),
    traits: [
      {name: 'Flight', badgeUrl: badgeImage('Flight')},
      {name: 'Genius', badgeUrl: badgeImage('Genius')}
    ]
  },
  {
    id: 3,
    zoneId: 2,
    name: 'Dr. Eggman',
    color: 'red',
    backgroundColor: toRgba('red', 0.1),
    sprite: placeholderImage('Eggman'),
    traits: [
      {name: 'Inventor', badgeUrl: badgeImage('Inventor')},
      {name: 'Villain', badgeUrl: badgeImage('Villain')}
    ]
  },
  {
    id: 4,
    zoneId: 2,
    name: 'Amy',
    color: 'pink',
    backgroundColor: toRgba('pink', 0.15),
    sprite: placeholderImage('Amy'),
    traits: [
      {name: 'Hammer', badgeUrl: badgeImage('Hammer')},
      {name: 'Heart', badgeUrl: badgeImage('Heart')}
    ]
  },
  {
    id: 5,
    zoneId: 3,
    name: 'Knuckles',
    color: 'red',
    backgroundColor: toRgba('red', 0.1),
    sprite: placeholderImage('Knuckles'),
    traits: [
      {name: 'Strength', badgeUrl: badgeImage('Strength')},
      {name: 'Guardian', badgeUrl: badgeImage('Guardian')}
    ]
  },
  {
    id: 6,
    zoneId: 3,
    name: 'Shadow',
    color: 'black',
    backgroundColor: toRgba('black', 0.2),
    sprite: placeholderImage('Shadow'),
    traits: [
      {name: 'Chaos', badgeUrl: badgeImage('Chaos')},
      {name: 'Mystery', badgeUrl: badgeImage('Mystery')}
    ]
  }
];

export async function fetchCharactersByZone(zoneId: number[] | number): Promise<{ zoneId: number[] | null, errors: any[], characters: SonicCharacter[] }> {
  const resolvedZoneId = Array.isArray(zoneId) ? zoneId : [zoneId];

  const foundCharacters = characters.filter((character) => resolvedZoneId.includes(character.zoneId));

  return {
    errors: [],
    characters: foundCharacters,
    zoneId: resolvedZoneId
  };
}

export async function fetchCharactersByIds(id: string[] | string) {
  const resolvedIds = Array.isArray(id) ? id.map(Number) : [Number(id)];
  const foundCharacters = characters.filter((character) => resolvedIds.includes(character.id));

  return {
    errors: [],
    characters: foundCharacters
  };
}
