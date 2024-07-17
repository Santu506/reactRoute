import { useParams } from "react-router-dom";

import React from 'react'

function User() {
    const {id} = useParams();
  return (
    <div className="bg-gray-500 text-2xl text-center max-w-2xl mx-auto h-36">User:{id}</div>
  )
}

export default User