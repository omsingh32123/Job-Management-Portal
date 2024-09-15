import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NodeFoundPage from './components/NodeFoundPage';
import JobPageSingular,{jobLoader} from './components/JobPageSingular';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ScrollToTop from './components/ScrollToTop';
const App = () => {

  const API_URI = 'https://jobbackend-k5ng.onrender.com';
  
  //addjob
  const addJob=async(newJob)=>
    {
      const res=await fetch(`${API_URI}/add-jobs`,
        {
          method:'POST',
            headers:{
              'Content-Type':'application/json'

            },
          body:JSON.stringify(newJob)
        }
      );
      return;
    };

    //deleteJob
    const deleteJob = async (id) => {
     
      const res = await fetch(`${API_URI}/delete-jobs?id=${id}`, {
        method: 'DELETE',
      });
      return;
    };

    //const
    const updateJob = async (job) => {
    
      const res = await fetch(`${API_URI}/edit-jobs`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      return;
    };
  
   
    const router=createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<MainLayout/>}>
      
        <Route index element={<HomePage/>}/> 
        {/* //index is for default */}
        <Route path='/jobs'  element={<JobsPage/>}/>
        <Route path='/add-job'  element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id'  element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
        <Route path='/jobs/:id'  element={<JobPageSingular deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*'  element={<NodeFoundPage/>}/>
        
    </Route>
    )
  )
  return <RouterProvider router={router}/>
 
};

export default App