export type SonicZone = {
  id: number,
  name: string,
  description: string
}

const zones: SonicZone[] = [
  {
    id: 1,
    name: 'Green Hill Zone',
    description: 'Lush hills, loop-de-loops, and bright skies — the perfect fast-start zone for Sonic and his friends.'
  },
  {
    id: 2,
    name: 'Chemical Plant Zone',
    description: 'A high-tech zone full of neon pipes, toxic water, and daring platforming challenges.'
  },
  {
    id: 3,
    name: 'Angel Island Zone',
    description: 'A tropical island base full of ancient ruins, treasure guardians, and powerful fighters.'
  }
];

export async function fetchZones(): Promise<{ zones: SonicZone[], errors: any[] }> {
  return {
    errors: [],
    zones
  };
}
