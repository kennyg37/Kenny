export interface Project {
    id: number;
    title: string;
    category: string;
    schematicType: 'cylinder' | 'network' | 'cube' | 'grid';
    link: string;
    tech: string[];
    codeSnippet: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Chronicle",
        category: "Editorial Platform",
        schematicType: 'grid',
        link: "#",
        tech: ["Next.js", "GraphQL", "PostgreSQL"],
        codeSnippet: `const Article = ({ id }) => {
  const { data } = useQuery(GET_POST, { id });
  return <Layout>{data.post}</Layout>;
}`
    },
    {
        id: 2,
        title: "Vessel",
        category: "E-Commerce",
        schematicType: 'cube',
        link: "#",
        tech: ["Shopify", "React", "Tailwind"],
        codeSnippet: `export async function createCart() {
  const cart = await shopify.cart.create();
  return cart.id;
}`
    },
    {
        id: 3,
        title: "Orbit",
        category: "WebGL Experience",
        schematicType: 'cylinder',
        link: "#",
        tech: ["Three.js", "GSAP", "WebGL"],
        codeSnippet: `useFrame((state) => {
  mesh.current.rotation.x += 0.01;
  mesh.current.rotation.y += 0.01;
});`
    },
    {
        id: 4,
        title: "Canvas",
        category: "Design System",
        schematicType: 'network',
        link: "#",
        tech: ["Storybook", "React", "TypeScript"],
        codeSnippet: `interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}`
    }
];
