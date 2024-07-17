import { Helmet } from "react-helmet";


const MetaDecorator = ({ title, description,imageUrl  }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <link rel="canonical" href={"https://metatech-official.co"+ window.location.pathname} />

    <meta
      property="og:url"
      content={"https://metatech-official.co"+ window.location.pathname}
    />
    <meta name="twitter:card" content={title} />
    <meta name="twitter:image:alt" content={title} />
  </Helmet>
);


export default MetaDecorator