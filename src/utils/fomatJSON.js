export default function formatJSON(ingredients) {
  return {
    ingredients: ingredients.map(([quantity, ingredientName]) => ({
      quantity,
      ingredientName,
    })),
  };
}