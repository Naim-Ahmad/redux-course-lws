const delayMiddleware = (store) => (next) => (action) => {
  if (action.type === "todo/added") {
    console.log("delaying middleware");

    setTimeout(() => {
      console.log("delaying");
      // console.log(store.getState());
      next(action);
    }, 2000);

    return;
  }
  return next(action);
};

const fetchTodoMiddleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};

module.exports = {
  delayMiddleware,
  fetchTodoMiddleWare,
};
