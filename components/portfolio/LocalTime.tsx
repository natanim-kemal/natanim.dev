'use client';

import { useEffect, useState } from 'react';

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Addis_Ababa',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? '--:--'} <span className="text-[11px] tracking-wide">EAT</span>
    </span>
  );
}
