import React from 'react'
import DataTable from './DataTable'
import ClusterDisplay from '../Components/ClusterDisplay'
import ClusterChart from '../Components/ClusterChart'


const Analyser = () => {
  return (
    <div className='mt-[10vh]'>
      <DataTable/>
      <ClusterChart/>
      <ClusterDisplay/>
      
    </div>
  )
}

export default Analyser
