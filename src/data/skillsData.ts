export interface Skill {
    id: string;
    name: string;
    version: string;
    usage: 'High' | 'Medium' | 'Low';
    category: 'interface' | 'logic' | 'core';
    relatedIds: string[]; // IDs of skills this one connects to
}

export const skillsData: Skill[] = [
    // INTERFACE (Column 1)
    { id: 'react', name: 'REACT', version: 'v18.2', usage: 'High', category: 'interface', relatedIds: ['typescript', 'nextjs', 'node', 'django'] },
    { id: 'nextjs', name: 'NEXT.JS', version: 'v14.0', usage: 'High', category: 'interface', relatedIds: ['react', 'typescript', 'node'] },
    { id: 'typescript', name: 'TYPESCRIPT', version: 'v5.3', usage: 'High', category: 'interface', relatedIds: ['react', 'nextjs', 'node', 'rust'] },
    { id: 'tailwind', name: 'TAILWIND', version: 'v3.4', usage: 'High', category: 'interface', relatedIds: ['react', 'nextjs'] },

    // LOGIC (Column 2)
    { id: 'python', name: 'PYTHON', version: 'v3.12', usage: 'High', category: 'logic', relatedIds: ['django', 'rust', 'aws'] },
    { id: 'node', name: 'NODE.JS', version: 'v20.9', usage: 'Medium', category: 'logic', relatedIds: ['react', 'typescript', 'aws', 'docker'] },
    { id: 'django', name: 'DJANGO', version: 'v5.0', usage: 'High', category: 'logic', relatedIds: ['python', 'postgres', 'aws'] },
    { id: 'gin', name: 'GIN', version: 'v1.9', usage: 'Medium', category: 'logic', relatedIds: ['go', 'docker'] },
    { id: 'go', name: 'GO', version: 'v1.21', usage: 'Medium', category: 'logic', relatedIds: ['gin', 'docker', 'aws'] },

    // CORE (Column 3)
    { id: 'rust', name: 'RUST', version: 'v1.75', usage: 'High', category: 'core', relatedIds: ['python', 'linux', 'aws'] },
    { id: 'cpp', name: 'C++', version: 'v20', usage: 'Medium', category: 'core', relatedIds: ['linux', 'python'] },
    { id: 'linux', name: 'LINUX', version: 'Kernel', usage: 'High', category: 'core', relatedIds: ['docker', 'aws', 'rust', 'cpp'] },
    { id: 'aws', name: 'AWS', version: 'Cloud', usage: 'High', category: 'core', relatedIds: ['docker', 'node', 'django', 'rust'] },
    { id: 'docker', name: 'DOCKER', version: 'v24.0', usage: 'High', category: 'core', relatedIds: ['linux', 'aws', 'node', 'go'] },
];
