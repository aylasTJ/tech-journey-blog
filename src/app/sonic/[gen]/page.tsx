import {fetchZones, fetchCharactersByZone} from "@/lib/sonic";
import {notFound} from 'next/navigation';
import SonicCharacter from "@/components/SonicCharacter";

type Props = {
  params: {
    gen: string
  }
}

export default async function SonicZonePage(props: Props) {
  const zoneId = Number(props.params.gen);
  const zones = await fetchZones();
  const validZoneIds = zones.zones.map(x => x.id);

  if (!validZoneIds.includes(zoneId)) {
    return notFound();
  }

  const characters = await fetchCharactersByZone(zoneId);

  return (
      <div>
        <ul className={'flex items-center justify-center flex-wrap mx-4'}>
          {characters.characters.map((character) => {
            return (
                <li key={character.id}>
                  <SonicCharacter character={character}/>
                </li>
            )
          })}
        </ul>
      </div>
  )
}
