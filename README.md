# Yuval Datner - Fullstack developer and React Specialist

For this project, as requested, I used `cra` with `Typescript`.
As a best practice, I used [ Storybook ](https://storybook.js.org/) as a development playground and self-documenting tool.

For a CSS solution, I used the extremely powerful and popular [TailwindCSS](https://tailwindcss.com/). A pure css framework
that uses utility classes instead of components to allow greater flexibility.
Please do not be alarmed by the long classnames, it's expected. This can be hidden inside ""helper classes""
but I do not recommend that.
Please explore TailwindCSS for further explanation about the benefits of a style-system over a ui-library

I also added extra effort To develop these components in such a way that they are easy to use.
What I didn't do, that I would normally, is break-down ui components to smaller, more manageable, components.
I also skipped on perfecting the stories and full responsiveness. But this code is otherwise production-ready

I also did not do any cleanup from the generator tools I used (namely `cra`, `storybook`, and `tailwindcss`)
nor did I configure `TypeScript` further than default
. Tests were skipped, aswell.

Please note, the **app** itself lacks any implementation of the requested Components, as they are all in the Storybook.
To view the **storybook**. Please run

```bash
$ yarn storybook
```

or

```bash
$ npm run storybook
```

after you install the dependencies to view the components.
They are named `ChatPrompt` and `BestSellers`

---

steps:

- setup env
- setup tailwindcss
- add storybook
- setup storybook env
- implement `ChatPrompt`
- implement `ChatPrompt` story
- implement `BestSellers`
- implement `BestSellers` story
- refactor out `Product` from `BestSellers`

if there are any issues running the project, please contact me @ [contact@datner.me](mailto:contact@datner.me)
