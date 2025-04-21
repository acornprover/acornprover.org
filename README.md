# acornprover.org

The main website for the Acorn theorem prover.

The website is built with the [Docusaurus](https://docusaurus.io) framework, which is designed for documentation websites. It's pretty easy to add new documentation, or to edit the documentation - you're
basically just editing Markdown files.

Please feel free to contribute pull requests! It's especially helpful to add documentation when you add new components to the standard library.

## Where to put things

Description of the standard library goes into `/docs/library`.

Overall language documentation is in `/docs/language` or `/docs/tutorial`.

To write a blog post, add a markdown file in the `/blog` directory.

## Testing it out

If you've made changes and want to see them locally, run:

```
npm install
npm start
```

To deploy to production, run:

```
npm run deploy
```

## Social cards

The social card is the image that gets included on social media when a page gets shared.

You can set the default social card for the site in the config, under `themeConfig.image`, and each blog
post can also have its own `image` in its markdown.

TODO: how large should they be, how can they be generated
