import React, { createContext, useContext, useState } from 'react'

const JobContext = createContext()

const JobProvider = ({children}) => {
    const [job, setJob] = useState();
    const [company, setCompany] = useState();

  return (
    <JobContext.Provider value={{job, setJob, company, setCompany}}>
      {children}
    </JobContext.Provider>
  )
}

export const JobState = () => {
    return useContext(JobContext)
}

export default JobProvider
