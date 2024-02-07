import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
      <Link
        to="/client/login"
        className="bg-blue-200 text-center rounded-lg px-5 py-3 w-40"
      >
        Painel Cliente
      </Link>
      <Link
        to="/admin/login"
        className="bg-blue-200 text-center rounded-lg px-5 py-3 w-40"
      >
        Painel Admin
      </Link>
    </div>
  );
}
