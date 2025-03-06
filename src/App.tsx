// Functional Imports
import { Routes, Route, RouterProvider, createBrowserRouter, useParams } from 'react-router'
import styled from 'styled-components'

// Static Components imports
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// Conditional Components Imports
import IndexMain from './components/mains/Index'
import AboutMain from './components/mains/About'
import EducationMain from './components/mains/Education'
import ExperienceMain from './components/mains/Experience'
import ProjectMain from './components/mains/Project'
import SkillMain from './components/mains/Skill'

// Styling imports
import { StyledContentWrapper } from './components/MyStyledComponents'
import './App.css'
import EmploymentMain from './components/mains/Employment'
import { useEffect } from 'react'


const StyledApp = styled.div`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function Root() {
  return (
    <>
      <Header />
      <StyledContentWrapper>
        <NavBar />
        <Routes>
          <Route
            path={`/`}
            element={<IndexMain />}
          />
          <Route
            path={`/about`}
            element={<AboutMain />}
          />
          <Route
            path={`/education`}
            element={<EducationMain />}
          />
          <Route
            path={`/employment`}
            element={<EmploymentMain />}
          />
          <Route
            path={`/experience`}
            element={<ExperienceMain />}
          />
          <Route
            path={`/project`}
            element={<ProjectMain />}
          />
          <Route
            path={`/skill`}
            element={<SkillMain />}
          />
        </Routes>
      </StyledContentWrapper>
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root }]
)

function App() {
  let param = useParams()

  useEffect(() => {
    console.log("Param: ", param)
  }, [param])

  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>

  )
}

export default App
