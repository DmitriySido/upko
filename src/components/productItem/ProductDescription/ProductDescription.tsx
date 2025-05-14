import React, {useState, useEffect} from "react";
import "./ProductDescription.css";
import {ProductData} from "../../../utils/getProductData";
import {getProductMarkdown} from "../../../utils/getProductMarkdown";
import ReactMarkdown from "react-markdown";

const TABS = [
  {label: "Description"},
  {label: "Return & Refund Policy"},
  {label: "Shipping Policy"},
  {label: "Reviews"},
];

interface Props {
  productData: ProductData;
}

const ProductDescription: React.FC<Props> = ({productData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      const content = await getProductMarkdown(productData.index);
      setMarkdown(content);
    };
    loadMarkdown();
  }, [productData.index]);

  return (
    <>
      <section className="product-description-section">
        <div className="container">
          <ul className="product-description-tabs">
            {TABS.map((tab, i) => (
              <li key={tab.label}>
                <div
                  className={
                    "product-description-tab" +
                    (activeTab === i ? " active" : "")
                  }
                  role="tab"
                  tabIndex={0}
                  onClick={() => setActiveTab(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveTab(i);
                  }}
                >
                  {tab.label}
                </div>
              </li>
            ))}
          </ul>
          <div className="product-description-content">
            {activeTab === 0 && (
              <div className="product-description-placeholder">
                <div className="product-description-placeholder-firstTab">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="product-description-placeholder">
                <p>
                  <strong>
                    UPKO Return and Refund Policy: Quality Assurance and
                    Customer Satisfaction
                  </strong>
                </p>
                <p>
                  At UPKO, we are dedicated to maintaining stringent product
                  quality control and ensuring a pleasant shopping experience
                  for our consumers.
                </p>
                <p>
                  <strong>Order Cancellation Policy:</strong>
                </p>
                <ul>
                  <li>
                    We regret to inform you that we cannot accept any
                    cancellations once an order has been shipped.
                  </li>
                </ul>
                <p>
                  <strong>Return Policy for Unopened Items:</strong>
                </p>
                <ul>
                  <li>
                    We only accept returns for items that are in their original
                    packaging and sealed. Items that have been unsealed or
                    unpackaged, without quality issues, are not eligible for
                    return or replacement.
                  </li>
                </ul>
                <p>
                  <strong>Return Process:</strong>
                </p>
                <ul>
                  <li>
                    To initiate a return, please contact our customer service
                    via email, providing your order number and a video as proof
                    of the product's condition.
                  </li>
                  <li>
                    Once your return request is approved, you will be provided
                    with the return address. Please note that customers are
                    responsible for all shipping costs and any associated taxes.
                  </li>
                  <li>
                    Kindly provide us with the tracking number to facilitate the
                    return process.
                  </li>
                  <li>
                    We will process the refund upon receipt and verification of
                    the item's eligibility. Refunds will be issued back to your
                    original payment method within 1-2 business days. Please
                    allow additional time for your bank or credit card company
                    to process the refund.
                  </li>
                </ul>
                <p>
                  <strong>Default Products:</strong>
                </p>
                <ul>
                  <li>
                    If you receive a product with any issues, please email us
                    within 24 hours, attaching your order number and proof
                    photos. Our customer service team will follow up for
                    verification and handle your case accordingly.
                  </li>
                </ul>
                <p>
                  <strong>Undeliverable Returns:</strong>
                </p>
                <ul>
                  <li>
                    For packages returned to us marked as "rejected" or due to
                    uncontacted recipients, we are unable to issue a refund.
                    Please ensure that your shipping information is accurate to
                    avoid such situations.
                  </li>
                </ul>
                <p>
                  We appreciate your understanding and cooperation in adhering
                  to our return and refund policies. Thank you for choosing
                  UPKO.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="product-description-placeholder">
                <strong>Order Processing</strong>
                <p>
                  All orders are processed within 1 to 3 business days
                  (excluding weekends and holidays) after you receive your
                  confirmation email. You’ll receive a notification once your
                  order has shipped.
                </p>

                <strong>International Shipping</strong>
                <p>
                  We ship via FedEx, DHL, UPS, and SF Express, with delivery
                  typically within 3-10 business days, depending on the
                  destination and customs clearance.
                </p>

                <strong>Free Shipping</strong>
                <p>Enjoy FREE SHIPPING on orders over $109!</p>

                <strong>Shipping Charges</strong>
                <p>
                  Shipping charges will be calculated and displayed at checkout.
                  Please note that your order may be subject to import duties
                  and taxes (including VAT) upon arrival in your destination
                  country. These costs will be the responsibility of our
                  customers.
                </p>
                <strong>Order Status</strong>
                <p>
                  Once your order has shipped, you’ll receive an email with a
                  tracking number. Please allow 48 hours for tracking
                  information to become available. If you haven’t received a
                  shipping update within 2 days of your confirmation email,
                  please contact us at contact@upkoofficialshop.com with your
                  name and order number, and we’ll assist you.
                </p>

                <strong>Important Notice</strong>
                <p>
                  Ensure your contact information is accurate when placing your
                  order. We are not responsible for misdeliveries due to
                  incorrect information and will not issue refunds or credits in
                  such cases. We are not responsible for lost or stolen
                  packages. If you do not receive your shipment, please contact
                  us by email, and our customer service team will assist you in
                  communicating with the shipping carriers to resolve the issue.
                  Thank you very much for choosing UPKO. If you have any further
                  questions, please feel free to contact us via email or through
                  our online messaging. Our customer service team will get back
                  to you within 48 hours. Your patience and understanding would
                  be much appreciated.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div className="product-description-placeholder">
                <h2>Customer Reviews</h2>
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
