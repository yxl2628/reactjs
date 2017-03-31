import React from 'react'

const Repos = ({params}) => (
  <div>
    <div>Username：{params.userName}</div>
    <div>Repp:{params.repo}</div>
  </div>
)

export default Repos;
