import React, {useEffect, useState} from "react";

interface DataFromApiProps {
  getData: (index: number) => string[]
}
export default function DataFromApi({ getData }: DataFromApiProps) {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    console.log('render')
    const newData = getData(42)
    setItems(newData)
  }, [getData]);

  return (
    <ul>
      { items.map(i => <li key={i}>{i}</li>) }
    </ul>
  )
}