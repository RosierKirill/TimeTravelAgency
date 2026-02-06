import { NextRequest, NextResponse } from 'next/server'
import { chatbotPrompt } from '@/lib/chatbotPrompt'

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

interface RequestBody {
  message: string
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
  error?: {
    message: string
  }
}

// Mock responses for fallback
const mockResponses: { [key: string]: string } = {
  default: `Merci pour votre intérêt envers l'Agence Voyage Temporel! Je suis là pour vous aider à trouver la période parfaite à explorer. 

Nous offrons trois destinations exclusives:
- **Paris 1889**: Expérience l'élégance Belle Époque (45 000€)
- **Ère Crétacée**: Rencontrez les dinosaures préhistoriques (125 000€)  
- **Florence 1504**: Admirez les chefs-d'œuvre de la Renaissance (55 000€)

Quel type d'expérience recherchez-vous?`,
  
  paris: `Paris 1889 pendant la Belle Époque est absolument magnifique! L'Exposition Universelle est époustouflante, et la Tour Eiffel est une merveille d'ingénierie. 

Parfait pour ceux qui aiment:
- Les expériences culturelles
- La fine cuisine et les cabarets
- L'art et l'architecture
- L'exploration urbaine

Durée: 7 jours | Prix: 45 000€`,

  cretaceous: `L'Ère Crétacée est notre destination la plus palpitante! Préparez-vous pour une aventure extraordinaire avec des dinosaures massifs parcourant des jungles préhistoriques.

Parfait pour ceux qui aiment:
- L'aventure et l'exploration
- L'observation de la faune
- La nature ancienne
- Les expériences extrêmes

Durée: 5 jours | Prix: 125 000€`,

  florence: `Florence Renaissance en 1504 est un chef-d'œuvre! Vous assisterez au légendaire dévoilement du David de Michel-Ange et vivrez l'histoire de l'art en personne.

Parfait pour ceux qui aiment:
- L'art et la sculpture
- La culture Renaissance
- L'architecture
- L'importance historique

Durée: 6 jours | Prix: 55 000€`,

  booking: `Absolument! Notre processus de réservation est simple:
1. Choisissez votre destination
2. Sélectionnez vos dates préférées
3. Complétez notre orientation de sécurité
4. Embarquez pour votre aventure de voyage temporel!

Vous pouvez commencer le processus de réservation sur notre site web ou je peux vous guider.`,

  pricing: `Voici nos tarifs:
- **Paris 1889**: 45 000€ (7 jours)
- **Florence 1504**: 55 000€ (6 jours)
- **Ère Crétacée**: 125 000€ (5 jours)

Les prix incluent l'hébergement, les repas, les activités et l'équipement de sécurité. Plans de paiement disponibles.`,
};

function getMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (
    lowerMessage.includes('paris') ||
    lowerMessage.includes('belle') ||
    lowerMessage.includes('1889')
  ) {
    return mockResponses.paris
  }
  if (
    lowerMessage.includes('dinosaure') ||
    lowerMessage.includes('crétacée') ||
    lowerMessage.includes('préhistorique') ||
    lowerMessage.includes('dinosaur') ||
    lowerMessage.includes('cretaceous')
  ) {
    return mockResponses.cretaceous
  }
  if (
    lowerMessage.includes('florence') ||
    lowerMessage.includes('michelangelo') ||
    lowerMessage.includes('renaissance') ||
    lowerMessage.includes('michel-ange') ||
    lowerMessage.includes('1504')
  ) {
    return mockResponses.florence
  }
  if (
    lowerMessage.includes('réserver') ||
    lowerMessage.includes('réservation') ||
    lowerMessage.includes('book') ||
    lowerMessage.includes('booking') ||
    lowerMessage.includes('reservation')
  ) {
    return mockResponses.booking
  }
  if (
    lowerMessage.includes('prix') ||
    lowerMessage.includes('tarif') ||
    lowerMessage.includes('coût') ||
    lowerMessage.includes('price') ||
    lowerMessage.includes('cost') ||
    lowerMessage.includes('how much')
  ) {
    return mockResponses.pricing
  }
  
  return mockResponses.default
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()
    const userMessage = body.message?.trim()

    if (!userMessage) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if we should use mock mode
    const useMock = process.env.NEXT_PUBLIC_USE_MOCK_CHAT === 'true'
    const apiKey = process.env.OPENROUTER_API_KEY

    if (useMock || !apiKey) {
      // Use mock response
      const reply = getMockResponse(userMessage)
      return NextResponse.json({ reply })
    }

    // Use OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://timetravel-agency.vercel.app',
        'X-Title': 'TimeTravel Agency',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
          {
            role: 'system',
            content: chatbotPrompt,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    const data: OpenRouterResponse = await response.json()

    if (data.error) {
      console.error('OpenRouter error:', data.error)
      // Fallback to mock on API error
      const reply = getMockResponse(userMessage)
      return NextResponse.json({ reply })
    }

    const reply = data.choices?.[0]?.message?.content || mockResponses.default

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
