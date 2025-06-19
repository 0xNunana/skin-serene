import { ingredients } from "@/data/ingredients";
import IngredientCard from "./IngredientCard";

export default function FeaturedIngredientsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          Powered by Nature
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </div>
    </section>
  );
}
