This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## About Project

### `Structure`

This project is Directory Browser. You can expand directories or if you press on directory's name, it becomes active. There is showing full path from root of active directory on top of the browser.

The code base is written by React Hooks using typescript. There are two main files in src/component directory:

#### Tree - getting all data and renndering root nodes(directories)

#### TreeNode - rendering one node(directory) with sub-directories(rucursively)

The data structure and data fetching are in the src/services/Tree.ts. All data is typed - TreeData. There is example of mocked data structure.

### `Libraries`

Jest, Enzyme - using for unit testing.

Axios - using for make REST request and get correct response. (It is not done until the correct data fetching. The problem is how to get correct response.data from https://www.mocky.io/.)

### `What is missing`

This project should have more tests. For example: integration, e2e.

State handling - loading and error when data is fetching.

Full external API usage - can't mocked request successfully by wanted data structure
