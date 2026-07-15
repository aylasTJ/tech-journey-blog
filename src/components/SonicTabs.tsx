'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {clsx} from "@/utils/styles";

interface SonicTabsProps {
  zones: { id: number, name: string }[]
}

const SonicTabs: React.FC<SonicTabsProps> = ({zones}) => {
  const pathname = usePathname();

  return (
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {zones.map(zone => {
          const href = `/sonic/${zone.id}`;
          const isActive = href === pathname;
          return (
              <Link
                  key={zone.id}
                  href={href}
                  className={clsx(
                      'btn btn-sm rounded-full px-5 transition',
                      {
                        'btn-primary text-white': isActive,
                        'btn-ghost text-slate-200 hover:bg-slate-800': !isActive,
                      }
                  )}
              >
                {zone.name}
              </Link>
          )
        })}
      </div>
  );
};
export default SonicTabs;
