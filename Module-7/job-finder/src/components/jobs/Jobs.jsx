import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findJobs } from '../../redux/job/jobSlice';
import JobHeader from './JobHeader';
import JobList from './JobList';


export default function Jobs() {
  const { jobs, isError, error, isLoading } = useSelector(state => state.jobs)
  const { selectedFilter } = useSelector(state => state.filter)
  const {  searchedText, selected } = useSelector(state => state.sort)
  const dispatch = useDispatch()

  const filterByJobType = job => selectedFilter === 'All Available Jobs' ? true: job.type === selectedFilter

  const search = job => {
    const findedJobs = job.title.search(new RegExp(searchedText, 'gi'))
    // console.log(findJobs)
    if(searchedText.length <= 0){
      return true;
    }else {
      if(findedJobs !== -1){
        return true;
      }else{
        return false;
      }
    }
  }

  const sortBySalary = (jobA, jobB) => {
    const salaryA = jobA.salary;
    const salaryB = jobB.salary;
    // console.log(jobA, jobB)
    if(selected === 'Default'){
      return 0;
    }
    // ascending order
    if(selected === 'Salary (Low to High)'){
      if(salaryA < salaryB){
        return -1;
      }
    }
    // descending order
    if(selected === 'Salary (High to Low)'){
      if(salaryA > salaryB){
        return 1;
      }
    }
  }

  useEffect(() => {
    dispatch(findJobs())
  }, [])

  let content = null;

  if (isLoading) content = <div>Loading...</div>

  if (!isLoading && isError) content = <div>{error?.message}</div>

  if (!isLoading && !isError && jobs.length === 0) content = <div>No Jobs Found</div>

  if (!isLoading && !isError && jobs.length) {
    content = jobs?.filter(filterByJobType).filter(search).sort(sortBySalary).map(job => <JobList key={job.id} job={job} />)
  }
  return (
    <>
      <JobHeader />

      <div className="jobs-list">
        {/* <!-- Single Job 1--> */}
        {content}
      </div>
    </>
  )
}