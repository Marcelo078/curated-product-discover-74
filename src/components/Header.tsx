import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative bg-gradient-hero text-hero-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-hero-foreground border-white/30">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Produtos Selecionados
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-hero-foreground border-white/30">
              <Shield className="w-4 h-4 mr-1" />
              100% Confiáveis
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-hero-foreground border-white/30">
              <Zap className="w-4 h-4 mr-1" />
              Resultados Comprovados
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conheça os{" "}
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Melhores Produtos
            </span>{" "}
            Selecionados para Você!
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90 leading-relaxed">
            Descubra soluções testadas e aprovadas que podem transformar sua vida. 
            Produtos cuidadosamente selecionados com resultados comprovados.
          </p>

          {/* CTA */}
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-glow"
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </header>
  );
};