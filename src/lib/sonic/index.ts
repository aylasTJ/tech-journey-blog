import {fetchCharactersByZone, fetchCharactersByIds, type SonicCharacter} from "@/lib/sonic/fetch-characters";
import {fetchZones} from "@/lib/sonic/fetch-zones";

export type { SonicCharacter }
export { fetchZones, fetchCharactersByZone, fetchCharactersByIds }
