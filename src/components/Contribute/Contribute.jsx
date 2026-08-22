import React from 'react'
import './Contribute.css'

const Contribute = () => {
  return (
    <div className='contribute'>

    <div>
<h1>How to Contribute</h1>
<p> 3 simple steps to make your first PR</p>

    </div>

    <div className="contribute-steps">

        <div className='step'>

            <h2>Fork the repo</h2>
            <p>Click Fork on Github.
            Clone your copy locally and set up the project.
            </p>
           <p className='gitcommand'>git clone your-fork-url</p>

        </div>
        <div className='step'>

            <h2>Make Your Changes</h2>
            <p>Create a New Branch,add a component, fix a Bug, or Improve the UI
            </p>
           <p className='gitcommand'>git checkout -b feature/my-change</p>

        </div>
        <div className='step'>

            <h2>Submit a PR</h2>
            <p>Push your branch and open a Pull request. Maintainer reviews and merges!
            </p>
           <p className='gitcommand'>git push origin feature/my-change</p>

        </div>
    </div>






    </div>
  )
}

export default Contribute