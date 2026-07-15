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
  const zone = zones.zones.find((zoneItem) => zoneItem.id === zoneId);

  if (!zone) {
    return notFound();
  }

  const characters = await fetchCharactersByZone(zoneId);

  return (
      <div className="space-y-8 px-4">
        <section className="rounded-[32px] border border-slate-700 bg-slate-950/80 p-8 shadow-xl shadow-slate-900/20">
          <h2 className="text-3xl font-bold text-cyan-300">{zone.name}</h2>
          <p className="mt-3 max-w-3xl text-slate-400 sm:text-lg">{zone.description}</p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.characters.map((character) => (
              <SonicCharacter key={character.id} character={character} />
          ))}
        </div>
      </div>
  )
}
