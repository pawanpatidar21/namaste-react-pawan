
// 1. What is `NPM`?
// Todo:- Think of packages like the brick and mortar of your applications. You can install and combine multiple packages together in order to create the most efficient program for your end users and all those packages are easily maintained by NPM. The NPM database helps keep all your packages up to date by allowing the packages to be managed and updated by their publishers and other developers. Whenever an update or improvement is made to a package and uploaded to NPM's database, all users who currently use that package can easily fetch those updates from the server and always keep their packages up to date. NPM also helps handle package dependencies.

//2. - What is `Parcel/Webpack`? Why do we need it?
// Todo:- Parcel and webpack are the bundlers
/***
 * - What is `Parcel/Webpack`? Why do we need it?
 *
 * HMR- Hot Module Replcaement
 * File Watcher algorithm - c++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev add Production Build
 * Super Fast build algorithm
 * Image Optimization
 * caching while development
 * Compression
 * Compatable with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Transitive dependencies
 *
 */

//3.- What is `.parcel-cache`
//Todo:-.cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode

//4. What is `npx` ?
//Todo:-NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.
// Todo 1. A package can be executable without installing the package.It is an npm package runner so if any packages aren’t already installed it will install them automatically.
//Todo 2. In npx you can create a react app without installing the package:`npx create-react-app myApp`This command is required in every app’s life cycle only once.
//Todo 3. Npx is a tool that use to execute packages.
//Todo 4.  Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.


//5.What is difference between `dependencies` vs `devDependencies`
//Todo:- The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.To save a dependency as a devDependency on installation we need to do an npm install --save-dev, instead of just an npm install --save.

//6. - What is Tree Shaking?
//Todo:-When we import and export modules in JavaScript, most of the time there is unused code floating around. Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.

//7.What is Hot Module Replacement?
//Todo:-By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

//8.List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
//Todo:-

//9.