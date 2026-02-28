import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const REDIRECTS = {
  "/DentalFinancing": "/dental-financing",
  "/CosmeticFinancing": "/cosmetic-financing",
  "/VisionFinancing": "/vision-financing",
  "/FertilityFinancing": "/fertility-financing",
  "/GeneralSurgeryFinancing": "/general-surgery-financing",
  "/MedicalFinancing": "/medical-financing",
  "/DentalImplantFinancing": "/dental-implant-financing",
  "/CarecreditAlternatives": "/carecredit-alternatives",
  "/CantAffordMedicalBill": "/cant-afford-medical-bill",
};

export default function LegacyRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = REDIRECTS[location.pathname];
    if (target) {
      navigate(target, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}