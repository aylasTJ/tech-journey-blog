import {fetchZones} from "@/lib/sonic";
import SonicTabs from "@/components/SonicTabs";

export default async function SonicLayout(props: { children: React.ReactNode }) {
  const zones = await fetchZones();

  return (
      <div className={'w-full flex flex-col items-center gap-10 py-8'}>
        <div className="max-w-4xl text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Sonic Universe
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Explore iconic Sonic zones and characters
          </h1>
          <p className="mt-4 text-slate-400 sm:text-lg">
            Choose a zone below to meet Sonic&apos;s team, rivals, and dramatic environments.
            Each area has a distinct feel and a few classic heroes.
          </p>
        </div>
        <SonicTabs zones={zones.zones}/>
        <div className={'py-4 w-full'}>
          {props.children}
        </div>
      </div>
  )
}
