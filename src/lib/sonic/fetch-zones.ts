export type SonicZone = {
  id: number,
  name: string
}

const zones: SonicZone[] = [
  {id: 1, name: 'Green Hill Zone'},
  {id: 2, name: 'Chemical Plant Zone'},
  {id: 3, name: 'Angel Island Zone'}
];

export async function fetchZones(): Promise<{ zones: SonicZone[], errors: any[] }> {
  return {
    errors: [],
    zones
  };
}
