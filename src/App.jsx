import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobPage from "./Pages/JobPage"
import NotFoundPage from "./Pages/NotFoundPage"
import Jobpage_sing,{jobLoader} from "./Pages/Jobpage_sing"
import AddJobPage from "./Pages/AddJobPage"
import EditjobsPage from "./Pages/EditjobsPage"




const App = () => {
  //add new job
  const addJob=async (newJob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  //delete job
  const deleteJob=async(id)=>{
    
      const res=await fetch(`/api/jobs/${id}`,{
        method:'DELETE'
        
      })
      return
  }

  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<Jobpage_sing />} loader={jobLoader}/>
        <Route path='/jobs/:id' element={<Jobpage_sing deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage />}/>
        
        
        
  
      </Route>
  )
  )


  return <RouterProvider router={router}/>

}

export default App