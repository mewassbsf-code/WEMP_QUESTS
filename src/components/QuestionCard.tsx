import { Category } from '../data/questions'

interface QuestionCardProps {
  question: string
  category: Category
  onNext: () => void
  onBack: () => void
}

const categoryInfo = {
  'amigos': {
    title: 'Amigos',
    icon: '🤝',
    color: 'from-blue-400 to-blue-600',
  },
  'namorados': {
    title: 'Namorados',
    icon: '💑',
    color: 'from-pink-400 to-pink-600',
  },
  'amigos-coloridos': {
    title: 'Amigos Coloridos',
    icon: '💋',
    color: 'from-purple-400 to-purple-600',
  },
  'casados': {
    title: 'Casados',
    icon: '💍',
    color: 'from-red-400 to-red-600',
  },
}

export default function QuestionCard({ question, category, onNext, onBack }: QuestionCardProps) {
  const info = categoryInfo[category]

  return (
    <div className="max-w-2xl w-full animate-fade-in">
      <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 font-semibold"
          >
            ← Voltar
          </button>
          
          <div className={`px-6 py-2 bg-gradient-to-r ${info.color} text-white rounded-full font-semibold flex items-center gap-2`}>
            <span>{info.icon}</span>
            <span>{info.title}</span>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-8xl text-center mb-8 animate-bounce-slow">
            {info.icon}
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-800 text-center font-medium leading-relaxed">
              {question}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onNext}
            className={`flex-1 py-4 px-8 bg-gradient-to-r ${info.color} text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            Próxima Pergunta →
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/80 text-sm">
          Aproveite cada momento de descoberta!
        </p>
      </div>
    </div>
  )
}
