import {fetchZones, fetchCharactersByZone} from "@/lib/sonic";
import invariant from "tiny-invariant";
import SonicCharacter from "@/components/SonicCharacter";

type Props = {
  params: Promise<{
    zone: string
  }>
}

export default async function SonicZonePage(props: Props) {
  const zoneId = Number((await props.params).zone);
  const zones = await fetchZones()
  const validZoneIds = zones.zones.map(x => x.id);
  invariant(validZoneIds.includes(zoneId), `Zone ${zoneId} is invalid`)
  const characters = await fetchCharactersByZone(zoneId)

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
