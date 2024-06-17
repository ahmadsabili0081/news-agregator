import classnames from "classnames";
import PropTypes from "prop-types";
import styleNewsCard from "./NewsCard.module.css";
import { formatDate } from "../../utils/formatDate";
let NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLastChild,
}) => {
  return (
    <>
      <div
        className={classnames(styleNewsCard.newsCard, {
          [styleNewsCard.newsCardGap]: notLastChild,
        })}
      >
        <div className={styleNewsCard.imgContainer}>
          <img
            className={styleNewsCard.img}
            src={src}
            alt={`${title} thumbnail image`}
          />
          <p className={styleNewsCard.imgTitle}>{title}</p>
        </div>

        <div className={styleNewsCard.newsCardContent}>
          <p className={styleNewsCard.newsCardDate}>
            {formatDate(publishedAt)}
          </p>
          <p
            className={styleNewsCard.newsCardAuthor}
          >{`${author} | ${sourceName}`}</p>
          <p className={styleNewsCard.newsCardDesc}>{description}</p>
          <a
            className={styleNewsCard.url}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to Website
          </a>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  notLastChild: PropTypes.bool,
};
export default NewsCard;
