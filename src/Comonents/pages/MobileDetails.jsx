import { useParams, Link } from "react-router-dom";
import PhoneList from "../Data/Data";
import AddToCartButton from "../../components/AddToCartButton";

const MobileDetails = () => {
  const params = useParams();
  const phone = PhoneList.find((item) => item.id === params.id);

  if (!phone) {
    return (
      <div className="container py-4">
        <h2>Product not found</h2>
        <Link to="/mobiles">Back to Mobiles</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={phone.img}
            alt={phone.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", objectFit: "contain", width: "100%" }}
          />
        </div>

        <div className="col-md-6">
          <h1>{phone.title}</h1>
          <p className="text-muted">{phone.author}</p>
          <h3 className="text-primary">{phone.price} EGP</h3>
          <p>{phone.description}</p>

          <div className="d-flex gap-3 mb-3">
            <span className="badge bg-success">{phone.stock}</span>
            <span className="badge bg-warning text-dark">Sale: {phone.sale}%</span>
          </div>

          <AddToCartButton product={phone} className="btn btn-primary me-2" />
          <Link to="/mobiles" className="btn btn-outline-primary">
            Back to Mobiles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;