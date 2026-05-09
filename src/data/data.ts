import type { Product } from "../types/product";
import type { Icategoria } from "../types/categoria";

export const PRODUCTS: Product[] = [
  // HAMBURGUESAS
  {
    id: 1,
    name: "Hamburguesa Clásica",
    price: 4500,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Hamburguesa Doble Cheddar",
    price: 6200,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Hamburguesa BBQ Bacon",
    price: 6900,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Hamburguesa Criolla",
    price: 6500,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Hamburguesa Veggie",
    price: 5800,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Hamburguesa Picante",
    price: 6700,
    category: "Hamburguesas",
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=800&q=80"
  },

  // PIZZAS
  {
    id: 7,
    name: "Pizza Muzzarella",
    price: 6000,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Pizza Napolitana",
    price: 6800,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Pizza con Pimientos",
    price: 7200,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Pizza Margarita",
    price: 7000,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Pizza Especial",
    price: 7800,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Pizza Fugazzeta",
    price: 7600,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=800&q=80"
  },

  // ACOMPAÑAMIENTOS
  {
    id: 13,
    name: "Papas Fritas",
    price: 2500,
    category: "Acompañamientos",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Papas con Cheddar",
    price: 3500,
    category: "Acompañamientos",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Aros de Cebolla",
    price: 3200,
    category: "Acompañamientos",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Nuggets de Pollo",
    price: 3800,
    category: "Acompañamientos",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=800&q=80"
  },

  // BEBIDAS
  {
    id: 17,
    name: "Coca Cola",
    price: 1800,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Jugo de Naranja",
    price: 1700,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    name: "schwepps",
    price: 1700,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "Pepsi",
    price: 1650,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21,
    name: "Agua Mineral",
    price: 1200,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    name: "Limonada",
    price: 1900,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80"
  },

  // POSTRES
  {
    id: 23,
    name: "Helado de Chocolate",
    price: 3000,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24,
    name: "Helado de Frutilla",
    price: 3000,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 25,
    name: "Brownie",
    price: 2800,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 26,
    name: "Cheesecake",
    price: 3400,
    category: "Postres",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  }
];

export const getCategories = (): Icategoria[] => {
  const categories = [...new Set(PRODUCTS.map(product => product.category))];

  return categories.map((category, index) => ({
    id: index + 1,
    name: category
  }));
};