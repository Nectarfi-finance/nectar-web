"use client"
import { BookOpen, DollarSign, TrendingUp } from 'lucide-react'

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Deposit Stablecoins",
    description: "Nectarfi supports popular stablecoins like USDT and USDC. By depositing stablecoins into the platform, you gain access to DeFi opportunities without worrying about the volatility of other cryptocurrencies.",
    icon: BookOpen
  },
  {
    title: "Earn $Nectar",
    description: "Once you've deposited your stablecoins, Nectarfi gets to work. Behind the scenes, Nectarfi's algorithm automatically allocates your assets across various decentralized finance (DeFi) protocols to maximize your yield.",
    icon: DollarSign
  },
  {
    title: "Yield Optimization",
    description: "As your yields grow, you can track them in real-time using Nectarfi's dashboard. The $Nectar tokens you earn can either be reinvested automatically to compound your returns or withdrawn to use elsewhere.",
    icon: TrendingUp
  }
]

const FeatureSections: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-0 my-8 lg:my-0 lg:flex items-center">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-800 h-[300px] p-6 rounded-lg flex-1 lg:m-4">
          <feature.icon className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureSections