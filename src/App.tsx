import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle2, XCircle, Play, Trophy, Brain } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: Question[] = [
  {
    question: "1. Quel est le premier Pokémon du Pokédex ?",
    options: ["Bulbizarre", "Salamèche", "Carapuce", "Pikachu"],
    correctAnswer: "Bulbizarre",
  },
  {
    question: "2. Quel type de Pokémon est Salamèche ?",
    options: ["Feu", "Eau", "Plante", "Électrik"],
    correctAnswer: "Feu",
  },
  {
    question: "3. Quel Pokémon évolue en Dracaufeu ?",
    options: ["Reptincel", "Salamèche", "Dracaufeu", "Bulbizarre"],
    correctAnswer: "Reptincel",
  },
  {
    question: "4. Quel Pokémon est connu pour utiliser l'attaque 'Éclair' ?",
    options: ["Pikachu", "Raichu", "Voltali", "Électhor"],
    correctAnswer: "Pikachu",
  },
  {
    question: "5. Quel est le type de Pikachu ?",
    options: ["Électrik", "Feu", "Eau", "Plante"],
    correctAnswer: "Électrik",
  },
  {
    question: "6. Quel Pokémon est la mascotte officielle de Pokémon ?",
    options: ["Pikachu", "Bulbizarre", "Salamèche", "Carapuce"],
    correctAnswer: "Pikachu",
  },
  {
    question: "7. Quel Pokémon évolue en Tortank ?",
    options: ["Carabaffe", "Carapuce", "Tortank", "Bulbizarre"],
    correctAnswer: "Carabaffe",
  },
  {
    question: "8. Quel Pokémon est de type Plante et Poison ?",
    options: ["Bulbizarre", "Herbizarre", "Florizarre", "Mystherbe"],
    correctAnswer: "Bulbizarre",
  },
  {
    question: "9. Quel Pokémon est le rival de Pikachu dans la série animée ?",
    options: ["Sabelette", "Évoli", "Miaouss", "Raichu"],
    correctAnswer: "Raichu",
  },
  {
    question: "10. Quel Pokémon est connu pour utiliser l'attaque 'Flammèche' ?",
    options: ["Salamèche", "Reptincel", "Dracaufeu", "Caninos"],
    correctAnswer: "Salamèche",
  },
  {
    question: "40. Quel est le poids de Ronflex ?",
    options: ["460 kg", "500 kg", "150 kg", "1000 kg"],
    correctAnswer: "460 kg",
  },
  {
    question: "41. Quelle est la capacité signature de Métamorph ?",
    options: ["Morphing", "Copie", "Transformation", "Imitation"],
    correctAnswer: "Transformation",
  },
  {
    question: "42. Quel Pokémon peut apprendre naturellement toutes les CS ?",
    options: ["Mew", "Mewtwo", "Dracolosse", "Porygon"],
    correctAnswer: "Mew",
  },
  {
    question: "43. Quelle est la particularité de Minidraco ?",
    options: ["Il n'a pas de pattes", "Il peut voler", "Il vit sous l'eau", "Il crache du feu"],
    correctAnswer: "Il n'a pas de pattes",
  },
  {
    question: "44. Quel est le numéro de Mewtwo dans le Pokédex ?",
    options: ["150", "151", "149", "152"],
    correctAnswer: "150",
  },
  {
    question: "45. Quelle est la faiblesse principale de Dracolosse ?",
    options: ["Glace", "Dragon", "Fée", "Combat"],
    correctAnswer: "Glace",
  },
  {
    question: "46. Quel Pokémon est considéré comme le plus rare dans la première génération ?",
    options: ["Mew", "Mewtwo", "Dracolosse", "Porygon"],
    correctAnswer: "Mew",
  },
  {
    question: "47. Quelle est la particularité de Porygon ?",
    options: ["Premier Pokémon artificiel", "Plus rapide", "Plus fort", "Plus intelligent"],
    correctAnswer: "Premier Pokémon artificiel",
  },
  {
    question: "48. Quel type de pierre est nécessaire pour faire évoluer Évoli en Aquali ?",
    options: ["Pierre Eau", "Pierre Feu", "Pierre Foudre", "Pierre Lune"],
    correctAnswer: "Pierre Eau",
  },
  {
    question: "49. Quel est le point commun entre Magnéti et Magnéton ?",
    options: ["Lévitation", "Type Acier", "Attraction magnétique", "Évolution"],
    correctAnswer: "Attraction magnétique",
  },
  {
    question: "50. Quelle est la capacité spéciale de Leveinard ?",
    options: ["Chance Double", "Soin", "Guérison", "Bonheur"],
    correctAnswer: "Chance Double",
  },
  {
    question: "51. Quel Pokémon est connu pour son cri particulièrement agaçant ?",
    options: ["Rondoudou", "Miaouss", "Psykokwak", "Ramoloss"],
    correctAnswer: "Rondoudou",
  },
  {
    question: "52. Quelle est la particularité de Smogo ?",
    options: ["Il flotte", "Il explose", "Il empoisonne", "Il dort"],
    correctAnswer: "Il explose",
  },
  {
    question: "53. Quel Pokémon est considéré comme le plus faible ?",
    options: ["Magicarpe", "Ratatac", "Chenipan", "Métamorph"],
    correctAnswer: "Magicarpe",
  },
  {
    question: "54. Quelle est la spécialité de M. Mime ?",
    options: ["Les barrières", "La danse", "Le combat", "Le chant"],
    correctAnswer: "Les barrières",
  },
  {
    question: "55. Quel Pokémon est le plus rapide de la première génération ?",
    options: ["Électhor", "Dracolosse", "Arcanin", "Persian"],
    correctAnswer: "Électhor",
  },
  {
    question: "56. Quelle est la particularité de Métamorph ?",
    options: ["Il peut copier n'importe quel Pokémon", "Il est invisible", "Il peut voler", "Il peut nager"],
    correctAnswer: "Il peut copier n'importe quel Pokémon",
  },
  {
    question: "57. Quel est le point faible de Dracolosse ?",
    options: ["La glace", "Le feu", "L'eau", "L'électricité"],
    correctAnswer: "La glace",
  },
  {
    question: "58. Quelle est la capacité signature de Mewtwo ?",
    options: ["Psyko", "Amnésie", "Téléport", "Psycho Boost"],
    correctAnswer: "Psyko",
  },
  {
    question: "59. Quel Pokémon est le plus lourd de la première génération ?",
    options: ["Ronflex", "Dracolosse", "Léviator", "Onix"],
    correctAnswer: "Ronflex",
  },
  {
    question: "60. Quelle est la particularité de Porygon ?",
    options: ["Premier Pokémon numérique", "Il vole", "Il nage", "Il court vite"],
    correctAnswer: "Premier Pokémon numérique",
  },
  {
    question: "61. Quel est le type de Noadkoko ?",
    options: ["Plante/Psy", "Plante/Normal", "Plante/Vol", "Plante/Poison"],
    correctAnswer: "Plante/Psy",
  },
  {
    question: "62. Quelle est la capacité signature de Ronflex ?",
    options: ["Repos", "Plaquage", "Bâillement", "Giga-Impact"],
    correctAnswer: "Repos",
  },
  {
    question: "63. Quel Pokémon est le plus petit de la première génération ?",
    options: ["Diglett", "Pikachu", "Rattata", "Métamorph"],
    correctAnswer: "Diglett",
  },
  {
    question: "64. Quelle est la particularité de Kangourex ?",
    options: ["Il porte un bébé", "Il saute haut", "Il court vite", "Il nage bien"],
    correctAnswer: "Il porte un bébé",
  },
  {
    question: "65. Quel est le type de Persian ?",
    options: ["Normal", "Combat", "Psy", "Ténèbres"],
    correctAnswer: "Normal",
  },
  {
    question: "66. Quelle est la capacité signature de Staross ?",
    options: ["Hydrocanon", "Surf", "Pistolet à O", "Rayon Gemme"],
    correctAnswer: "Rayon Gemme",
  },
  {
    question: "67. Quel Pokémon est le plus intelligent de la première génération ?",
    options: ["Alakazam", "Mewtwo", "M. Mime", "Porygon"],
    correctAnswer: "Alakazam",
  },
  {
    question: "68. Quelle est la particularité de Dodrio ?",
    options: ["Trois têtes", "Deux pattes", "Peut voler", "Très rapide"],
    correctAnswer: "Trois têtes",
  },
  {
    question: "69. Quel est le type de Tauros ?",
    options: ["Normal", "Combat", "Sol", "Roche"],
    correctAnswer: "Normal",
  },
  {
    question: "70. Quelle est la capacité signature de Électhor ?",
    options: ["Fatal-Foudre", "Tonnerre", "Éclair", "Cage-Éclair"],
    correctAnswer: "Fatal-Foudre",
  },
  {
    question: "71. Quel Pokémon est le plus agressif de la première génération ?",
    options: ["Colossinge", "Arbok", "Nidoking", "Mackogneur"],
    correctAnswer: "Colossinge",
  },
  {
    question: "72. Quelle est la particularité de Ptéra ?",
    options: ["Pokémon fossile", "Peut voler", "Très fort", "Très rapide"],
    correctAnswer: "Pokémon fossile",
  },
  {
    question: "73. Quel est le type de Hypnomade ?",
    options: ["Psy", "Spectre", "Ténèbres", "Normal"],
    correctAnswer: "Psy",
  },
  {
    question: "74. Quelle est la capacité signature de Sulfura ?",
    options: ["Déflagration", "Lance-Flammes", "Feu d'Enfer", "Pique Feu"],
    correctAnswer: "Déflagration",
  },
  {
    question: "75. Quel Pokémon est le plus mystérieux de la première génération ?",
    options: ["Mew", "Mewtwo", "M. Mime", "Alakazam"],
    correctAnswer: "Mew",
  },
  {
    question: "76. Quelle est la particularité de Léviator ?",
    options: ["Évolution de Magicarpe", "Très grand", "Peut voler", "Très fort"],
    correctAnswer: "Évolution de Magicarpe",
  },
  {
    question: "77. Quel est le type de Nidoking ?",
    options: ["Poison/Sol", "Poison/Combat", "Poison/Roche", "Poison/Normal"],
    correctAnswer: "Poison/Sol",
  },
  {
    question: "78. Quelle est la capacité signature de Artikodin ?",
    options: ["Blizzard", "Laser Glace", "Vent Glace", "Glaciation"],
    correctAnswer: "Blizzard",
  },
  {
    question: "79. Quel Pokémon est le plus élégant de la première génération ?",
    options: ["Persian", "Papilusion", "Feunard", "Dracolosse"],
    correctAnswer: "Persian",
  },
  {
    question: "80. Quelle est la particularité de Lokhlass ?",
    options: ["Peut transporter des dresseurs", "Très rare", "Très fort", "Très intelligent"],
    correctAnswer: "Peut transporter des dresseurs",
  }
];

