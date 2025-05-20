import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../utils/constants";

// Component for the product header section
const ProductHeader = ({ heading, subheading, description }) => {
  const headingWords = heading.split(" ");
  const navigate = useNavigate();
  return (
    <header className="md:space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {headingWords}
        </h1>
        <button className="md:px-4 px-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:h-12 text-white" onClick={() => navigate("/contactus")}>
          Get In Touch
        </button>
      </div>

      <h2 className="text-xl text-[#080c1b]">{subheading}</h2>
      <p className="text-[#000000] max-w-3xl">{description}</p>
    </header>
  );
};

// Component for the product image showcase
const ProductImage = ({ image, alt }) => {
  return (
    <div className="border-[15px] md:border-[35px] border-black md:h-[80vh] rounded-3xl overflow-hidden">
      {image ? (
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Image not available</p>
        </div>
      )}
    </div>
  );
};

// Component for each product detail item
const DetailItem = ({ icon, title, content, img }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start rounded-2xl shadow-md p-6 border-black border-2">
      <div className="w-12 h-12 flex-shrink-0">
        {icon && (
          <img src={icon} alt={`${title} icon`} className="w-full h-full" />
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-around items-start w-full gap-6">
        <div className="flex-1 space-y-1">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-[#000000] text-lg text-justify">{content}</p>
        </div>
        {img && (
          <img
            src={img}
            alt={`${title} illustration`}
            className="w-full md:w-1/4 rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

// Component for the product details section
const ProductDetails = ({ details }) => {
  if (!details || details.length === 0) return null;

  return (
    <section aria-labelledby="product-description-heading">
      <h3
        id="product-description-heading"
        className="text-3xl md:text-6xl font-semibold text-[#040711] md:my-10"
      >
        Product Description
      </h3>
      <div className="md:space-y-12">
        {details.map((detail, index) => (
          <DetailItem
            key={index}
            icon={detail.icon}
            title={detail.title}
            content={detail.content}
            img={detail.img}
          />
        ))}
      </div>
    </section>
  );
};

// Component for the features section
const ProductFeatures = ({ features, featureIcon, featureImg }) => {
  if (!features || features.length === 0) return null;

  return (
    <section
      aria-labelledby="key-features-heading"
      className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl shadow-md border-black border-2"
    >
      <div className="flex-1 space-y-4 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex-shrink-0">
            {featureIcon && <img src={featureIcon} alt="Features icon" />}
          </div>
          <h3
            id="key-features-heading"
            className="text-2xl font-semibold text-black"
          >
            Key Features
          </h3>
        </div>

        {/* Vertical line */}
        <div
          className="absolute hidden md:block top-[3.6rem] left-7 h-[calc(100%-3.6rem)] w-1 bg-[#B388F9] rounded-full"
          aria-hidden="true"
        ></div>

        <ul className="md:space-y-4 md:pl-14 pt-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div
                className="w-5 h-5 mt-1 bg-[#B388F9] rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-[#050507]">{feature.title}</p>
            </li>
          ))}
        </ul>
      </div>

      {featureImg && (
        <div className="flex-1 w-full">
          <img
            src={featureImg}
            alt="Features visualization"
            className="rounded-xl shadow-sm w-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

// Component for the extra specifications section
const ExtraSection = ({ extraSection, featureIcon }) => {
  if (
    !extraSection ||
    !extraSection.title ||
    !extraSection.bullets ||
    extraSection.bullets.length === 0
  ) {
    return null;
  }

  return (
    <section
      aria-labelledby="extra-section-heading"
      className="p-6 rounded-2xl shadow-md border-black border-2"
    >
      <h3
        id="extra-section-heading"
        className="text-2xl font-semibold text-black mb-8 flex items-center gap-3"
      >
        <div className="w-10 h-10 flex-shrink-0">
          {featureIcon && <img src={featureIcon} alt="" aria-hidden="true" />}
        </div>
        {extraSection.title}
      </h3>

      <div className="relative pl-12 space-y-8">
        {/* Vertical Line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-1 bg-[#B388F9] rounded-full"
          aria-hidden="true"
        ></div>

        {extraSection.bullets.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col md:flex-row items-start justify-between gap-4 border rounded-xl p-4"
          >
            {/* Circular Icon */}
            <div
              className="w-5 h-5 bg-[#B388F9] rounded-full flex items-center justify-center absolute -left-8 top-1"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-2 flex-1">
              <h4 className="text-lg font-bold text-[#050507]">{item.title}</h4>

              {/* Sub Bullets */}
              {item.subBullets && item.subBullets.length > 0 && (
                <ul className="list-disc list-inside mt-2 space-y-1 text-black">
                  {item.subBullets.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <strong>{sub.title}</strong> {sub.desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {item.img && (
              <div className="w-full md:w-1/3 mt-4 md:mt-0">
                <img
                  src={item.img}
                  alt={`${item.title} visualization`}
                  className="w-full rounded-lg shadow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Product component
export default function Product() {
  const { id } = useParams();
  const productId = Number(id);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    // Simulate API call / data fetching
    try {
      const foundProduct = products.find((p) => p.id === productId);

      if (!foundProduct) {
        setError(true);
      } else {
        setProduct(foundProduct);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-xl text-gray-500">Loading product information...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-xl text-gray-500">Product not found.</p>
        <a href="/" className="text-blue-600 hover:underline">
          Return to product list
        </a>
      </div>
    );
  }

  const {
    heading,
    subheading,
    description,
    photos,
    details,
    features,
    featureicon,
    featureimg,
    extraSection,
  } = product;

  return (
    <main className="bg-white md:py-16 md:px-4 lg:px-12 xl:px-40">
      <div className="flex flex-col mx-2 md:mx-8 lg:mx-20 xl:mx-40 gap-8  md:mt-0">
        <ProductHeader
          heading={heading}
          subheading={subheading}
          description={description}
        />

        <ProductImage image={photos?.mainImg} alt={heading} />

        <ProductDetails details={details} />

        <ProductFeatures
          features={features}
          featureIcon={featureicon}
          featureImg={featureimg}
        />

        <ExtraSection extraSection={extraSection} featureIcon={featureicon} />
      </div>
    </main>
  );
}
