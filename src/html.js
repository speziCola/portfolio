import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
        />
        <meta httpEquiv="Cache-control" content="public"></meta>
        {props.headComponents}
      </head>

          <body {...props.bodyAttributes}>
            {props.preBodyComponents}
            <div
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: props.body }}
            />
            {props.postBodyComponents}
          </body>

    </html>
  );
}

HTML.propTypes = {
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
