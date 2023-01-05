import React from 'react'
import { useState } from 'react'

function Login() {

    const [username ,setUsername] = useState("");
  return (
    <div> 

            <form>

                <input  type='text' onChange={(e) => setUsername(e.target.value)} />
                <button > Login </button>
            </form>

    </div>
  )
}

export default Login