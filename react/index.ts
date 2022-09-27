import ReactVersion from "shared/ReactVersion";

export { ReactVersion as version };

function createElement(args) {
  console.log(...args);
}

export default {
  version: ReactVersion,
  createElement,
};
