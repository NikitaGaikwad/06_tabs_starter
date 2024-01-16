import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [jobs, setJobs] = useState([]);
  let [currentItem, setCurrentItem] = useState(0)

  const fetchData = async()=>{
    const receive = await fetch(url);
    const newJobs = await receive.json();
    setJobs(newJobs);
    setIsLoading(false);
    // console.log(jobs);

  }

  useEffect(()=>{
    fetchData();
  },[]);
  // console.log(jobs);


  if(isLoading){
    return <div className="loading"></div>
  }

  
  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>

  )
};
export default App;
