# NOTES.md - repo-base (Hito 1.1)

## 1. What does `type": "module"` do in package.json?

**Answer: `type": "module"` indicates that the code will act as a module, otherwise the code will act as a CommonJS file.**

## 2. dependencies vs devDependencies
Where do react, react-dom, vite, eslint and prettier go?

**Answer: React is a dependencie, react-dom is a dependencie, vite is a devDependencie, eslint is a devDependencie and prettier is a devDependencie**

## 3. Scripts
What do `dev`, 

**Answer: dev is a live server for development. Nothing is written to dist/. build produces the final optimized files in dist/, with hashed names. preview serves that dist/ folder locally, so you can test what you'd actually deploy.**

## 4 The `^` and package-lock.json
What does `^` mean in a version? What is `package-lock.json` for?

**Answer: This sign before the number of the version means npm accepts newer versions as long as the first number doesn't change. package-lock.json saves the exact version that npm installed. For example, in package.json we could see this version: ^19.2.8 and in package-lock.json 19.3.0. In my case, this guarantees that both of my PCs intall the same version, so I dont get version problems.**

## 5. Why is Prettier's config in package.json?
What is the advantage and the disadvantage compared to `.prettierrc`?

**Answer:** Prettier's config is in `package.json` because it's easier than creating a new file. However, `.prettierrc` is more intuitive for other developers and for the future.

## 6. eslint-config-prettier
What problem does it solve? Why does it go last in the `extends` array?

** Answer: The problem that eslint-config-prettier solves is that eslint and prettier don't disturb each other. **