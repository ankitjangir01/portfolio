import { getVisitCount } from 'components/firebase/firebase'
import React, { useEffect, useState } from 'react'

const Stats = () => {

    const [visits, setVisits] = useState<number>(0)

    const fetchTotalVisits = async () => {
        const res = await getVisitCount()
        console.log(res);
    }

    useEffect(() => {
        fetchTotalVisits();
    }, [])

  return (
    <div>
        visits: {visits}
    </div>
  )
}

export default Stats