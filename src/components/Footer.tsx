import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-primary/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Produtos Selecionados</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Encontre os melhores produtos testados e aprovados. Nossa curadoria garante qualidade e resultados comprovados.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
              <li><a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">Todos os Produtos</a></li>
              <li><a href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">Emagrecimento</a></li>
              <li><a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">Beleza</a></li>
              <li><a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">Saúde</a></li>
              <li><a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">Financeiro</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Brasil - Atendimento Nacional</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 Produtos Selecionados. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="/termos-uso" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};