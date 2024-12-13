interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'My Certificate Repository',
    description: `Explore my collection of achievements and certifications in various fields, 
    showcasing my skills and expertise. From tech to professional development, see the milestones I've reached.`,
    imgSrc: '/static/images/certificate.jpg',
    href: 'https://github.com/wisitlongsida1999/Certificate',
    
  }
]

export default projectsData