function App() {
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'finished'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && gameState === 'playing') {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, gameState]);

  const startQuiz = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Veuillez sélectionner une réponse !");
      return;
    }

    const isCorrect = selectedAnswer === quizData[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameState('finished');
    }
  };

  const restartQuiz = () => {
    setGameState('welcome');
  };

  const getTimerColor = () => {
    if (timeLeft > 10) return 'text-green-500';
    if (timeLeft > 5) return 'text-orange-500';
    return 'text-red-500';
  };

  if (gameState === 'welcome') {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-500 to-yellow-500"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Quiz Pokémon
          </h1>
          <div className="mb-8 space-y-4">
            <p className="text-xl text-gray-700">
              Testez vos connaissances sur la première génération de Pokémon !
            </p>
            <div className="flex justify-center space-x-8 my-8">
              <div className="text-center">
                <Brain className="w-12 h-12 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">80 Questions</p>
              </div>
              <div className="text-center">
                <Timer className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">30 Secondes/Question</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Score Final</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-left">
              <h3 className="font-bold text-gray-800 mb-2">Instructions :</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Choisissez la bonne réponse parmi les options proposées</li>
                <li>Vous avez 30 secondes pour répondre à chaque question</li>
                <li>Votre score final sera affiché à la fin du quiz</li>
              </ul>
            </div>
          </div>
          <button
            onClick={startQuiz}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-yellow-600 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <Play className="w-6 h-6" />
            Commencer le Quiz
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Quiz Terminé !
          </h2>
          <p className="text-2xl text-center mb-8">
            Votre score : <span className="font-bold text-red-500">{score}</span> sur {quizData.length}
          </p>
          <div className="flex justify-center">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-yellow-600 transition-all"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Timer className={`w-6 h-6 ${getTimerColor()}`} />
            <span className={`font-semibold ${getTimerColor()}`}>
              {timeLeft} secondes
            </span>
          </div>
          <div className="text-gray-700 font-semibold">
            Question {currentQuestionIndex + 1}/{quizData.length}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {quizData[currentQuestionIndex].question}
          </h2>
          <div className="space-y-4">
            {quizData[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  selectedAnswer === option
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {showResult && (
          <div className={`flex items-center justify-center gap-2 mb-4 ${
            selectedAnswer === quizData[currentQuestionIndex].correctAnswer
              ? 'text-green-500'
              : 'text-red-500'
          }`}>
            {selectedAnswer === quizData[currentQuestionIndex].correctAnswer ? (
              <>
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold">Bonne réponse !</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6" />
                <span className="font-semibold">Mauvaise réponse...</span>
              </>
            )}
          </div>
        )}

        <div className="flex justify-center gap-4">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-yellow-600 transition-all"
            >
              Valider
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-yellow-600 transition-all"
            >
              Question suivante
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;