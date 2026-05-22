// // ==========================================
// // TYPES & INTERFACES
// // ==========================================

// export interface TechStack {
//   name: string;
//   category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'DevOps';
// }

// export interface CaseStudy {
//   id: string;
//   title: string;
//   category: string;
//   overview: string;
//   challenge: string;
//   metrics: string[];
//   stack: string[];
//   imagePlaceholder: string;
//   details: {
//     problem: string;
//     solution: string;
//     architecture: string;
//     technicalDecisions: string[];
//     scalability: string;
//   };
// }

// // ==========================================
// // STATIC DATA PAYLOAD
// // ==========================================

// export const caseStudies: CaseStudy[] = [
//   {
//     id: 'agrisync-saas',
//     title: 'AgriSync Resource Platform',
//     category: 'Vertical SaaS / Architecture',
//     overview: 'A scalable resource-sharing architecture connecting rural endpoints with automated equipment and labor management systems.',
//     challenge: 'Designing a highly available, offline-capable synchronization engine that handles complex relational mapping between fluctuating inventory and localized demand.',
//     metrics: ['Sub-50ms query latency', 'Concurrent multi-tenant scaling', 'Offline-first synchronization'],
//     stack: ['Next.js 16', 'Node.js', 'PostgreSQL', 'Tailwind CSS 4', 'Redis'],
//     imagePlaceholder: '/images/work/agrisync-arch.jpg',
//     details: {
//       problem: 'Fragmented resource allocation led to severe inefficiencies and latency in agricultural supply chains.',
//       solution: 'Developed a centralized SaaS infrastructure with edge-caching and predictive routing algorithms.',
//       architecture: 'Microservices architecture deployed via Docker. API Gateway routes traffic between the Auth service, Inventory DB (PostgreSQL), and Real-time Notification engine (WebSockets).',
//       technicalDecisions: [
//         'PostgreSQL for complex relational queries and transaction integrity.',
//         'Redis for caching frequently accessed localized inventory data.',
//         'React Context API combined with optimistic UI updates to handle unstable network environments.'
//       ],
//       scalability: 'Horizontally scalable Node.js clusters handle concurrent regional spikes during peak harvest seasons.'
//     }
//   },
//   {
//     id: 'crop-vision-ai',
//     title: 'CropVision ML Engine',
//     category: 'Deep Learning / Computer Vision',
//     overview: 'A deep learning classification engine capable of detecting botanical pathologies and modeling geospatial spread probabilities.',
//     challenge: 'Optimizing a complex Convolutional Neural Network (CNN) for high-accuracy inference while maintaining a lightweight footprint for edge deployment.',
//     metrics: ['96%+ Classification Accuracy', 'Optimized Inference Time', 'Real-time Spread Mapping'],
//     stack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Streamlit'],
//     imagePlaceholder: '/images/work/cropvision-ml.jpg',
//     details: {
//       problem: 'Late detection of crop diseases caused exponential yield losses without data-driven intervention.',
//       solution: 'Trained and deployed a custom TensorFlow model exposed via a high-performance REST API for instant classification.',
//       architecture: 'Client-side React interface communicates with a FastAPI Python backend, which queues inference jobs to the TensorFlow model engine. Results are stored in a time-series database for trend analysis.',
//       technicalDecisions: [
//         'TensorFlow for robust model training and quantization capabilities.',
//         'FastAPI for asynchronous, high-throughput Python API endpoints.',
//         'Streamlit utilized for rapid internal prototyping of data visualization.'
//       ],
//       scalability: 'Stateless API design allows for auto-scaling of backend inference nodes based on incoming payload volume.'
//     }
//   },
//   {
//     id: 'nexus-graph',
//     title: 'Nexus Real-time Protocol',
//     category: 'Distributed Systems / WebSockets',
//     overview: 'A high-concurrency social interaction graph and real-time messaging layer designed for absolute minimal latency.',
//     challenge: 'Architecting a bidirectional communication system capable of maintaining thousands of persistent connections without memory leaks.',
//     metrics: ['10k+ Concurrent Connections', 'Distributed Pub/Sub', 'Zero Data Loss Protocol'],
//     stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
//     imagePlaceholder: '/images/work/nexus-sys.jpg',
//     details: {
//       problem: 'Traditional HTTP polling was incapable of delivering the sub-second latency required for modern social interactions.',
//       solution: 'Implemented a scalable WebSocket infrastructure utilizing a Redis Pub/Sub backplane for cross-server communication.',
//       architecture: 'Load balancer distributes WebSocket connections across multiple Node.js instances. MongoDB handles persistent message storage with indexed geospatial querying.',
//       technicalDecisions: [
//         'MongoDB chosen for flexible, schema-less storage of varied social graph structures.',
//         'Redis Pub/Sub implemented to synchronize WebSocket events across horizontally scaled Node servers.',
//         'Custom acknowledgment protocol built on top of Socket.io for guaranteed message delivery.'
//       ],
//       scalability: 'Sharded MongoDB clusters and dynamic WebSocket node provisioning ensure seamless handling of traffic spikes.'
//     }
//   }
// ];