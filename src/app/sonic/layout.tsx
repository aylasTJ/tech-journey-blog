import {fetchZones} from "@/lib/sonic";
import SonicTabs from "@/components/SonicTabs";

export default async function SonicLayout(props: { children: React.ReactNode }) {
  const zones = await fetchZones()

  return (
      <div className={'w-full flex flex-col items-center'}>
        <SonicTabs zones={zones.zones}/>
        <div className={'py-4'}>
          {props.children}
        </div>
      </div>
  )
}
