// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
// Data populated from Shivamedu_Resume.pdf
const PROJECT_CONTENT = [
  {
    title: 'Blog - Maniac',
    description:
      'Empowering writers with versatile blog creation. Spearheaded website development for diverse blog creation, supporting multiple formats, resulting in a 40% increase in user engagement. Implemented advanced tag filtering, enhancing content organization, and driving a 30% rise in user satisfaction.',
    techStack: ['React JS', 'Node Js', 'Express Js', 'Bootstrap', 'Firebase'],
    date: '2023',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shivam072001/Blog-Maniac', // <-- TODO: Update with your GitHub link
      },
      {
        name: 'Live Demo',
        url: 'https://blog-maniac-nine.vercel.app/', // <-- TODO: Update with your Hosted link
      },
    ],
    images: [
      // <-- TODO: Add paths to your project images
      {
        src: '/projects/blog-project.png',
        alt: 'Blog Maniac project screenshot',
      },
    ],
  },
  {
    title: 'Editor-io',
    description:
      'Codepen-inspired text editor with live Markdown preview for seamless creation. Developed innovative text editor, resembling Codepen, with 30% faster content creation and real-time Markdown preview. Integrated live text views, elevating productivity by 25% and enriching user engagement.',
    techStack: ['React Js', 'Bootstrap', '@github/markdown-toolbar-element'],
    date: '2022',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Shivam072001/Editor-io', // <-- TODO: Update with your GitHub link
      },
      {
        name: 'Live Demo',
        url: 'https://editor-io-rho.vercel.app/', // <-- TODO: Update with your Hosted link
      },
    ],
    images: [
      // <-- TODO: Add paths to your project images
      {
        src: '/projects/editor-project.png',
        alt: 'Editor-io project screenshot',
      },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Full-Stack Development', // Based on tech stack
    title: 'Blog - Maniac',
    src: '/projects/blog-project.png', // <-- TODO: Make sure you have a preview image at this path
    content: (
      // The `title` here MUST match the full title in PROJECT_CONTENT
      <ProjectContent project={{ title: 'Blog - Maniac' }} />
    ),
  },
  {
    category: 'Frontend Development', // Based on tech stack
    title: 'Editor-io',
    src: '/projects/editor-project.png', // <-- TODO: Make sure you have a preview image at this path
    content: <ProjectContent project={{ title: 'Editor-io' }} />,
  },
];
