'use client';
import { CatalogType } from '@/components/shared/catalog-updates'
import CollectionCard from '@/components/shared/collection-card'
import { SceletonCard } from '@/components/shared/skeletons/sceleton'
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {}

const CollectionsPage = (props: Props) => {
  const [collections, setCollections] = useState<CatalogType[]>([])
  useEffect(() => {
    try{
      const fetchCollectionData = async() => {
        const {data} = await axios.get("http://127.0.0.1:8000/api/tile/collections/")
        setCollections(data.reverse())
      }
      fetchCollectionData()
    } catch (error) {
      console.log(error);
    }
    
  }, [])
  console.log(localStorage.getItem('name'));
  
  return (
    <div className='flex flex-col md:w-[1370px] mx-auto mt-8 px-12 pt-3 mb-20'>
        
      <h2 className='mx-auto text-4xl'>Коллекции плиток</h2>
      <div className='flex flex-wrap gap-3 justify-between'>
          {collections?.length > 0 ? (
              collections.map((collection) => (
                <div key={collection.id}>
                  <CollectionCard id={collection.id} collection={collection} name={collection.name} image1={collection.image1} number_of_elements={collection.number_of_elements} country={collection.country} content_type="collection"/>
                </div>
              
          ))
          ) : (
          new Array(6).fill(0).map((_, index) => (
              <SceletonCard/>
          ))
          )}
      </div>
        
    </div>
  )
}

export default CollectionsPage