import React from 'react'

import '@contentstack/venus-components/build/main.css'

import AppRoutes from './routes'

const App = () => {
  return <AppRoutes />
}

export default App

// import '@contentstack/venus-components'
// import '@contentstack/venus-components/build/main.css';

// export const Default = () => {
//   const [tags, setTags] = useState(['Summer', 'season', 'winter'])

//   const handleTagUpdate = tags => {
//     setTags(tags)
//     console.log('updated tags', tags)
//   }
//   return <TagEditor label="Tags" tags={tags} updateTag={handleTagUpdate} />
// }

// const AppTest = () => {
//   return (
//     <div>
//       <Button buttonType="primary">
//         <span>Button test</span>
//       </Button>
//       <br/>
//       {/* <Default/> */}
//       <CoulmnSelector/>
//     </div>
//   )
// }
