import { useState } from 'react'
import CategorySelection from './components/CategorySelection'
import QuestionCard from './components/QuestionCard'
import { questions, Category } from './data/questions'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<string>('')
  const [questionHistory, setQuestionHistory] = useState<string[]>([])

  const getRandomQuestion = (category: Category) => {
    const categoryQuestions = questions[category]
    const availableQuestions = categoryQuestions.filter(q => !questionHistory.includes(q))
    
    if (availableQuestions.length === 0) {
      setQuestionHistory([])
      return categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
    }
    
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    setQuestionHistory([...questionHistory, randomQuestion])
    return randomQuestion
  }

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category)
    const question = getRandomQuestion(category)
    setCurrentQuestion(question)
  }

  const handleNextQuestion = () => {
    if (selectedCategory) {
      const question = getRandomQuestion(selectedCategory)
      setCurrentQuestion(question)
    }
  }

  const handleBack = () => {
    setSelectedCategory(null)
    setCurrentQuestion('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {!selectedCategory ? (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      ) : (
        <QuestionCard
          question={currentQuestion}
          category={selectedCategory}
          onNext={handleNextQuestion}
          onBack={handleBack}
        />
      )}
    </div>
  )
}

export default App
