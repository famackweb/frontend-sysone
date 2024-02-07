import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutAdm } from "../view/layouts/LayoutAdm";
import { LayoutAuth } from "../view/layouts/LayoutAuth";
import { LayoutClient } from "../view/layouts/LayoutClient";
import { LandingPage } from "../view/pages/LandingPage";
import { LoginAdmin } from "../view/pages/admin/LoginAdmin";
import { DashboardAdmin } from "../view/pages/admin/DashboardAdmin";
import { Customers } from "../view/pages/admin/Customers";
import { Income } from "../view/pages/admin/Income";
import { Financial } from "../view/pages/admin/Financial";
import { SupportCalls } from "../view/pages/admin/SupportCalls";
import { Contracts } from "../view/pages/admin/Contracts";
import { PasswordRecoveryAdmin } from "../view/pages/admin/PasswordRecoveryAdmin";
import { NewCustomer } from "../view/pages/admin/NewCustomer";
import { LayoutSettingsAdmin } from "../view/layouts/LayoutSettingsAdm";
import { UsersAdmin } from "../view/pages/admin/UsersAdmin";
import { ProductsAdmin } from "../view/pages/admin/ProductsAdmin";
import { Logos } from "../view/pages/admin/Logos";
import { LoginScreenshots } from "../view/pages/admin/LoginScreenshots";
import { Baseboard } from "../view/pages/admin/Baseboard";
import { EditCustomer } from "../view/pages/admin/EditCustomer";
import { LoginClient } from "../view/pages/client/LoginClient";
import { PasswordRecoveryClient } from "../view/pages/client/PasswordRecoveryClient";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<LayoutAuth />}>
          <Route path="/client/login" element={<LoginClient />} />
          <Route
            path="/client/password-recovery"
            element={<PasswordRecoveryClient />}
          />

          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route
            path="/admin/password-recovery"
            element={<PasswordRecoveryAdmin />}
          />
        </Route>

        <Route element={<LayoutClient />}>
          <Route path="/client/dashboard" element={<h1>dashboard client</h1>} />
        </Route>

        <Route element={<LayoutAdm />}>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />

          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/customers/new" element={<NewCustomer />} />
          <Route path="/admin/customers/:id" element={<EditCustomer />} />

          <Route path="/admin/contracts" element={<Contracts />} />
          <Route path="/admin/income" element={<Income />} />
          <Route path="/admin/financial" element={<Financial />} />
          <Route path="/admin/calls" element={<SupportCalls />} />

          <Route element={<LayoutSettingsAdmin />}>
            <Route path="/admin/settings/users" element={<UsersAdmin />} />
            <Route
              path="/admin/settings/products"
              element={<ProductsAdmin />}
            />
            <Route path="/admin/settings/logos" element={<Logos />} />
            <Route
              path="/admin/settings/login-screenshots"
              element={<LoginScreenshots />}
            />
            <Route path="/admin/settings/baseboard" element={<Baseboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
