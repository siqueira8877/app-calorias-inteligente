"use client";

import { useState } from "react";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Camera, 
  BarChart3, 
  Apple, 
  Smartphone,
  Brain,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Check,
  Star,
  Sparkles,
  Utensils,
  Activity,
  Heart,
  Database,
  Scan,
  MessageSquare,
  Download,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyFitcallLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-[#0A0A0A] rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#0A0A0A]">MyFitcall</h1>
                <p className="text-[10px] sm:text-xs text-gray-600 -mt-1 hidden sm:block">Controle. Conquiste.</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
                Recursos
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
                Como Funciona
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
                Planos
              </a>
              <a href="#tech" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
                Tecnologia
              </a>
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all">
                Começar Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 space-y-3">
              <a href="#features" className="block text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-2">
                Recursos
              </a>
              <a href="#how-it-works" className="block text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-2">
                Como Funciona
              </a>
              <a href="#pricing" className="block text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-2">
                Planos
              </a>
              <a href="#tech" className="block text-sm font-medium text-gray-700 hover:text-[#FF6B35] py-2">
                Tecnologia
              </a>
              <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white">
                Começar Grátis
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20 hover:bg-[#FF6B35]/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Powered by AI
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] leading-tight">
              Controle suas calorias.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]">
                Conquiste seus objetivos.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              O contador de calorias mais inteligente do Brasil. Registre refeições com foto, 
              receba recomendações personalizadas por IA e alcance seus objetivos de forma simples e eficaz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                <Download className="w-5 h-5 mr-2" />
                Baixar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Ver Demonstração
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-[#0A0A0A]">50k+</span> usuários ativos
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF6B35] text-[#FF6B35]" />
                ))}
                <span className="ml-2 text-sm font-semibold text-[#0A0A0A]">4.9/5.0</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-[#0A0A0A] to-[#2A2A2A] rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 shadow-2xl border border-gray-800">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Mock Dashboard */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Hoje, 15 Jan</p>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A]">Olá, Maria! 👋</h3>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A]"></div>
                </div>

                {/* Calorie Circle */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#F6F6F6" strokeWidth="12" />
                    <circle 
                      cx="50%" 
                      cy="50%" 
                      r="35%" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="12"
                      strokeDasharray="220 440"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="100%" stopColor="#FF8C5A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-2xl sm:text-3xl font-bold text-[#0A0A0A]">1,450</p>
                    <p className="text-xs sm:text-sm text-gray-600">de 2,000 kcal</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                    <p className="text-xs text-gray-600">Proteína</p>
                    <p className="text-sm sm:text-base font-bold text-[#FF6B35]">65g</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                    <p className="text-xs text-gray-600">Carbos</p>
                    <p className="text-sm sm:text-base font-bold text-[#FF6B35]">180g</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C5A]/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                    <p className="text-xs text-gray-600">Gordura</p>
                    <p className="text-sm sm:text-base font-bold text-[#FF6B35]">45g</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white text-sm sm:text-base py-4 sm:py-6">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Adicionar Refeição
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl animate-bounce">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#0A0A0A] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, value: "50k+", label: "Usuários Ativos" },
              { icon: Camera, value: "2M+", label: "Fotos Analisadas" },
              { icon: Target, value: "85%", label: "Taxa de Sucesso" },
              { icon: Award, value: "4.9/5", label: "Avaliação" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 sm:space-y-3">
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] mx-auto" />
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20 mb-4">
            Recursos Principais
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4 sm:mb-6">
            Tudo que você precisa para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]">
              atingir suas metas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Funcionalidades inteligentes que tornam o controle de calorias simples, rápido e eficaz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Camera,
              title: "Registro por Foto",
              description: "Tire uma foto do seu prato e nossa IA identifica automaticamente os alimentos e calcula as calorias.",
              color: "from-[#FF6B35] to-[#FF8C5A]"
            },
            {
              icon: Scan,
              title: "Código de Barras",
              description: "Escaneie produtos industrializados e adicione informações nutricionais completas instantaneamente.",
              color: "from-[#0A0A0A] to-[#2A2A2A]"
            },
            {
              icon: Brain,
              title: "Recomendações IA",
              description: "Receba sugestões personalizadas de refeições baseadas no seu perfil, preferências e objetivos.",
              color: "from-[#FF6B35] to-[#FF8C5A]"
            },
            {
              icon: BarChart3,
              title: "Análises Detalhadas",
              description: "Visualize seu progresso com gráficos interativos e relatórios completos de macros e micros.",
              color: "from-[#0A0A0A] to-[#2A2A2A]"
            },
            {
              icon: MessageSquare,
              title: "Coach IA 24/7",
              description: "Tire dúvidas nutricionais, receba dicas e ajustes em tempo real com nosso assistente inteligente.",
              color: "from-[#FF6B35] to-[#FF8C5A]"
            },
            {
              icon: Activity,
              title: "Integração Fitness",
              description: "Conecte com Google Fit e Apple Health para sincronizar atividades e calorias gastas automaticamente.",
              color: "from-[#0A0A0A] to-[#2A2A2A]"
            }
          ].map((feature, i) => (
            <Card key={i} className="p-6 sm:p-8 border-2 border-gray-100 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-300 group">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20 mb-4">
              Processo Simples
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4 sm:mb-6">
              Como funciona o MyFitcall
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Apenas 3 passos para começar sua jornada de transformação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Configure seu Perfil",
                description: "Informe seus dados, objetivos e preferências alimentares. Nosso algoritmo calcula sua meta calórica ideal.",
                icon: Target
              },
              {
                step: "02",
                title: "Registre suas Refeições",
                description: "Tire fotos, escaneie códigos de barras ou busque no banco de dados com milhares de alimentos.",
                icon: Camera
              },
              {
                step: "03",
                title: "Acompanhe e Conquiste",
                description: "Visualize seu progresso, receba insights da IA e ajuste seu plano para alcançar seus objetivos.",
                icon: TrendingUp
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center shadow-xl">
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A]">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {i < 2 && (
                  <ChevronRight className="hidden md:block absolute top-10 -right-6 lg:-right-10 w-8 h-8 text-[#FF6B35]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20 mb-4">
            Planos e Preços
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4 sm:mb-6">
            Escolha o plano ideal para você
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Comece grátis e faça upgrade quando quiser mais recursos
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-gray-100 rounded-full p-1.5 sm:p-2">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                selectedPlan === "monthly"
                  ? "bg-white text-[#0A0A0A] shadow-md"
                  : "text-gray-600"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setSelectedPlan("annual")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                selectedPlan === "annual"
                  ? "bg-white text-[#0A0A0A] shadow-md"
                  : "text-gray-600"
              }`}
            >
              Anual
              <Badge className="ml-2 bg-[#FF6B35] text-white text-xs">-35%</Badge>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-2">Gratuito</h3>
                <p className="text-sm sm:text-base text-gray-600">Para começar sua jornada</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-[#0A0A0A]">R$ 0</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <Button variant="outline" className="w-full border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-sm sm:text-base py-5 sm:py-6">
                Começar Grátis
              </Button>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-200">
                {[
                  "Registro manual de alimentos",
                  "5 buscas por dia",
                  "Dashboard básico",
                  "Histórico de 7 dias",
                  "Relatórios simples"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="p-6 sm:p-8 border-4 border-[#FF6B35] relative overflow-hidden shadow-2xl shadow-[#FF6B35]/20 transform scale-105">
            <div className="absolute top-0 right-0 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-bl-2xl">
              POPULAR
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-2">Premium</h3>
                <p className="text-sm sm:text-base text-gray-600">Para resultados sérios</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-[#0A0A0A]">
                  R$ {selectedPlan === "monthly" ? "19,90" : "10,75"}
                </span>
                <span className="text-gray-600">/mês</span>
              </div>
              {selectedPlan === "annual" && (
                <p className="text-xs sm:text-sm text-[#FF6B35] font-medium">
                  R$ 129,90 cobrado anualmente
                </p>
              )}
              <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white hover:shadow-xl hover:shadow-[#FF6B35]/30 text-sm sm:text-base py-5 sm:py-6">
                Começar 7 Dias Grátis
              </Button>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-200">
                {[
                  "Tudo do plano Gratuito",
                  "OCR ilimitado (foto de pratos)",
                  "Escaneamento de código de barras",
                  "Recomendações IA personalizadas",
                  "Coach IA 24/7",
                  "Histórico ilimitado",
                  "Relatórios avançados",
                  "Exportar dados (CSV/PDF)",
                  "Integração Google Fit/Apple Health",
                  "Sem anúncios"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Pro Plan */}
          <Card className="p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-2">Programas</h3>
                <p className="text-sm sm:text-base text-gray-600">Planos estruturados</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-[#0A0A0A]">R$ 29,90</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Pagamento único por programa</p>
              <Button variant="outline" className="w-full border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white text-sm sm:text-base py-5 sm:py-6">
                Ver Programas
              </Button>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-200">
                {[
                  "Tudo do Premium",
                  "Programa de 4 semanas - R$ 29,90",
                  "Programa de 8 semanas - R$ 44,90",
                  "Programa de 12 semanas - R$ 59,90",
                  "Planos alimentares detalhados",
                  "Receitas exclusivas",
                  "Acompanhamento semanal",
                  "Suporte prioritário"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <p className="text-center text-sm sm:text-base text-gray-600 mt-8 sm:mt-12">
          Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser, sem compromisso.
        </p>
      </section>

      {/* Technology Section */}
      <section id="tech" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20 mb-4">
              Tecnologia de Ponta
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4 sm:mb-6">
              Inteligência Artificial que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]">
                entende você
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Nossa IA foi treinada com milhões de refeições para oferecer a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Reconhecimento Visual",
                description: "CNN avançada identifica alimentos em fotos com 85% de precisão, estimando porções e calorias automaticamente.",
                stats: "2M+ fotos analisadas"
              },
              {
                icon: Sparkles,
                title: "Recomendações Personalizadas",
                description: "Algoritmo de machine learning aprende seus hábitos e sugere refeições ideais baseadas no seu perfil único.",
                stats: "50k+ usuários atendidos"
              },
              {
                icon: Database,
                title: "Base de Dados Completa",
                description: "Mais de 500 mil alimentos cadastrados com informações nutricionais detalhadas de macros e micros.",
                stats: "500k+ alimentos"
              },
              {
                icon: Shield,
                title: "Segurança e Privacidade",
                description: "Seus dados são criptografados e protegidos. Conformidade total com LGPD e padrões internacionais.",
                stats: "100% seguro"
              }
            ].map((tech, i) => (
              <Card key={i} className="p-6 sm:p-8 border-2 border-gray-100 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A]">{tech.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{tech.description}</p>
                    <Badge className="bg-[#0A0A0A] text-white text-xs">
                      {tech.stats}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Platforms */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-[#0A0A0A] to-[#2A2A2A] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Disponível para iOS e Android
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Baixe agora e comece sua transformação. Sincronize entre todos os seus dispositivos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button size="lg" className="bg-white text-[#0A0A0A] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              App Store
            </Button>
            <Button size="lg" className="bg-white text-[#0A0A0A] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Pronto para transformar sua alimentação?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10">
              Junte-se a mais de 50 mil pessoas que já estão conquistando seus objetivos com o MyFitcall
            </p>
            <Button size="lg" className="bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 shadow-2xl">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Começar Agora Grátis
            </Button>
            <p className="text-xs sm:text-sm text-white/80 mt-4 sm:mt-6">
              7 dias grátis • Sem cartão de crédito • Cancele quando quiser
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-2xl flex items-center justify-center">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">MyFitcall</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Controle suas calorias. Conquiste seus objetivos.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Produto</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Programas</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Empresa</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2025 MyFitcall. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                <Heart className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                <Activity className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                <Target className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
