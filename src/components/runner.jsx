export default function withStyles(Component) {
  return (props) => {
    const style = { padding: "0.2rem", margin: "1rem" };
    return <Component style={style} {...props} />;
  };
}

const Button = () => <button>Click me!</button>;
const Text = () => <p>Hello World!</p>;

export const StyledButton = withStyles(Button);
export const StyledText = withStyles(Text);
