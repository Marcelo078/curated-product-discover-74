import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group h-full bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 text-xs">
              {product.category}
            </Badge>
            <CardTitle className="text-lg font-bold leading-tight text-card-foreground group-hover:text-primary transition-colors">
              {product.name}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-card-foreground">Principais benefícios:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to={`/produto/${product.slug}`} className="block">
            <Button 
              variant="cta" 
              className="w-full group/btn"
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};