# Getting Started with React with Reduxjs Toolkit App

[example: Redux Essentials, Part 3: Basic Redux Data Flow](https://redux.js.org/tutorials/essentials/part-3-data-flow)

[example: github](https://github.com/reduxjs/redux-essentials-example-app)

This is a demo React app using Reduxjs-Toolkit.
We will create a small Posts example.

The correct steps to use the latest reduxjs-toolkit are:

## Create a project with redux-typescript template

- using the `redux-typescript` template to start a project template.

```bash
yarn create react-app ts-redux-posts --template redux-typescript
```

- empty the `/src` folder
- add back index.tsx/index.css, App.tsx/App.css, react-app-env.d.ts, logo.svg

## Setup Navigation

[Project Setup](https://redux.js.org/tutorials/essentials/part-3-data-flow#project-setup)

## Creating the Posts Slice

[Creating the Posts Slice](https://redux.js.org/tutorials/essentials/part-3-data-flow#creating-the-posts-slice)

[Create a Redux State Slice](https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice)

## Create an empty Redux Store

We then create a `store` under a folder called `app`.
We will use the `configureStore({reducer: ...})` from the reduxjs-toolkit to create this store.

- Add Slice Reducers to the Store: [add the counterSlice.reducers to the store](https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store)

The store should export the `store`, the `store.dispatch` and the `RootState`:

```typescript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```

[create a redux store](https://redux.js.org/tutorials/quick-start#create-a-redux-store)

## Provide the Redux Store to React

The way to wire the store to the app is to import the `store` and the `Provider` the wrap the store inside of the provider as in:

```typescript
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

At this time, you should be able start the app with `yarn start` and see the state in the `Redux DevTools`.

[Wire the index.tsx to use `Provider` and `store`](https://redux.js.org/tutorials/quick-start#provide-the-redux-store-to-react)

## Exporting the Redux Hooks

Create a file called `hooks.ts` under the foler `/app`.

Export an app-specific dispatch hook `useAppDispatch` and an app-specific selector hook `useAppSelector`

```typescript
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Create a React component \<PostsList /> using the Redux hooks

[Showing the Posts List](https://redux.js.org/tutorials/essentials/part-3-data-flow#showing-the-posts-list)

- replace a traditional `useState()` with `useAppSelector()` and `useAppDispatch()`.

  - instead of using a state variable `posts`, we will use `useAppSelector()` to get the store value.
  - instead of using `setPosts` state hook, we will use `useAppDispatch` to call an action.

## Call the Redux component from the \<App />

```typescript
import Posts from "./pages/Posts";

<Posts />;
```

## Create a React Component \<AddPostForm /> using the Redux hooks

[Adding New Posts](https://redux.js.org/tutorials/essentials/part-3-data-flow#adding-new-posts)

- instead of using `setPosts` state hook, we will use `useAppDispatch` to call an action.

We will need to add and export necessary reducers in the postsSlice.

```typescript
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;
```

## Call the Redux component from the \<App />

```typescript
import AddPostForm from "./pages/AddPostForm";

<AddPostForm />;
```
