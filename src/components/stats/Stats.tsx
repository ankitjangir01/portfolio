"use client";
import { getVisitCount } from 'components/firebase/firebase'
import React, { useEffect, useState } from 'react'
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card"

const Stats = () => {

    const [visits, setVisits] = useState<number>(0)

    const fetchTotalVisits = async () => {
        const res = await getVisitCount()
        if(res) setVisits(res)
    }

    useEffect(() => {
        fetchTotalVisits();
    }, [])

    const getCountSuffix = (count: number) => {
      if (count % 100 >= 11 && count % 100 <= 13) {
        return 'th';
      }

      switch (count % 10){
        case 1:
          return'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }

    return (
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
        <TextRevealCard
          text="Wanna know something interesting? Hover here..."
          revealText={`🤩 It's the ${visits+1}${getCountSuffix(visits+1)} time someone visiting here`}
        >
          {/* <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription> */}
        </TextRevealCard>
      </div>
    );
}

export default Stats