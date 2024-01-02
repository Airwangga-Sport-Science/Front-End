import React from 'react'
import TrainingItem from './TrainingItem'
export default function TrainingList({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <TrainingItem key={article.id} {...article} />
      ))}
    </div>
  )
}
