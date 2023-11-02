const Button = (props) => {
  const {
    children,
    type,
    ghost = "",
    color = "",
    htmlType,
    url,
    className = "",
    size = "",
  } = props;
  console.log(size);
  return (
    <>
      {htmlType === "link" ? (
        <a
          href={url}
          className={`btn btn--${type}${ghost && " btn--ghost"}${
            color && ` btn--${color}`
          }${className && ` ${className}`}${size && ` btn-${size}`}`}
        >
          {children}
        </a>
      ) : (
        <button
          type="submit"
          className={`btn btn--${type}${ghost && " btn--ghost"}${
            color && `btn--${color}`
          }${className && ` ${className}`}${size && ` btn--${size}`}`}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
