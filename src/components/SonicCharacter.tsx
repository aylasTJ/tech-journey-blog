import React from 'react';
import Image from 'next/image';
import {SonicCharacter as SonicCharacterType} from '@/lib/sonic'

interface SonicCharacterProps {
  character: SonicCharacterType
}

const SonicCharacter: React.FC<SonicCharacterProps> = ({character}) => {
  return (
      <div className="group flex flex-col items-center min-w-[180px] max-w-[240px] overflow-hidden rounded-[28px] border border-slate-700 bg-slate-950/90 shadow-xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
           style={{ backgroundColor: character.backgroundColor }}
      >
        <div className="relative w-full overflow-hidden bg-slate-900 px-4 py-4">
          <Image
              title={character.name}
              height={96}
              width={96}
              src={character.sprite}
              className="mx-auto rounded-full border-4 border-white/10 shadow-lg"
              alt={character.name}
          />
        </div>
        <div className="w-full px-5 py-5 text-center">
          <div className="text-xl font-semibold text-white capitalize">{character.name}</div>
          <p className="mt-1 text-sm text-slate-400">{character.color} character</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {character.traits.map((trait) => (
                <span key={trait.name}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 shadow-sm"
                >
                  {trait.name}
                </span>
            ))}
          </div>
        </div>
      </div>
  );
};
export default SonicCharacter;
