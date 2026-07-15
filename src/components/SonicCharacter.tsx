import React from 'react';
import {SonicCharacter as SonicCharacterType} from '@/lib/sonic'

interface SonicCharacterProps {
  character: SonicCharacterType
}

const SonicCharacter: React.FC<SonicCharacterProps> = (props) => {
  const {character} = props
  return (
      <div className={'flex flex-col items-center min-w-[150px] border border-black rounded shadow m-1'}
           style={{ backgroundColor: character.backgroundColor }}
      >
        <img
            title={character.name}
            height={96}
            width={96}
            src={character.sprite}
            className={"hover:animate-hop duration-300"}
            alt={character.name}
        />
        <div className={'flex flex-col items-center'}>
          <div className={'capitalize'}>{character.name}</div>
          <div className={'flex items-center justify-between'}>
            {character.traits.map((t) => (
                <img key={t.name} src={t.badgeUrl} alt={t.name} className={'p-1'}/>
            ))}
          </div>
        </div>
      </div>
  );
};
export default SonicCharacter;
