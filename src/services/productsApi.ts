export async function fetchProducts() {
  const res = await fetch('https://6830ca486205ab0d6c3a6b7a.mockapi.io/nostalgia/products');
  if (!res.ok) throw new Error('Erro ao buscar produtos');
  return res.json();
}

export async function fetchProductById(id: string) {
  const res = await fetch(`https://6830ca486205ab0d6c3a6b7a.mockapi.io/nostalgia/products/${id}`);
  if (!res.ok) throw new Error('Produto não encontrado');
  return res.json();
}
