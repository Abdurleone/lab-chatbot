import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
