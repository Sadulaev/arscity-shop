'use client';
import WorkCard from '@/components/shared/workkard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export type CompletedWorkType = {
  id: number;
  title: string;
  address: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

const CompletedWork: React.FC = () => {
  const [workExamples, setWorkExamples] = useState<CompletedWorkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('http://127.0.0.1:8000/api/workexample/work-examples/');
      setWorkExamples(resp.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-10 w-screen md:w-[1370px] lg:w-[1370px] bg-gray-100 min-h-[1000px] mx-auto pt-5 md:px-12 md:mb-20">
        <h2 className='text-3xl text-center'>Примеры наших работ</h2>
        <div className='flex flex-wrap justify-center gap-10'>
            {workExamples.map(example => (
                <WorkCard key={example.id} example={example} />
             ))}
        </div>
        
    </div>
  );
};

export default CompletedWork;