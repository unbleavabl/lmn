import { info, Item } from 'shared/data/info'
import { useEffect } from 'react'

const images = Object.values(info)
  .reduce((acc: Item[], item) => [...acc, ...item.data], [])
  .reduce((acc: string[], item) => {
    const typeImages = item.types?.reduce((typesAcc: string[], type) => {
      return [...typesAcc, ...type.options.map((option) => option.image)]
    }, [])
    return [...acc, ...(typeImages || []), item.image]
  }, [])
  .filter((x) => x!!)

export const useImagePrefetch = () => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])
}
