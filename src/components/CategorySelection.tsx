import { Category } from '../data/questions'

interface CategorySelectionProps {
  onSelectCategory: (category: Category) => void
}

const categories = [
  {
    id: 'amigos' as Category,
    title: 'Amigos',
    icon: '🤝',
    description: 'Perguntas para conhecer melhor seus amigos',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'namorados' as Category,
    title: 'Namorados',
    icon: '💑',
    description: 'Perguntas românticas para casais apaixonados',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 'amigos-coloridos' as Category,
    title: 'Amigos Coloridos',
    icon: '💋',
    description: 'Perguntas ousadas e divertidas',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'casados' as Category,
    title: 'Casados',
    icon: '💍',
    description: 'Perguntas picantes para casais experientes',
    color: 'from-red-400 to-red-600',
  },
]

export default function CategorySelection({ onSelectCategory }: CategorySelectionProps) {
  return (
    <div className="max-w-6xl w-full">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          WEMP Quests
        </h1>
        <p className="text-xl text-white/90 font-light">
          Descubra mais sobre seu parceiro ou amigos com perguntas incríveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className="group relative bg-white rounded-3xl p-8 card-shadow hover:scale-105 transition-all duration-300 text-left overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {category.description}
              </p>
              
              <div className={`mt-6 inline-block px-6 py-2 bg-gradient-to-r ${category.color} text-white rounded-full font-semibold group-hover:shadow-xl transition-all duration-300`}>
                Começar →
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-white/80 text-sm">
          Mais de 1000 perguntas únicas para você explorar
        </p>
      </div>
    </div>
  )
}
