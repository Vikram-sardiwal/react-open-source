import PropTypes from "prop-types";

function Card({
  title,
  description,
  image,
  imageAlt,
  actionText,
  buttonText,
  actionLink,
  buttonLink,
  onAction,
  onButtonClick,
  action,
  children,
  className = "",
  ...props
}) {
  const finalActionText = actionText || buttonText;
  const finalActionLink = actionLink || buttonLink;
  const finalOnAction = onAction || onButtonClick;

  return (
    <div className={`card ${className}`.trim()} {...props}>
      {image && (
        <div className="card-image-wrapper">
          <img
            src={image}
            alt={imageAlt || (typeof title === "string" ? title : "Card image")}
            className="card-image"
          />
        </div>
      )}

      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}

        {(action || finalActionText) && (
          <div className="card-action">
            {action ? (
              action
            ) : finalActionLink ? (
              <a
                href={finalActionLink}
                className="card-button"
                onClick={finalOnAction}
                target={finalActionLink.startsWith("http") ? "_blank" : undefined}
                rel={
                  finalActionLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {finalActionText}
              </a>
            ) : (
              <button
                type="button"
                className="card-button"
                onClick={finalOnAction}
              >
                {finalActionText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  actionText: PropTypes.node,
  buttonText: PropTypes.node,
  actionLink: PropTypes.string,
  buttonLink: PropTypes.string,
  onAction: PropTypes.func,
  onButtonClick: PropTypes.func,
  action: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
