import React from 'react'

export default function Score({outcome, totalScore, color}) {
  return (
	<div className={`rounded shadow-box font-dark-navy text-xl bg-${color} h-16 w-20`}>
          <p>{outcome}</p>
          <p>{totalScore}</p>
        </div>
  )
}
