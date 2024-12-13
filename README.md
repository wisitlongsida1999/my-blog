![My Blog Banner](/public/static/images/twitter-card.png)

# My Blog

This project is based on the **Tailwind Nextjs Starter Blog**, an excellent blogging template created by [Timothy Lin](https://github.com/timlrx). It combines **Next.js**, **Tailwind CSS**, and **Contentlayer** to provide a feature-rich and highly customizable foundation for building modern blogs.

## Features

- **Next.js with Typescript** for a robust development experience.
- **Tailwind CSS** for easy styling customization.
- **Contentlayer** to manage content logic.
- **Light and dark themes** with customizable colors.
- **MDX support**, allowing you to write JSX in markdown.
- **SEO optimizations**, including RSS feeds, sitemaps, and more.
- **Server-side syntax highlighting** with support for line numbers and highlighting.
- **Math rendering** using KaTeX.
- **Commenting options**, including Giscus, Utterances, and Disqus.
- **Search functionality** powered by Kbar or Algolia.
- Preconfigured security headers for enhanced security.

## Customizations

I have customized the original repository to better fit my blogging needs, including adjustments to the layouts, content, and deployment settings. The blog is now live and fully functional. Thanks to the original creators for providing such a great foundation!

## Installation and Development

### Clone the Repository

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog'
```

### Install Dependencies

```bash
yarn
```

> Note: For Windows users, you may need to set the `PWD` environment variable:
>
> ```bash
> $env:PWD = $(Get-Location).Path
> ```

### Run Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your blog in development mode. Any changes you make will reflect live in your browser.

## Deployment

### Vercel

The blog is deployed using [Vercel](https://vercel.com). Here's how you can deploy it:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the following command to deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and start the deployment process.

For more information, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Credits

This blog was built using the [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) by [Timothy Lin](https://www.timlrx.com). Many thanks to Timothy and the open-source community for their incredible contributions.

## License

This project is licensed under the [MIT License](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE).
