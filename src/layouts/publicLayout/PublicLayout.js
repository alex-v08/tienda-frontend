import "./styles/publicLayout.css";

export const PublicLayout = (children) => {
  return `<div id='publicLayout'>${children()}</div>`;
};
