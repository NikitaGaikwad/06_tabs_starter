import React from 'react'

const BtnContainer = ({jobs, setCurrentItem, currentItem}) => {
  return (
    <div className='btn-container'>
        {jobs.map((job, index)=>{
            return(
                <button className={index===currentItem?'job-btn active-btn':'job-btn'} onClick={()=>setCurrentItem(index)}  key={job.id}>{job.company}</button>
            )
        })}
      
    </div>
  )
}

export default BtnContainer
