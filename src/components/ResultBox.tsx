import React from 'react'
import { xPath } from '../model';

interface Props {
    xpaths: xPath[];
}

const ResultBox: React.FC<Props> = ({xpaths}) => {
  return (
    <div className="result-box">
        <ul>
            {xpaths.map((xp) => <li>{xp.value}</li>)}
        </ul>
    </div>
  )
}

export default ResultBox