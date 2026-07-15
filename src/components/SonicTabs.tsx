'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {clsx} from "@/utils/styles";

interface SonicTabsProps {
  zones: { id: number, name: string }[]
}

const SonicTabs: React.FC<SonicTabsProps> = ({zones}) => {
  const pathname = usePathname()

  return (
      <div className="tabs tabs-lift tabs-lg">
        {zones.map(zone => {
          const href = `/sonic/${zone.id}`;
          return (
              <Link key={zone.id} className={clsx('tab', {'tab-active': href === pathname})} href={href}>
                {zone.name}
              </Link>
          )
        })}
      </div>
  );
};
export default SonicTabs;
